import { useState, useRef } from "react";
import { FaEye } from "react-icons/fa";

export function Password() {
  const [password, setPassword] = useState("");
  const [isHovered, setIsHovered] = useState(true);
  const [useRightBottom, setUseRightBottom] = useState(false);
  const [position, setPosition] = useState({
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  });
  function showPass() {
    console.log(password);
  }
  function handlePassword(event) {
    setPassword(event.target.value);
  }
  function setSave() {
    //Generate random numbers
    let randomMaker1 = Math.round(Math.random() * 280);
    let randomMaker2 = Math.round(Math.random() * 280);
    let randomMaker3 = Math.round(Math.random() * 280);
    let randomMaker4 = Math.round(Math.random() * 280);

    if (password) {
      setIsHovered(true);
      setPosition(() => {
        return {
          left: `0`,
          top: `0`,
          right: `0`,
          bottom: `0`,
        };
      });
    } else {
      if (useRightBottom) {
        // Use `right` and `bottom` for positioning
        setPosition({
          top: `-${randomMaker3}`,
          left: `-${randomMaker4}`,
          right: `${randomMaker1}`,
          bottom: `${randomMaker2}`,
        });
      } else {
        // Use `top` and `left` for positioning
        setPosition({
          top: `${randomMaker1}`,
          left: `${randomMaker2}`,
          right: `-${randomMaker4}`,
          bottom: `${randomMaker3}`,
        });
      }
      //Toggle useRightBottom
      setUseRightBottom((prev) => {
        return !prev;
      });
      setIsHovered(false);
    }
  }

  return (
    <div className="overflow-hidden w-[100vw] h-[100vh] flex flex-col items-center justify-center ">
      <div className=" rounded-md bg-primary-color p-10 m-8 border border-solid border-accent-color-1 ">
        <h1 className="text-center text-Text-color text-lg font-bold font  p-8 m-1">
          Please enter correct password
        </h1>
        <form action="#" method="post">
          
          <div className=" flex justify-center items-center">
          <label
            className="ml-1.5 w-[50%] text-Text-color p-8 "
            htmlFor="password"
          >
            Pssword:
          </label>
            <input
              placeholder="Enter your pass"
              onChange={handlePassword}
              className="h-[50%] bg-Secondary-color w-[100%] text-Text-color p-3  focus:outline-accent-color-1"
              type="password"
              name="password"
              id="password"
              required
            />

            <span className="text-2xl relative p-1 right-8 hover:cursor-pointer " onClick={showPass}>
              <FaEye />
            </span>
          </div>
          <div className="flex justify-center ">
            <button
              onMouseEnter={setSave}
              className={
                isHovered
                  ? // Conditional display content based on password(invalid or not)
                    `rounded-xl relative border width-[50%] text-Text-color border-accent-color-1 py-2 px-4 mt-8 hover:cursor-pointer`
                  : `rounded-xl bg-red-400 relative  border width-[50%] text-Text-color border-accent-color-1 py-2 px-4 mt-8 hover:cursor-pointer`
              }
              style={{
                // Use position properties for move button and animate that
                transition: position,
                transitionDuration: "700ms",
                top: `${position.top}px`,
                left: `${position.left}px`,
                right: `${position.right}px`,
                bottom: `${position.bottom}px`,
              }}
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

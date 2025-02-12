import { useState } from "react";
export function Password() {
  const [password, setPassword] = useState("");

  return (
    <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center ">
      <div className="rounded-md bg-primary-color p-10 m-8 border border-solid border-indigo-600 ">
        <h1 className=" text-Text-color text-lg font-bold font  p-8 m-1">
          Please enter correct password
        </h1>
        <form className="" action="#" method="post">
          <label
            className="ml-1.5 w-[50%] text-Text-color p-8 "
            htmlFor="password"
          >
            Pssword:
          </label>
          <input
            className="bg-Secondary-color w-[48%] text-Text-color p-3  focus:outline-accent-color-1"
            type="password"
            name="password"
            id="password"
          />
          <div className="flex justify-center">
            <button className="border w-[50%]  text-Text-color  border-accent-color-1 py-2 px-4 mt-8">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

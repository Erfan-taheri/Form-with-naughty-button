import { useState } from "react"
export function Password(){
    const [password , setPassword ] =  useState("");
        return(
        <>
        <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
        <h1>Please enter correct password</h1>
        <form action="#" method="post">
        <label htmlFor="password">Pssword</label>
        <input type="password" name="password" id="password" />
         <div><button>Send</button></div>
        </form>
        </div>
        </>
    )
}
import { useState } from "react"
export function Password(){
    const [password , setPassword ] =  useState("");
        return(
        <>
        <h1>Please enter correct password</h1>
        <form action="#" method="post">
        <label htmlFor="password">Pssword</label>
        <input type="password" name="password" id="password" />
         <button>Send</button>
        </form>
        </>
    )
}
import React, { useEffect, useState } from 'react'
import axios from "axios"
const EffectTutorial = () => {
    const [data,setData] = useState("")
    const [count,setCount] = useState(0)

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then((response)=>{
            console.log("response",response)
            setData(response.data[0].email);
            console.log("api called")
        })
    },[count])
  return (
    <div>
        hello
        <h1>{data}</h1>
        <h1>{count}</h1>
        <button onClick={()=>{
            setCount(count + 1)   
     }}> Clicked

        </button>
    </div>
  )
}

export default EffectTutorial
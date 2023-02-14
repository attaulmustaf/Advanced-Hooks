import React,{useRef} from 'react'

const RefTutorial = () => {
    const inputRef = useRef(null);
    const onClick =()=>{
        inputRef.current.value =""
        inputRef.current.focus()
    }
  return (
    <div>
        <h1>ATTA</h1>
        <input type ="text" placeholder='ex......' ref ={inputRef} />
        <button onClick={onClick}>Change name</button>
    </div>
  )
}

export default RefTutorial
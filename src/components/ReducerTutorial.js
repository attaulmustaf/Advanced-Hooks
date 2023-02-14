import React, { useReducer } from 'react'

const reducer =(state,action)=>{
    switch (action.type){
        case "INCREMENT":
            return {
                count :state.count + 1 ,  showText :state.showText
            }
         case "toggleShowText":
             
         return {
            count : state.count , showText :!state.showText
         }
         default :
         return state;

    }
}

const ReducerTutorial = () => {
    const [state,dispatch] = useReducer(reducer,{count:0 , showText:true})
    // const [count, setCount] = useState(0);
    // const [showText, setShowText] = useState(true)
     
    return (
        <>
            <h1>
                {state.count}
            </h1>
            <button onClick={() => {
                // setCount(count + 1)
                // setShowText(!showText)
                dispatch({type : "INCREMENT"});
                dispatch({type :"toggleShowText"})
            }}>
            Click here
            </button>
            {state.showText && <p>
                this is a text</p>}
        </>
    )
}

export default ReducerTutorial
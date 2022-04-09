import React, { useState } from 'react'

import Score from "./Scores/Scores";
import GetQuestions from "./GetQuestions/GetQuestions";
const Main = (props) => {
    const questValue = props.question[0].value
    const [score, setScore] = useState([0])
    const increaseSteScore = () =>{
        let newScore = [...score]
        newScore[0] = +newScore[0] + +questValue 
        setScore([newScore])
        console.log(newScore)
    }
    const decreaseScore = () =>{
        const questValue = props.question[0].value
        let newScore = [...score]
        newScore[0] = +newScore - +questValue
        setScore([newScore])
    }
    const resetScore = () =>{
        let newScore = 0
        setScore([newScore])
    }
    
    return(
        <main className="outer-wrapper">
            <h2 className="title">Welcome to Jeoparday</h2>
            <Score key={0} score={score} increaseScore={increaseSteScore} decreaseScore={decreaseScore} resetScore={resetScore}></Score>
            <GetQuestions question={props.question} getNewQuestion={props.getNewQuestion}></GetQuestions>
        </main>
    )
}

export default Main;
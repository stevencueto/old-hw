import React, { useState } from 'react'
import Question from "./question/Question";
import RevealQuestion from "./click-to-reveal-question/RevealQuestion";
import Answer from './answer/Answer';

const GetQuestions = (props) => {
    console.log(props.question)
    const [answers, setQuestion] = useState(['', false])
    const getAnswers = () => {
        const answer = [props.question[0].answer, true]
      setQuestion(answer)
    }
    const noAnswers = () => {
        const answer = ['', false]
        setQuestion(answer)
    }
    const getNewQuestion = props.getNewQuestion
    return(
        <section className="get-guestions">
            <h2 className="title">Lets Play! </h2>
                <button onClick={ () => { getNewQuestion(); noAnswers()}}>
                    GetQuestion
                </button>
                <Question question={props.question}></Question>
                <RevealQuestion getAnswers={getAnswers}></RevealQuestion>
                { answers[1] === false ?  " " : <Answer answers={answers}></Answer>}
        </section>
    )
}

export default GetQuestions;
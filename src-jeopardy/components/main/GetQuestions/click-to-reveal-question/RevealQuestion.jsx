
const RevealQuestion = (props) => {
    return(
        <section className="reveal-questions" onClick={props.getAnswers}>
                <p>"Click here to reveal Answer"</p>
        </section>
    )
}

export default RevealQuestion;

const Answer = (props) => {
    console.log(props.answers)
    return(
        <section className="question" onClick={props.answers}>
                <h3 className="title">Answer </h3>
                <p>{props.answers}</p>
        </section>
    )
}

export default Answer;

const Question = (props) => {
    return(
        <section className="questions">
            <div>
                <h3 className="title">Category: </h3>
                { props.question[0] ? <p>{props.question[0].category.title}</p> : ''}
            </div>
            <div>
                <h3 className="title">Value: </h3>
                { props.question[0] ? <p>{props.question[0].value}</p> : ''}
            </div>
            <div>
               <h3 className="title">Question: </h3>
                { props.question[0] ? <p>{props.question[0].question}</p> : ''}
            </div>
        </section>
    )
}

export default Question;
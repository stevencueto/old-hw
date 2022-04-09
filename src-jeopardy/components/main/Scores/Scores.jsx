
const Score = (props) => {
    return(
        <section className="score-section">
            <h1>Score: {props.score} </h1>
            <div className="btn-scores">
                <button onClick={()=>props.decreaseScore()}>
                    Decrease
                </button>
                <button onClick={()=>props.increaseScore()}>
                    Increase
                </button>
                <button onClick={()=>props.resetScore()}>
                    Reset
                </button>
            </div>
        </section>
    )
}

export default Score;
import './sections.css'

const Sections = () =>{
    return(
        <section className="small-articles">
                <article className="art-smaller">
                    <div className="article-text">
                        <h3>Reviews</h3>
                        <h2>1,281</h2>
                    </div>
                </article>
                <article className="art-smaller">
                    <div className="article-text">
                        <h3>Average Rating</h3>
                        <h2>4.6</h2>
                    </div>
                </article>
                <article className="art-smaller">
                    <div className="article-text">
                        <h3>System Analysis</h3>
                        <h2>
                            <ul className="ul-art">
                                <li>960</li>
                                <li>122</li>
                                <li>321</li>
                            </ul>
                        </h2>
                    </div>
                </article>
            </section>
    )
}

export default Sections;
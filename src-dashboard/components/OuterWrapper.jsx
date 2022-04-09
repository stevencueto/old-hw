import './outer-wrapper.css'
import Nav from './outer-wrapper/nav/Nav';
import Main from './outer-wrapper/main/main';
const OuterWrapper = () => {
    return(
        <div className="outer-wrapper">
            <Nav></Nav>
            <Main></Main>
        </div>
    )
}

export default OuterWrapper;
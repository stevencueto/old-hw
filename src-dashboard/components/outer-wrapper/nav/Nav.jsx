import './nav.css'

const Nav = () =>{
    return(
        <nav id="megamenu">
            <h2>Dashboard</h2>
            <ul className="navigation-ul">
                <li className="naviation-li">Widget<a href="#" target="_blank"></a></li>
                <li className="naviation-li">Reviews<a href="#" target="_blank"></a></li>
                <li className="naviation-li">Custumers<a href="#" target="_blank"></a></li>
                <li className="naviation-li">Online Analysis<a href="#" target="_blank"></a></li>
                <li className="naviation-li">Settings<a href="#" target="_blank"></a></li>
            </ul>
        </nav>
    )
}

export default Nav
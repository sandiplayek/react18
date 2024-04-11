import { Link } from "react-router-dom"
import navCSS from "./CSS/nav.module.css"
export default function Navbar({currentPage=''})
{
    console.log('currentPage-- ',currentPage)
    return (
    <div className={navCSS.navContainer}>
        <div className={navCSS.navLeft}>Logo soace</div>
        <div className={navCSS.navRight}>
            <ul className={navCSS.navUl}>
                <li className={navCSS.navLi}><Link to="/">Home</Link></li>
                <li className={navCSS.navLi}><Link to="/about">About</Link></li>
                <li className={navCSS.navLi}><Link to={`/test`}>Test Hook</Link></li>
                <li className={navCSS.navLi}><Link to={`/redux`}>React-Redux</Link></li>
                <li className={navCSS.navLi}><Link to={`/type`}>useContext</Link></li>
                <li className={navCSS.navLi}><Link to={`/login`}>useContext2</Link></li>
                <li className={navCSS.navLi}><Link to={`/sandip`}>Custom Hook</Link></li>
                <li className={navCSS.navLi}><Link to={`/ref`}>useRef</Link></li>
                <li className={navCSS.navLi}><Link to={`/class`}>Class component</Link></li>
                <li className={navCSS.navLi}><Link to={`/reducer`}>useReducer</Link></li>

            </ul>
        </div>
    </div>);
}
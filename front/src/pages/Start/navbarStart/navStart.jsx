import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './navStart.css';
import logo from '../../../assets/img/denteIcone.png'

const NavStart = () => {

    const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
    const [isMenuClicked, setIsMenuClicked] = useState(false);
    
    const [menu_class, setMenuClass] = useState("menu hidden");

    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }

    return(
        <div style={{width: '100%'}}>
            <nav>
                {/* mobile */}
                <div className="burger-menu" onClick={updateMenu}>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                </div>
                {/* web */}
                <div className="web-nav">
                    <ul>
                        <li className="container__icone"><img className="Icone" src={logo} alt="" /></li>
                        <li><Link to="./login">Login</Link></li>
                        <li><Link to="/quiz">Registro</Link></li>
                    </ul>
                </div>
            </nav>
            {/* Menu que abre com o burger */}
            <div className={menu_class}>
                <ul>
                    <li><Link to="/home">Login</Link></li>
                    <li><Link to="/quiz">Registro</Link></li>
                </ul>
            </div>
            <hr/>
        </div>
    )
}

export default NavStart;
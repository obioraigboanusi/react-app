import React, { useState } from 'react';
import {Link} from "react-router-dom"

import logo from "../assets/icons/wiket-logo.svg"

function NavBar() {

    const [clicked, setClick] = useState(false);
    const handleClick = (e) => {
        setClick(!clicked)
    }

    return (
        <header className="nav-header">
            <nav>
                <div>
                    <Link to="/">
                        <img src={logo} alt="" className="logo" />
                    </Link>
                </div>
                <div className="nav-inner">
                    <Link to='/signup' className="contact-btn btn">get started</Link>
                    <button className={!!clicked ? "burger toggle" : "burger"} onClick={handleClick}>
                        <span className="line-1"></span>
                        <span className="line-2"></span>
                        <span className="line-3"></span>
                    </button>
                    <div className={!!clicked ? 'nav-links active' : 'nav-links'}>
                        <ul>
                            <li><Link to="/benefits" className="color-green fw-bold">benefits</Link></li>
                            <li><Link to="/profle" className="color-green fw-bold">your profile</Link></li>
                            <li><Link to="/connections" className="color-green fw-bold">connections</Link></li>
                            <li><Link to="/plans" className="color-green fw-bold">plans & pricing</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default NavBar;

import './HeaderSection.css'
import { Link } from "react-router-dom";


function HeaderSection() {


    return (
        <div className="navbar">
            <div className="navbar-container">
                <div className="logo-container">
                    <h1>Name</h1>
                </div>
                <div className="menu">
                    <ul className="menu-list">
                        <li className="menu-list-item">Popular</li>
                        <li className="menu-list-item">Movies</li>
                        <li className="menu-list-item">TV Series</li>
                        <li className="menu-list-item">About</li>
                        <li className="menu-list-item">Contact</li>
                    </ul>
                </div>
                <div className="register-log">
                    <ul>
                        <button className="header-item">
                            <Link to={`/login`} className="header-item">Login</Link>
                        </button>
                        <button className="header-item">
                            <Link to={`/register`} className="header-item">Register</Link>
                        </button>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default HeaderSection;
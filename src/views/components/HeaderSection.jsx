import './HeaderSection.css'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useStoreContext } from '../../context/context';


function HeaderSection() {
    const { firstName, loggedIn, setLoggedIn } = useStoreContext();
    const navigate = useNavigate();

    const logout = () => {
        setLoggedIn(false);
        navigate('/');
    };

    return (
        <div className="navbar">
            <div className="navbar-container">
                <div className="logo-container">
                    <h1>Name</h1>
                </div>
                <div className="nav-links">
                    {loggedIn ? (
                        <>
                            <a className="nav-link"><Link to={`/`} className="nav-link">Home</Link></a>
                            <a className="nav-link"><Link to={`/movies`} className="nav-link">Movies</Link></a>
                            <a className="nav-link"><Link to={`/movies/search`} className="nav-link">Search</Link></a>

                        </>
                    ) : (
                        <>
                            <a className="nav-link"><Link to={`/`} className="nav-link">Home</Link></a>
                            <a className="nav-link"><Link to={`/login`} className="nav-link">Movies</Link></a>
                            <a className="nav-link"><Link to={`/login`} className="nav-link">Search</Link></a>

                        </>
                    )}
                </div>
                <div className="welcome-container">
                    {loggedIn ? (
                        <> <p className="welcome-message">Welcome, {firstName}!</p> </>
                    ) : (
                        <></>
                    )}
                </div>
                <div className="button-container">
                    {loggedIn ? (
                        <>
                            <button className="buttons" type="button"><Link to={`/cart`} className="button">Cart</Link></button>
                            <button className="buttons" type="button"><Link to={`/settings`} className="button">Settings</Link></button>
                            <button className="buttons" type="button" onClick={logout}>Logout</button>
                        </>
                    ) : (
                        <>
                            <button className="buttons" type="button"><Link to={`/login`} className="button">Login</Link></button>
                            <button className="buttons" type="button"><Link to={`/register`} className="button">Register</Link></button>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default HeaderSection;
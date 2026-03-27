import "../App.css";
import logo from "../assets/logo_icon.png";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
    const location = useLocation();

    // current path
    const path = location.pathname;

    // function to render links dynamically
    const renderLinks = () => {
        if (path === "/about") {
            return (
                <>
                    <li className="nav-btn"><Link to="/">Home</Link></li>
                    <li className="nav-btn"><Link to="/services">Services</Link></li>
                    <li className="login-btn"><Link to="/login">Login</Link></li>
                </>
            );
        }

        if (path === "/services") {
            return (
                <>
                    <li className="nav-btn"><Link to="/">Home</Link></li>
                    <li className="nav-btn"><Link to="/about">About</Link></li>
                    <li className="login-btn"><Link to="/login">Login</Link></li>
                </>
            );
        }

        // default (Home page)
        return (
            <>
                <li className="nav-btn"><Link to="/about">About</Link></li>
                <li className="nav-btn"><Link to="/services">Services</Link></li>
                <li className="login-btn"><Link to="/login">Login</Link></li>
            </>
        );
    };

    return (
        <nav className="navbar">

            {/* Logo */}
            <div className="logo-container">
                <img src={logo} alt="Nexus Arena" className="logo-img" />
                <Link to="/" className="logo-text">Nexus Arena</Link>
            </div>

            {/* Dynamic Nav */}
            <ul className="nav-links">
                {renderLinks()}
            </ul>

        </nav>
    );
}

export default Navbar;
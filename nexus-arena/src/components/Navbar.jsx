import "../App.css";
import logo from "../assets/logo_icon.png";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">

            {/* Logo Section */}
            <div className="logo-container">
                <img src={logo} alt="Nexus Arena" className="logo-img" />
                <Link to="/" className="logo-text">Nexus Arena</Link>
            </div>

            {/* Navigation Links */}
            <ul className="nav-links">
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li className="login-btn">
                    <Link to="/login">Login</Link>
                </li>
            </ul>

        </nav>
    );
}

export default Navbar;
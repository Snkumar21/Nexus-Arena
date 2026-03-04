import { Link } from "react-router-dom";
import logo from "../assets/logo_icon.png";
import "../App.css";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo-container">
                <img src={logo} alt="Nexus Arena" className="logo-img" />
                <h2>Nexus Arena</h2>
            </div>

            <ul className="nav-links">
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li className="signup-btn">
                    <Link to="/signup">Sign Up</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
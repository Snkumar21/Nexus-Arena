import "../App.css";
import logo from "../assets/logo_icon.png";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar() {
    const location = useLocation();
    const navigate = useNavigate();

    const path = location.pathname;

    // 👤 Check user login
    const user = JSON.parse(localStorage.getItem("user"));

    // 🔓 Logout function
    const handleLogout = () => {
        localStorage.removeItem("user");
        navigate("/login");
    };

    // 🔁 Dynamic Links
    const renderLinks = () => {

        const authButton = user ? (
            <li className="login-btn">
                <button onClick={handleLogout} className="logout-btn">
                    Logout
                </button>
            </li>
        ) : (
            <li className="login-btn">
                <Link to="/login">Login</Link>
            </li>
        );

        if (path === "/about") {
            return (
                <>
                    <li className="nav-btn"><Link to="/">Home</Link></li>
                    <li className="nav-btn"><Link to="/services">Services</Link></li>
                    {authButton}
                </>
            );
        }

        if (path === "/services") {
            return (
                <>
                    <li className="nav-btn"><Link to="/">Home</Link></li>
                    <li className="nav-btn"><Link to="/about">About</Link></li>
                    {authButton}
                </>
            );
        }

        // Default (Home)
        return (
            <>
                <li className="nav-btn"><Link to="/about">About</Link></li>
                <li className="nav-btn"><Link to="/services">Services</Link></li>
                {authButton}
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

            {/* Nav Links */}
            <ul className="nav-links">
                {renderLinks()}
            </ul>

        </nav>
    );
}

export default Navbar;
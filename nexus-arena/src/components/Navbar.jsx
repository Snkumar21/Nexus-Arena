import "./styles.css";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">Nexus Arena</div>
            <ul className="nav-links">
                <li>About</li>
                <li>Services</li>
                <li>Login</li>
                <li className="signup-btn">Sign Up</li>
            </ul>
        </nav>
    );
}

export default Navbar;
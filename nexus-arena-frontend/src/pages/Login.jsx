import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import bg from "../assets/background.png";
import "../App.css";

function Login() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleLogin = (e) => {
        e.preventDefault();

        // 🔐 Dummy login logic
        if (formData.email && formData.password) {
            localStorage.setItem("user", JSON.stringify(formData));
            navigate("/services");
        } else {
            alert("Please fill all fields");
        }
    };

    return (
        <div
            className="auth-page"
            style={{
                backgroundImage: `url(${bg})`
            }}
        >
            <div className="auth-container">

                <h2>Login to Nexus Arena</h2>

                <form onSubmit={handleLogin}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        onChange={handleChange}
                        required
                    />

                    <button type="submit" className="primary-btn">
                        Login
                    </button>
                </form>

                <p>
                    Don't have an account?{" "}
                    <Link to="/signup">Sign Up</Link>
                </p>

            </div>
        </div>
    );
}

export default Login;
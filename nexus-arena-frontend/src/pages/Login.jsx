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

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            const data = await res.json();

            if (res.ok) {
                localStorage.setItem("user", JSON.stringify(data.user));
                navigate("/services");
            } else {
                alert(data.message);
            }

        } catch (err) {
            alert("Server error");
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
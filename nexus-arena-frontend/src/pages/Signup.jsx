import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import bg from "../assets/background.png";
import "../App.css";

function Signup() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value
        });
    };

    const handleSignup = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch("http://localhost:5000/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            const data = await res.json();

            if (res.ok) {
                alert("Signup successful!");
                navigate("/login");
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

                <h2>Create Account</h2>

                <form onSubmit={handleSignup}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter Name"
                        onChange={handleChange}
                        required
                    />

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
                        Sign Up
                    </button>
                </form>

                <p>
                    Already have an account?{" "}
                    <Link to="/login">Login</Link>
                </p>

            </div>
        </div>
    );
}

export default Signup;
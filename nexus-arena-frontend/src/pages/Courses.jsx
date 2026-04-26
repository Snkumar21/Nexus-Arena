import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import bg from "../assets/background.png";
import courses from "../data/coursesData";
import "../App.css";

function Courses() {

    const user = JSON.parse(localStorage.getItem("user"));
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const filteredCourses = courses.filter(course =>
        course.title.toLowerCase().includes(search.toLowerCase())
    );

    const handleEnroll = (course) => {
        let user = JSON.parse(localStorage.getItem("user"));
        if (!user) {
            alert("Please login first");
            navigate("/login");
            return;
        }
        navigate("/payment", { state: course });
    };

    return (
        <div
            style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: "cover",
                minHeight: "100vh"
            }}
        >
            <Navbar />

            {/* 👤 User Name */}
            <div className="user-bar">
                {user && (
                    <p 
                        className="user-name"
                        onClick={() => navigate("/Useraccount")}
                    >
                        Welcome, <span>{user.name || user.email}</span> 👋
                    </p>
                )}
            </div>

            <section className="section dark">
                <h2>📚 All Courses</h2>

                {/* 🔍 Search */}
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Search any course..."
                        className="search-input"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                    <button className="search-btn">
                        Search
                    </button>
                </div>

                {/* 📦 Courses */}
                <div className="courses-grid">
                    {filteredCourses.length > 0 ? (
                        filteredCourses.map((course, index) => (
                            <div className="course-card" key={index}>
                                <h3>{course.title}</h3>
                                <p>{course.desc} - {course.platform}</p>
                                <button onClick={() => handleEnroll(course)}>
                                    Enroll Now - ₹{course.price}
                                </button>
                            </div>
                        ))
                    ) : (
                        <p>No courses found 😢</p>
                    )}
                </div>

            </section>

            <Footer />
        </div>
    );
}

export default Courses;
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import bg from "../assets/background.png";

function Service() {

    // 👤 Get user from localStorage
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("user"));
    const [search, setSearch] = useState("");

    // 📚 Sample Course Data
    const courses = [
        { title: "HTML & CSS Bootcamp", desc: "Learn basics of web development" },
        { title: "React JS Mastery", desc: "Build modern web apps" },
        { title: "Python for Beginners", desc: "Start coding with Python" },
        { title: "Java Programming", desc: "Master Java from scratch" },
        { title: "Node.js Backend", desc: "Build APIs and servers" }
    ];

    // 🔍 Filter logic
    const filteredCourses = courses.filter(course =>
        course.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div
            style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
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

            {/* 🔍 Search Bar */}
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search courses like HTML, React, Python..."
                    className="search-input"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <button 
                    className="search-btn"
                    onClick={() => {}}
                >
                    Search
                </button>
            </div>

            {/* 🎯 Courses */}
            <div className="courses-grid">
                {filteredCourses.length > 0 ? (
                    filteredCourses.map((course, index) => (
                        <div className="course-card" key={index}>
                            <h3>{course.title}</h3>
                            <p>{course.desc}</p>
                            <button>Enroll Now</button>
                        </div>
                    ))
                ) : (
                    <p>No courses found 😢</p>
                )}
            </div>

            {/* 🎯 Top Courses */}
            <section className="section dark">
                <h2>🔥 Top Courses</h2>

                <div className="courses-grid">

                    <div className="course-card">
                        <h3>HTML & CSS Bootcamp</h3>
                        <p>Beginner friendly web development course</p>
                        <button>Enroll Now</button>
                    </div>

                    <div className="course-card">
                        <h3>React JS Mastery</h3>
                        <p>Build real-world React applications</p>
                        <button>Enroll Now</button>
                    </div>

                    <div className="course-card">
                        <h3>Python for Beginners</h3>
                        <p>Start coding with Python easily</p>
                        <button>Enroll Now</button>
                    </div>

                </div>
            </section>

            {/* 🎥 How to Enroll Video */}
            <section className="section dark">
                <h2>🎥 How to Start Learning</h2>

                <div className="video-wrapper">
                    <iframe
                        width="100%"
                        height="350"
                        src="https://www.youtube.com/embed/0zHE6kTPMOc"
                        title="How to Enroll"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default Service;
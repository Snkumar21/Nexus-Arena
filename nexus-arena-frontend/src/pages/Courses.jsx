import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import bg from "../assets/background.png";
import "../App.css";

function Courses() {

    const [search, setSearch] = useState("");

    const courses = [
        { title: "HTML & CSS Bootcamp", desc: "Learn basics of web development" },
        { title: "React JS Mastery", desc: "Build modern web apps" },
        { title: "Python for Beginners", desc: "Start coding with Python" },
        { title: "Java Programming", desc: "Master Java from scratch" },
        { title: "Node.js Backend", desc: "Build APIs and servers" },
        { title: "MongoDB Basics", desc: "Learn database management" },
        { title: "Full Stack Development", desc: "Become full stack dev" }
    ];

    const filteredCourses = courses.filter(course =>
        course.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div
            style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: "cover",
                minHeight: "100vh"
            }}
        >
            <Navbar />

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
                                <p>{course.desc}</p>
                                <button>Enroll Now</button>
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
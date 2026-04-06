import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import bg from "../assets/background.png";

function Service() {

    // 👤 Get user from localStorage
    const user = JSON.parse(localStorage.getItem("user"));

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
                {user ? <p>Welcome, <span>{user.name || user.email}</span> 👋</p> : null}
            </div>

            {/* 🔍 Search Bar */}
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search courses like HTML, React, Python..."
                    className="search-input"
                />
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
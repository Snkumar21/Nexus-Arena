import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import bg from "../assets/background.png";
import courses from "../data/coursesData";
import video from "../assets/HowToStart.mp4";

function Service() {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("user"));

    // 💳 Enroll Logic
    const handleEnroll = (course) => {
        const confirmPay = window.confirm(
            `Pay ₹${course.price} to enroll in ${course.title}?`
        );

        if (confirmPay) {
            let enrolled =
                JSON.parse(localStorage.getItem("enrolledCourses")) || [];

            if (!enrolled.find(c => c.id === course.id)) {
                enrolled.push(course);
                localStorage.setItem(
                    "enrolledCourses",
                    JSON.stringify(enrolled)
                );
            }

            alert("✅ Payment Successful!");
            navigate("/course-player", { state: course });
        }
    };

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

            {/* 👤 User */}
            <div className="user-bar">
                {user && (
                    <p
                        className="user-name"
                        onClick={() => navigate("/useraccount")}
                    >
                        Welcome, <span>{user.name || user.email}</span> 👋
                    </p>
                )}
            </div>

            {/* 🔍 Search → Redirect to Explore */}
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search courses..."
                    className="search-input"
                    onFocus={() => navigate("/courses")}
                />

                <button 
                    className="search-btn"
                    onClick={() => navigate("/courses")}
                >
                    Search
                </button>
            </div>

            {/* 🔥 Top Courses Only */}
            <section className="section dark">
                <h2>🔥 Top Courses</h2>

                <div className="courses-grid">
                    {courses.slice(0, 3).map(course => (
                        <div className="course-card" key={course.id}>
                            <h3>{course.title}</h3>
                            <p>{course.desc} - {course.platform}</p>
                            <h4>₹{course.price}</h4>

                            <button onClick={() => handleEnroll(course)}>
                                Enroll Now
                            </button>
                        </div>
                    ))}
                </div>

                <div style={{ marginTop: "30px" }}>
                    <button
                        className="primary-btn"
                        onClick={() => navigate("/courses")}
                    >
                        Explore More 🚀
                    </button>
                </div>
            </section>

            {/* 🎥 Centered Video */}
            <section className="section dark">
                <h2>🎥 How to Start Learning</h2>

                <div style={{ display: "flex", justifyContent: "center" }}>
                    <div className="video-wrapper" style={{ width: "60%" }}>
                        <video
                            width="100%"
                            height="400"
                            controls
                            style={{ 
                                borderRadius: "10px",
                                boxShadow: "0 0 20px rgba(255, 80, 0, 0.6)"
                            }}
                        >
                            <source src={video} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default Service;
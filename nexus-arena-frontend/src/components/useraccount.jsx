import "../App.css";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function UserAccount() {

    const user = JSON.parse(localStorage.getItem("user"));
    const courses = JSON.parse(localStorage.getItem("enrolledCourses")) || [];
    const navigate = useNavigate();

    return (
        <div>
            <Navbar />

            <div className="section dark">

                <h2>👤 My Account</h2>

                {/* 👤 Profile Info */}
                <div className="useraccount-card">
                    <h3>Profile Info</h3>
                    <p><strong>Name:</strong> {user?.name || "N/A"}</p>
                    <p><strong>Email:</strong> {user?.email || "N/A"}</p>
                </div>

                {/* 📚 Enrolled Courses */}
                <div className="useraccount-card">
                    <h3>📚 Enrolled Courses</h3>

                    {courses.length > 0 ? (
                        <div className="courses-grid">
                            {courses.map((course, index) => (
                                <div key={index} className="course-card">
                                    <h4>{course.title}</h4>
                                    <p>{course.desc}</p>

                                    <button
                                        className="primary-btn"
                                        onClick={() =>
                                            navigate(`/course/${course.id}`, { state: course })
                                        }
                                    >
                                        ▶ Continue Learning
                                    </button>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>No courses enrolled yet 😢</p>
                    )}
                </div>

                {/* 📊 Progress */}
                <div className="useraccount-card">
                    <h3>📊 Progress</h3>
                    <p>Track your learning progress here (Coming Soon 🚀)</p>
                </div>

                {/* ⚙️ Settings */}
                <div className="useraccount-card">
                    <h3>⚙️ Settings</h3>
                    <p>Update your profile & preferences (Coming Soon)</p>
                </div>

            </div>
        </div>
    );
}

export default UserAccount;
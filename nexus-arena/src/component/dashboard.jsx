import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
    const courses = [
        { id: 1, title: "HTML Mastery", progress: 70 },
        { id: 2, title: "React Basics", progress: 40 },
        { id: 3, title: "JavaScript Advanced", progress: 90 },
    ];

    return (
        <div className="dashboard">
            <h1>Welcome to Nexus Arena 🚀</h1>
            <p>Your personalized learning dashboard</p>

            <div className="dashboard-grid">
        
                {/* Enrolled Courses */}
                <div className="card">
                    <h2>📚 Enrolled Courses</h2>
                    {courses.map((course) => (
                        <div key={course.id} className="course-item">
                            <span>{course.title}</span>
                            <div className="progress-bar">
                                <div
                                    className="progress"
                                    style={{ width: `${course.progress}%` }}
                                ></div>
                            </div>
                            <small>{course.progress}% Completed</small>
                        </div>
                    ))}
                </div>

                {/* Pending Activities */}
                <div className="card">
                    <h2>🎯 Pending Activities</h2>
                    <ul>
                        <li>Submit HTML Project</li>
                        <li>Complete React Quiz</li>
                        <li>Upload Assignment PDF</li>
                    </ul>
                </div>

                {/* Certificates */}
                <div className="card">
                    <h2>🎓 Certificates</h2>
                    <p>2 Certificates Earned</p>
                    <button className="btn">View Certificates</button>
                </div>

                {/* Notifications */}
                <div className="card">
                    <h2>🔔 Notifications</h2>
                    <p>New discount available on Python Course!</p>
                </div>

            </div>
        </div>
    );
};

export default Dashboard;
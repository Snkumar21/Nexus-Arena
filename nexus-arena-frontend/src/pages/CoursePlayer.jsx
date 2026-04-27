import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../App.css";

function CoursePlayer() {
    const location = useLocation();
    const navigate = useNavigate();
    const course = location.state;
    const user = JSON.parse(localStorage.getItem("user"));
    const [currentVideo, setCurrentVideo] = useState(0);
    const hasChapters = course.chapters && course.chapters.length > 0;

    if (!course) {
        return <h2>Course not found</h2>;
    }

    return (
        <div>
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

            <div className="section dark">
                <h2>{course.title}</h2>

                <div className="course-player-container">

                    {/* 🎥 Video Section */}
                    <div className="video-section">
                        <iframe
                            width="100%"
                            height="400"
                            src={
                                hasChapters
                                    ? course.chapters[currentVideo].video
                                    : course.video
                            }
                            title="Course Video"
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>

                        <h3>
                            {hasChapters
                                ? course.chapters[currentVideo].title
                                : "Course Introduction"}
                        </h3>

                        {/* 📝 Assessment */}
                        {hasChapters && course.chapters[currentVideo].assessment && (
                            <button className="primary-btn">
                                Take Assessment 📝
                            </button>
                        )}
                    </div>

                    {/* 📋 Playlist */}
                    {hasChapters && (
                        <div className="playlist">
                            <h3>Course Content</h3>

                            {course.chapters.map((chapter, index) => (
                                <div
                                    key={index}
                                    className={`playlist-item ${
                                        currentVideo === index ? "active" : ""
                                    }`}
                                    onClick={() => setCurrentVideo(index)}
                                >
                                    ▶ {chapter.title}
                                    {chapter.assessment && " 📝"}
                                </div>
                            ))}
                        </div>
                    )}

                </div>

            </div>
        </div>
    );
}

export default CoursePlayer;
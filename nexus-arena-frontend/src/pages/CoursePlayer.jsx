import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../App.css";

function CoursePlayer() {

    const location = useLocation();
    const course = location.state;

    if (!course) {
        return <h2>Course not found</h2>;
    }

    return (
        <div>
            <Navbar />

            <div className="section dark">
                <h2>{course.title}</h2>

                <iframe
                    width="80%"
                    height="400"
                    src={course.video}
                    title={course.title}
                    frameBorder="0"
                    allowFullScreen
                ></iframe>

                <p style={{ marginTop: "20px" }}>
                    {course.desc}
                </p>
            </div>
        </div>
    );
}

export default CoursePlayer;
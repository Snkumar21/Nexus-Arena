import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function Payment() {
    const location = useLocation();
    const navigate = useNavigate();
    const course = location.state;

    const handlePayment = () => {

        // ✅ Simulate payment success
        alert("✅ Payment Successful!");

        let enrolledCourses = JSON.parse(localStorage.getItem("enrolledCourses")) || [];

        // avoid duplicate
        const exists = enrolledCourses.find(c => c.id === course.id);

        if (!exists) {
            enrolledCourses.push(course);
            localStorage.setItem("enrolledCourses", JSON.stringify(enrolledCourses));
        }

        // 👉 Redirect to course player
        navigate(`/course/${course.id}`, { state: course });
    };

    if (!course) return <h2>No Course Selected</h2>;

    return (
        <div>
            <Navbar />

            <div className="section dark">
                <h2>💳 Payment</h2>

                <div className="course-card">
                    <h3>{course.title}</h3>
                    <p>{course.desc}</p>
                    <h4>Price: ₹{course.price}</h4>

                    <button className="primary-btn" onClick={handlePayment}>
                        Pay Now
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Payment;
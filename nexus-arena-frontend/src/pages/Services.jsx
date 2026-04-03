import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Services from "../components/Services";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import bg from "../assets/background.png";

function Service() {
    return (
        <div
            style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                minHeight: "100vh"
            }}
        >
            <Navbar />
            <section className="section dark">
                <h2>Our Services</h2>
                <ul className="services-list">
                    <li>✔ Course Comparison from Multiple Platforms</li>
                    <li>✔ Best Rated Courses Based on Reviews</li>
                    <li>✔ Discounted Premium Courses</li>
                    <li>✔ Assignment & Activity Submission</li>
                    <li>✔ Dual Certification</li>
                </ul>
            </section>
            <Footer />
        </div>
    );
}

export default Service;
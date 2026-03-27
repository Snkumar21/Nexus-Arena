import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Services from "../components/Services";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import bg from "../assets/background.png";

function About() {
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
            <section className="section">
                <h2>About Nexus Arena</h2>
                <p>
                    Nexus Arena is a centralized education platform that aggregates
                    top-rated courses from multiple platforms and presents them in one place.
                </p>

                <div className="stats">
                    <div>
                        <h3>10,000+</h3>
                        <p>Registered Students</p>
                    </div>
                    <div>
                        <h3>1,500+</h3>
                        <p>Top Courses</p>
                    </div>
                    <div>
                        <h3>4.8/5</h3>
                        <p>Average Rating</p>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default About;
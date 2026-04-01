import Navbar from "../components/Navbar";
import Stats from "../components/Stats";
import Services from "../components/Services";
import HowItWorks from "../components/HowItWorks";
import Footer from "../components/Footer";
import Contact from "../components/contact";
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
            </section>
            <Stats />
            <Services />
            <HowItWorks />
            <Contact />
            <Footer />
        </div>
    );
}

export default About;
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../App.css";

function Contact() {
    const formRef = useRef();
    const [status, setStatus] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus("Sending...");

        emailjs
        .sendForm(
            "service_6tl9e0o",   // your service ID
            "template_3lq5cvi",  // your template ID
            formRef.current,
            "HUNMCLsYwZz37pxsQ"  // public key
        )
        .then(() => {
            alert("✅ Message sent successfully!");
            formRef.current.reset();
            setStatus("");
        })
        .catch((error) => {
            console.error("EmailJS error:", error);
            alert("❌ Failed to send message. Try again.");
            setStatus("");
        });
    };

    return (
        <section className="contact-container">

            {/* Left Side - Form */}
            <div className="contact-form">
                <h2>Contact Us</h2>

                <form ref={formRef} onSubmit={sendEmail}>
                    <input type="text" placeholder="Your Name" required />
                    <input type="email" placeholder="Your Email" required />
                    <input type="text" placeholder="Subject" />
                    <textarea placeholder="Your Message" rows="5" required></textarea>

                    <button type="submit" className="primary-btn">
                        Send Message
                    </button>

                    <p className="status-text">{status}</p>
                </form>
            </div>

            {/* Right Side - Details */}
            <div className="contact-info">
                <h2>Nexus Arena</h2>

                <p>
                    Nexus Arena is a centralized learning platform that helps students
                    discover, compare, and learn from the best courses across multiple platforms.
                </p>

                <div className="info-box">
                    <p>📧 Email: support@nexusarena.com</p>
                    <p>📞 Phone: +91 98765 43210</p>
                    <p>📍 Location: India</p>
                </div>

                <p className="tagline">
                    Empowering Students Through Smart Learning 🚀
                </p>
            </div>

        </section>
    );
}

export default Contact;
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../App.css";

function Contact() {
    const formRef = useRef();
    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState(false);

    const sendEmail = async (e) => {
        e.preventDefault();

        const form = formRef.current;

        // 🛑 Bot protection (hidden field)
        if (form.website.value.trim() !== "") {
            setStatus("Submission blocked.");
            return;
        }

        // ✅ Validation
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        setLoading(true);
        setStatus("Sending...");

        try {
            await emailjs.sendForm(
                "service_6tl9e0o",
                "template_3lq5cvi",
                form,
                "HUNMCLsYwZz37pxsQ"
            );

            setStatus("✅ Message sent successfully!");
            form.reset();

        } catch (error) {
            console.error("EmailJS error:", error);
            setStatus("❌ Failed to send message. Try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="contact-container">

            {/* Left Side - Form */}
            <div className="contact-form">
                <h2>Contact Us</h2>

                <form ref={formRef} onSubmit={sendEmail}>

                    {/* Hidden anti-bot field */}
                    <input type="text" name="website" style={{ display: "none" }} />

                    <input
                        type="text"
                        name="user_name"
                        placeholder="Your Name"
                        required
                    />

                    <input
                        type="email"
                        name="user_email"
                        placeholder="Your Email"
                        required
                    />

                    <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                    />

                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows="5"
                        required
                    ></textarea>

                    <button
                        type="submit"
                        className="primary-btn"
                        disabled={loading}
                    >
                        {loading ? "Sending..." : "Send Message"}
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
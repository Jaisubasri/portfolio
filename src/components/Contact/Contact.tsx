import "./Contact.css";
import arrow from "../../assets/arrow.svg";
import { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus("idle");

        try {
            const response = await fetch("https://formspree.io/f/myyrwglr", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    _replyto: formData.email,
                    subject: formData.subject || "New Contact Form Submission",
                    message: formData.message,
                }),
            });

            if (response.ok) {
                setSubmitStatus("success");
                setFormData({ name: "", email: "", subject: "", message: "" });
                setTimeout(() => setSubmitStatus("idle"), 5000);
            } else {
                setSubmitStatus("error");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="contact">
            <div className="contact-header">
                <h2><span style={{ color: "#b8b8b8" }}>I'd !</span> love to hear from </h2>
                <div style={{display:"flex", justifyContent:"center"}}>
                    <img src={arrow} style={{ maxHeight: "15%", maxWidth: "25%", padding:"3rem"}} />
                    <h2>you</h2>
                </div>
                <p>Feel Free to Contact.</p>
            </div>
            <form style={{padding:"4rem 8rem"}} onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="form-group">
                        <label>Name:*</label>
                        <input 
                            type="text" 
                            name="name"
                            placeholder="Your Name" 
                            value={formData.name}
                            onChange={handleInputChange}
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label>Email:*</label>
                        <input 
                            type="email" 
                            name="email"
                            placeholder="your.email@example.com" 
                            value={formData.email}
                            onChange={handleInputChange}
                            required 
                        />
                    </div>
                </div>

                <div className="form-group full-width">
                    <label>Subject</label>
                    <input 
                        type="text" 
                        name="subject"
                        placeholder="What is this regarding?" 
                        value={formData.subject}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="form-group full-width">
                    <label>Message*</label>
                    <textarea 
                        name="message"
                        placeholder="Your message here..." 
                        rows={5} 
                        value={formData.message}
                        onChange={handleInputChange}
                        required 
                    />
                </div>

                <button 
                    type="submit" 
                    className="submit-btn"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "Sending..." : "Send Me"}
                </button>

                {submitStatus === "success" && (
                    <p style={{ color: "#28a745", marginTop: "1rem" }}>✓ Message sent successfully!</p>
                )}
                {submitStatus === "error" && (
                    <p style={{ color: "#dc3545", marginTop: "1rem" }}>✗ Failed to send message. Please try again.</p>
                )}
            </form>
        </section>
    );
};

export default Contact;
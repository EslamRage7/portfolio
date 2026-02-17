import { useState } from "react";
import { IoIosSend } from "react-icons/io";
import { FiClock, FiMail, FiMapPin } from "react-icons/fi";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";

function Contact() {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    const trimmed = value.trim();

    if (name === "user_name") {
      if (!trimmed) return "Name is required";
      if (trimmed.length < 2) return "Name must be at least 2 characters";
    }

    if (name === "user_email") {
      if (!trimmed) return "Email is required";
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(trimmed)) {
        return "Invalid email address";
      }
    }

    if (name === "message") {
      if (!trimmed) return "Message is required";
      if (trimmed.length < 10) return "Message must be at least 10 characters";
    }

    return "";
  };

  const validate = () => {
    const newErrors = {};

    ["user_name", "user_email", "message"].forEach((field) => {
      const error = validateField(field, formData[field]);
      if (error) newErrors[field] = error;
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => {
      if (!prev[name]) return prev;
      const next = { ...prev };
      const error = validateField(name, value);
      if (!error) delete next[name];
      else next[name] = error;
      return next;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    const payload = {
      user_name: formData.user_name.trim(),
      user_email: formData.user_email.trim(),
      message: formData.message.trim(),
    };

    emailjs
      .send("service_8hacx08", "template_4v965g9", payload, "Ij_6CXQW6l5KQjum7")
      .then(() => {
        Swal.fire({
          title: "Thank you for reaching out!",
          text: "Your message has been successfully sent. We'll get back to you as soon as possible.",
          icon: "success",
          confirmButtonColor: "#4caf50",
        });

        setFormData({
          user_name: "",
          user_email: "",
          message: "",
        });

        setErrors({});
      })
      .catch(() => {
        Swal.fire({
          title: "Oops!",
          text: "Something went wrong. Please try again later.",
          icon: "error",
        });
      });
  };

  return (
    <section className="contact pt-5 mt-5" id="contact">
      <div className="container">
        <div className="row mb-5 justify-content-center g-4">
          <h1 className="main-btn mb-5">Contact Me</h1>

          <div className="col-12">
            <div className="contact-panel">
              <aside className="contact-info">
                <h2 className="contact-info-title">Start a project with me</h2>
                <p className="contact-info-text">
                  Tell me what you want to build, and I will get back to you
                  with a clear plan and timeline.
                </p>

                <div className="contact-points">
                  <div className="contact-point">
                    <FiMail />
                    <span>Reply in less than 24 hours</span>
                  </div>
                  <div className="contact-point">
                    <FiClock />
                    <span>Open for freelance work</span>
                  </div>
                  <div className="contact-point">
                    <FiMapPin />
                    <span>Remote and worldwide</span>
                  </div>
                </div>
              </aside>

              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <p className="contact-form-intro">
                  Have an app, website, or idea? Send your details and let's
                  build it right.
                </p>

                <div className="contact-field">
                  <label htmlFor="user_name">Full Name</label>
                  <input
                    type="text"
                    className={`contact-input ${errors.user_name ? "is-invalid" : ""}`}
                    name="user_name"
                    id="user_name"
                    placeholder="Enter your full name"
                    value={formData.user_name}
                    onChange={handleChange}
                  />
                  {errors.user_name && (
                    <p className="contact-error">{errors.user_name}</p>
                  )}
                </div>

                <div className="contact-field">
                  <label htmlFor="user_email">Email Address</label>
                  <input
                    type="email"
                    className={`contact-input ${
                      errors.user_email ? "is-invalid" : ""
                    }`}
                    name="user_email"
                    id="user_email"
                    placeholder="name@example.com"
                    value={formData.user_email}
                    onChange={handleChange}
                  />
                  {errors.user_email && (
                    <p className="contact-error">{errors.user_email}</p>
                  )}
                </div>

                <div className="contact-field">
                  <label htmlFor="message">Project Details</label>
                  <textarea
                    className={`contact-input contact-textarea ${
                      errors.message ? "is-invalid" : ""
                    }`}
                    name="message"
                    id="message"
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={handleChange}
                  />
                  {errors.message && (
                    <p className="contact-error">{errors.message}</p>
                  )}
                </div>

                <button className="contact-submit-btn" type="submit">
                  <IoIosSend className="me-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

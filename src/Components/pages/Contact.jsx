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
    <div
      className="contact pt-5 mt-5"
      id="contact"
      data-aos="fade-up"
      data-aos-duration="700"
      data-aos-once="true"
      data-aos-mirror="false">
      <div className="container">
        <div className="row mb-5 justify-content-center">
          <h1 className="main-btn mb-5">
            Contact Me
          </h1>

          <div className="col-12">
            <div className="contact-shell row g-3 g-lg-4 align-items-stretch">
              <div className="col-lg-4">
                <aside className="contact-side">
                  <p className="contact-side-title">
                    Let's Build Something Great
                  </p>
                  <p className="contact-side-text">
                    Share your idea and I will help you turn it into a clean and
                    high-performance product.
                  </p>

                  <div className="contact-points">
                    <div className="contact-point">
                      <FiMail />
                      <span>Fast email response</span>
                    </div>
                    <div className="contact-point">
                      <FiClock />
                      <span>Available for new projects</span>
                    </div>
                    <div className="contact-point">
                      <FiMapPin />
                      <span>Remote collaboration friendly</span>
                    </div>
                  </div>
                </aside>
              </div>

              <div className="col-lg-8">
                <form className="contact-form h-100" onSubmit={handleSubmit}>
                  <div className="contact-form-container">
                    <p className="form-intro text-center mb-4">
                      Have a project in mind or just want to say hi? I'd love to
                      hear from you!
                    </p>

                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className={`form-control contact-input ${
                          errors.user_name ? "is-invalid" : ""
                        }`}
                        name="user_name"
                        id="user_name"
                        placeholder="Your Name"
                        value={formData.user_name}
                        onChange={handleChange}
                      />
                      <label htmlFor="user_name">Your Name</label>
                      {errors.user_name && (
                        <div className="invalid-feedback d-block">
                          {errors.user_name}
                        </div>
                      )}
                    </div>

                    <div className="form-floating mb-3">
                      <input
                        type="email"
                        className={`form-control contact-input ${
                          errors.user_email ? "is-invalid" : ""
                        }`}
                        name="user_email"
                        id="user_email"
                        placeholder="name@example.com"
                        value={formData.user_email}
                        onChange={handleChange}
                      />
                      <label htmlFor="user_email">Email Address</label>
                      {errors.user_email && (
                        <div className="invalid-feedback d-block">
                          {errors.user_email}
                        </div>
                      )}
                    </div>

                    <div className="form-floating mb-3">
                      <textarea
                        className={`form-control contact-input contact-textarea ${
                          errors.message ? "is-invalid" : ""
                        }`}
                        name="message"
                        id="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                      />
                      <label htmlFor="message">Your Message</label>
                      {errors.message && (
                        <div className="invalid-feedback d-block">
                          {errors.message}
                        </div>
                      )}
                    </div>

                    <button className="contact-submit-btn w-100" type="submit">
                      <IoIosSend className="me-2" />
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

import React from "react";
import "./ContactUs.css";

function Contact() {
  return (
    <div className="contact-us-container">
      <div className="contact-us-overlay"></div>
      <div className="contact-us-content">
        <h2 style={{ textAlign: "center" }}>Contact Us</h2>
        <form
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Name" />
          </div>
          <div className="form-group">
            <input type="email" className="form-control" placeholder="Email" />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Subject" />
          </div>
          <div className="form-group">
            <textarea
              className="form-control"
              rows="3"
              placeholder="Message"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;

import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaPaperPlane,
  FaCalendarAlt,
  FaClock,
  FaDirections,
  FaUser,
  FaMapPin,
  FaCommentDots,
  FaCheckCircle,
} from "react-icons/fa";

import "./ContactMain.css";

const ContactMain = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    destination: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  /* =====================================================
     CONTACT DETAILS
  ===================================================== */

  const phoneNumber = "+916372545244";
  const displayPhone = "+91 637 254 5244";

  const whatsappNumber = "916372545244";

  const emailAddress = "info@odishajourney.com";

  const officeAddress =
    "Grand Bazar, Phulnakhara, Bhubaneswar, Odisha, India";

  /* =====================================================
     INPUT CHANGE
  ===================================================== */

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /* =====================================================
     FORM SUBMIT
  ===================================================== */

  const handleSubmit = (e) => {
    e.preventDefault();

    const {
      name,
      email,
      phone,
      date,
      destination,
      message,
    } = formData;

    if (
      !name.trim() ||
      !email.trim() ||
      !phone.trim() ||
      !date ||
      !destination.trim() ||
      !message.trim()
    ) {
      alert("Please fill all required fields.");
      return;
    }

    const whatsappMessage = `
Hello, I want to make an enquiry.

Name: ${name}
Email: ${email}
Phone: ${phone}
Travel Date: ${date}
Destination / Package: ${destination}

Message:
${message}
    `;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    setSubmitted(true);

    window.open(whatsappURL, "_blank");

    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      destination: "",
      message: "",
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  /* =====================================================
     EMAIL
  ===================================================== */

  const handleEmail = () => {
    window.location.href =
      `mailto:${emailAddress}?subject=${encodeURIComponent(
        "Odisha Travel Enquiry"
      )}`;
  };

  /* =====================================================
     GOOGLE MAPS
  ===================================================== */

  const openGoogleMaps = () => {
    const location = encodeURIComponent(officeAddress);

    window.open(
      `https://www.google.com/maps/search/?api=1&query=${location}`,
      "_blank"
    );
  };

  /* =====================================================
     SOCIAL LINKS
  ===================================================== */

  return (
    <section className="ContactMain">
      <div className="ContactMain-container">

        {/* =================================================
            TOP SECTION
        ================================================= */}

        <div className="ContactMain-top">

          {/* =================================================
              LEFT INFORMATION SECTION
          ================================================= */}

          <div className="ContactMain-info">

            <div className="ContactMain-smallTitle">
              <span></span>
              GET IN TOUCH
            </div>

            <h1 className="ContactMain-title">
              Let's Plan Your
              <br />
              <span>Odisha Journey</span>
            </h1>

            <p className="ContactMain-description">
              Have questions about our travel packages, need a custom
              itinerary, or want help with bookings? Our team is always
              here to help you explore the beauty, culture and heritage
              of Odisha.
            </p>

            {/* =================================================
                CONTACT CARDS
            ================================================= */}

            <div className="ContactMain-contactGrid">

              {/* PHONE */}

              <a
                href={`tel:${phoneNumber}`}
                className="ContactMain-contactCard"
              >
                <div className="ContactMain-icon ContactMain-phoneIcon">
                  <FaPhoneAlt />
                </div>

                <div className="ContactMain-contactContent">
                  <span>Call Us</span>

                  <strong>
                    {displayPhone}
                  </strong>

                  <small>
                    Mon - Sat, 9:00 AM - 7:00 PM
                  </small>
                </div>
              </a>

              {/* WHATSAPP */}

              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="ContactMain-contactCard"
              >
                <div className="ContactMain-icon ContactMain-whatsappIcon">
                  <FaWhatsapp />
                </div>

                <div className="ContactMain-contactContent">
                  <span>WhatsApp</span>

                  <strong>
                    {displayPhone}
                  </strong>

                  <small>
                    Quick reply on WhatsApp
                  </small>
                </div>
              </a>

              {/* EMAIL */}

              <button
                type="button"
                onClick={handleEmail}
                className="ContactMain-contactCard ContactMain-buttonCard"
              >
                <div className="ContactMain-icon ContactMain-emailIcon">
                  <FaEnvelope />
                </div>

                <div className="ContactMain-contactContent">
                  <span>Email Us</span>

                  <strong>
                    {emailAddress}
                  </strong>

                  <small>
                    We'll respond within 24 hours
                  </small>
                </div>
              </button>

              {/* OFFICE */}

              <button
                type="button"
                onClick={openGoogleMaps}
                className="ContactMain-contactCard ContactMain-buttonCard"
              >
                <div className="ContactMain-icon ContactMain-locationIcon">
                  <FaMapMarkerAlt />
                </div>

                <div className="ContactMain-contactContent">
                  <span>Our Office</span>

                  <strong>
                    Bhubaneswar, Odisha, India
                  </strong>

                  <small>
                    Grand Bazar, Phulnakhara
                  </small>
                </div>
              </button>

            </div>

            {/* =================================================
                SOCIAL MEDIA
            ================================================= */}

            <div className="ContactMain-socialRow">

              <span className="ContactMain-followText">
                Follow Us
              </span>

              <div className="ContactMain-socials">

                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="ContactMain-social ContactMain-facebook"
                >
                  <FaFacebookF />
                </a>

                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="ContactMain-social ContactMain-instagram"
                >
                  <FaInstagram />
                </a>

                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="ContactMain-social ContactMain-youtube"
                >
                  <FaYoutube />
                </a>

                <a
                  href="https://x.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X"
                  className="ContactMain-social ContactMain-twitter"
                >
                  <FaTwitter />
                </a>

              </div>

            </div>

          </div>

          {/* =================================================
              RIGHT ENQUIRY FORM
          ================================================= */}

          <div className="ContactMain-formWrapper">

            <div className="ContactMain-formHeader">

              <div className="ContactMain-formSmallTitle">
                <span></span>
                SEND US A MESSAGE
              </div>

              <h2>
                Enquiry <span>Form</span>
              </h2>

              <p>
                Fill in the details below and our travel expert will get
                back to you shortly with the best options for your
                Odisha trip.
              </p>

            </div>

            <form
              className="ContactMain-form"
              onSubmit={handleSubmit}
            >

              {/* =================================================
                  NAME + EMAIL
              ================================================= */}

              <div className="ContactMain-formRow">

                <div className="ContactMain-field">

                  <label>
                    Your Name <b>*</b>
                  </label>

                  <div className="ContactMain-inputBox">

                    <FaUser />

                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                      autoComplete="name"
                      required
                    />

                  </div>

                </div>

                <div className="ContactMain-field">

                  <label>
                    Email Address <b>*</b>
                  </label>

                  <div className="ContactMain-inputBox">

                    <FaEnvelope />

                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      autoComplete="email"
                      required
                    />

                  </div>

                </div>

              </div>

              {/* =================================================
                  PHONE + DATE
              ================================================= */}

              <div className="ContactMain-formRow">

                <div className="ContactMain-field">

                  <label>
                    Phone Number <b>*</b>
                  </label>

                  <div className="ContactMain-inputBox">

                    <FaPhoneAlt />

                    <input
                      type="tel"
                      name="phone"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      autoComplete="tel"
                      inputMode="tel"
                      pattern="[0-9+\-\s]{10,15}"
                      required
                    />

                  </div>

                </div>

                <div className="ContactMain-field">

                  <label>
                    Travel Date <b>*</b>
                  </label>

                  <div className="ContactMain-inputBox">

                    <FaCalendarAlt />

                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      min={
                        new Date()
                          .toISOString()
                          .split("T")[0]
                      }
                      onChange={handleChange}
                      required
                    />

                  </div>

                </div>

              </div>

              {/* =================================================
                  DESTINATION
              ================================================= */}

              <div className="ContactMain-field">

                <label>
                  Destination / Package Interested In <b>*</b>
                </label>

                <div className="ContactMain-inputBox ContactMain-fullInput">

                  <FaMapPin />

                  <input
                    type="text"
                    name="destination"
                    placeholder="e.g. Puri, Konark, Bhubaneswar, Chilika Lake..."
                    value={formData.destination}
                    onChange={handleChange}
                    required
                  />

                </div>

              </div>

              {/* =================================================
                  MESSAGE
              ================================================= */}

              <div className="ContactMain-field">

                <label>
                  Your Message <b>*</b>
                </label>

                <div className="ContactMain-textareaBox">

                  <FaCommentDots />

                  <textarea
                    name="message"
                    placeholder="Tell us about your travel plan, group size, or any special requirements..."
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    required
                  />

                </div>

              </div>

              {/* =================================================
                  SUCCESS MESSAGE
              ================================================= */}

              {submitted && (
                <div className="ContactMain-success">
                  <FaCheckCircle />

                  <span>
                    Your enquiry has been prepared successfully.
                    WhatsApp is opening now.
                  </span>
                </div>
              )}

              {/* =================================================
                  SUBMIT
              ================================================= */}

              <button
                type="submit"
                className="ContactMain-submit"
              >
                <FaPaperPlane />

                <span>
                  Send Enquiry
                </span>
              </button>

            </form>

          </div>

        </div>

        {/* =================================================
            LOCATION SECTION
        ================================================= */}

        <div className="ContactMain-location">

          {/* =================================================
              LOCATION INFORMATION
          ================================================= */}

          <div className="ContactMain-locationInfo">

            <div className="ContactMain-smallTitle">
              <span></span>
              OUR LOCATION
            </div>

            <h2 className="ContactMain-locationTitle">
              Visit Our <span>Office</span>
            </h2>

            <p>
              You can visit our office for direct assistance, discuss
              custom packages, or simply say hello. We'd love to
              meet you!
            </p>

            <div className="ContactMain-locationDetails">

              {/* ADDRESS */}

              <div className="ContactMain-locationItem">

                <FaMapMarkerAlt />

                <div>

                  <strong>
                    Our Address
                  </strong>

                  <span>
                    Grand Bazar, Phulnakhara,
                    <br />
                    Bhubaneswar, Odisha - 751024
                    <br />
                    India
                  </span>

                </div>

              </div>

              {/* OFFICE HOURS */}

              <div className="ContactMain-locationItem">

                <FaClock />

                <div>

                  <strong>
                    Office Hours
                  </strong>

                  <span>
                    Mon - Sat: 9:00 AM - 7:00 PM
                    <br />
                    Sunday: Closed
                  </span>

                </div>

              </div>

              {/* PHONE */}

              <div className="ContactMain-locationItem">

                <FaPhoneAlt />

                <div>

                  <strong>
                    Call Us
                  </strong>

                  <a href={`tel:${phoneNumber}`}>
                    {displayPhone}
                  </a>

                </div>

              </div>

              {/* EMAIL */}

              <div className="ContactMain-locationItem">

                <FaEnvelope />

                <div>

                  <strong>
                    Email Us
                  </strong>

                  <a href={`mailto:${emailAddress}`}>
                    {emailAddress}
                  </a>

                </div>

              </div>

            </div>

          </div>

          {/* =================================================
              FULL WIDTH MAP
          ================================================= */}

          <div className="ContactMain-map">

            <iframe
              title="Grand Bazar Phulnakhara Bhubaneswar Location"
              src="https://www.google.com/maps?q=Grand+Bazar,+Phulnakhara,+Bhubaneswar,+Odisha,+India&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />

            <button
              type="button"
              className="ContactMain-mapButton"
              onClick={openGoogleMaps}
            >

              <FaDirections />

              <span>
                Get Directions on Google Maps
              </span>

              <b>
                →
              </b>

            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactMain;
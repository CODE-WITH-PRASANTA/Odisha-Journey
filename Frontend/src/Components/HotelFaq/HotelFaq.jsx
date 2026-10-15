
import React, { useState } from "react";
import "./HotelFaq.css";

const faqData = [
  {
    id: 1,
    question: "WHAT IS THE STANDARD CHECK-IN AND CHECK-OUT TIME?",
    answer:
      "Standard check-in time across most Odisha hotels is 12:00 PM (noon), and check-out is generally 10:00 AM or 11:00 AM. Early check-in or late check-out depends on room availability and may incur additional charges. Please confirm the timings with your selected hotel before arrival.",
  },
  {
    id: 2,
    question: "ARE TAXES INCLUDED IN THE LISTED ROOM PRICING?",
    answer:
      "The displayed room price is an indicative nightly rate. Applicable GST, service charges, meal plans, and other fees may vary by property and booking terms. Please confirm the final payable amount, including taxes, before confirming your reservation.",
  },
  {
    id: 3,
    question:
      "IS JAGANNATH TEMPLE ENTRY COORDINATION PROVIDED WITH PURI BOOKINGS?",
    answer:
      "We can help you understand the available temple visit arrangements and local travel options when planning your Puri trip. Temple entry rules, darshan timings, special permissions, and availability are governed by the temple authorities. Entry or special darshan arrangements are not guaranteed unless explicitly confirmed.",
  },
  {
    id: 4,
    question: "WHAT IS THE CANCELLATION AND REFUND POLICY?",
    answer:
      "Cancellation and refund conditions depend on the selected hotel, booking rate, and reservation terms. Some rates may be refundable while promotional or non-refundable rates may have restrictions. Review the cancellation deadline and any applicable charges before confirming your booking.",
  },
  {
    id: 5,
    question: "HOW CAN I BOOK A HOTEL IN ODISHA?",
    answer:
      "Browse our hotel collection, select your preferred destination, compare prices and facilities, and click Book Room to submit your request. A booking request is not a confirmed reservation until availability, final pricing, and confirmation have been communicated through the booking provider.",
  },

];

const HotelFaq = () => {
  const [openFaq, setOpenFaq] = useState(1);

  const toggleFaq = (id) => {
    setOpenFaq((currentId) => (currentId === id ? null : id));
  };

  return (
    <section className="HotelFaq" aria-labelledby="HotelFaq-title">
      <div className="HotelFaq-container">
        <header className="HotelFaq-heading">
          <span className="HotelFaq-eyebrow">
            <span className="HotelFaq-eyebrow-line" />
            HOTEL GUIDE
          </span>

          <h2 id="HotelFaq-title">Frequently Asked Questions</h2>

          <p className="HotelFaq-subtitle">
            Everything you need to know before booking your perfect stay
            across Odisha.
          </p>

          <span className="HotelFaq-heading-accent" />
        </header>

        <div className="HotelFaq-list">
          {faqData.map((faq, index) => {
            const isOpen = openFaq === faq.id;
            const answerId = `HotelFaq-answer-${faq.id}`;
            const questionId = `HotelFaq-question-${faq.id}`;

            return (
              <article
                className={`HotelFaq-item ${isOpen ? "is-open" : ""}`}
                key={faq.id}
                style={{ "--HotelFaq-index": index }}
              >
                <h3 className="HotelFaq-question-heading">
                  <button
                    id={questionId}
                    className="HotelFaq-question"
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() => toggleFaq(faq.id)}
                  >
                    <span className="HotelFaq-question-text">
                      <span className="HotelFaq-question-number">
                        {String(faq.id).padStart(2, "0")}
                      </span>
                      <span>{faq.question}</span>
                    </span>

                    <span
                      className="HotelFaq-toggle"
                      aria-hidden="true"
                    >
                      <span className="HotelFaq-toggle-horizontal" />
                      <span className="HotelFaq-toggle-vertical" />
                    </span>
                  </button>
                </h3>

                <div
                  id={answerId}
                  className="HotelFaq-answer"
                  role="region"
                  aria-labelledby={questionId}
                  hidden={!isOpen}
                >
                  <div className="HotelFaq-answer-inner">
                    <span className="HotelFaq-answer-accent" />
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <footer className="HotelFaq-footer">
          <div className="HotelFaq-footer-icon" aria-hidden="true">
            ?
          </div>

          <div className="HotelFaq-footer-content">
            <h3>Still have questions?</h3>
            <p>
              Our team is here to help you plan a comfortable stay in Odisha.
            </p>
          </div>

          <a className="HotelFaq-contact-button" href="/contact">
            CONTACT US
            <span aria-hidden="true">→</span>
          </a>
        </footer>
      </div>
    </section>
  );
};

export default HotelFaq;

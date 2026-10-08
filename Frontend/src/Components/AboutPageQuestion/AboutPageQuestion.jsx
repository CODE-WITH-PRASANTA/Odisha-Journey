import React, { useState } from "react";
import "./AboutPageQuestion.css";

const AboutPageQuestion = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);

  const questions = [
    {
      id: 1,
      question: "What Services Does Your Travel Agency Provide?",
      answer: (
        <>
          A travel agency typically provides a wide range of services to
          ensure a smooth and enjoyable travel experience. As like{" "}
          <strong>
            Hotel booking, Flight Booking, Visa & Customized Travel Package
            etc.
          </strong>
        </>
      ),
    },
    {
      id: 2,
      question: "Do You Offer Customized Travel Packages?",
      answer: (
        <>
          Yes. We create customized travel packages according to your
          destination, budget, travel dates, preferred hotels, activities and
          personal requirements.
        </>
      ),
    },
    {
      id: 3,
      question: "Can I Book Flights, Hotels, and Tours Separately?",
      answer: (
        <>
          Absolutely. You can book flights, hotels, sightseeing tours,
          transportation and other travel services separately or combine them
          into one complete travel package.
        </>
      ),
    },
    {
      id: 4,
      question: "Do You Provide Visa Assistance?",
      answer: (
        <>
          Yes, we provide visa guidance and documentation assistance for
          eligible international destinations. Our team helps you understand
          the required documents and application process.
        </>
      ),
    },
    {
      id: 5,
      question: "What Payment Methods Do You Accept?",
      answer: (
        <>
          We accept multiple secure payment options including bank transfer,
          UPI, debit cards, credit cards and other available digital payment
          methods.
        </>
      ),
    },
    {
      id: 6,
      question: "What Travel Documents are Required for International Travel?",
      answer: (
        <>
          International travel generally requires a valid passport, visa where
          applicable, confirmed travel bookings and other destination-specific
          documents. Requirements may vary depending on the country.
        </>
      ),
    },
  ];

  const toggleQuestion = (index) => {
    setActiveQuestion(
      activeQuestion === index ? null : index
    );
  };

  return (
    <section className="AboutPageQuestion">

      {/* ==========================================
          FAQ MAIN SECTION
      ========================================== */}

      <div className="AboutPageQuestion-container">

        {/* Header */}

        <div className="AboutPageQuestion-header">

          <span className="AboutPageQuestion-smallLabel">
            QUESTIONS & ANSWERS
          </span>

          <h2 className="AboutPageQuestion-title">
            Questions & Answer
          </h2>

          <p className="AboutPageQuestion-subtitle">
            We’re committed to offering more than just products—we provide
            <br className="AboutPageQuestion-desktopBreak" />
            exceptional experiences.
          </p>

        </div>


        {/* FAQ LIST */}

        <div className="AboutPageQuestion-list">

          {questions.map((item, index) => {

            const isActive =
              activeQuestion === index;

            return (
              <div
                key={item.id}
                className={`AboutPageQuestion-item ${
                  isActive
                    ? "AboutPageQuestion-itemActive"
                    : ""
                }`}
              >

                {/* Question Button */}

                <button
                  type="button"
                  className="AboutPageQuestion-question"
                  onClick={() =>
                    toggleQuestion(index)
                  }
                  aria-expanded={isActive}
                >

                  <span className="AboutPageQuestion-questionText">
                    {item.question}
                  </span>

                  <span
                    className={`AboutPageQuestion-arrow ${
                      isActive
                        ? "AboutPageQuestion-arrowActive"
                        : ""
                    }`}
                  >
                    <span />
                  </span>

                </button>


                {/* Answer */}

                <div
                  className={`AboutPageQuestion-answerWrapper ${
                    isActive
                      ? "AboutPageQuestion-answerWrapperActive"
                      : ""
                  }`}
                >

                  <div className="AboutPageQuestion-answer">
                    {item.answer}
                  </div>

                </div>

              </div>
            );
          })}

        </div>

      </div>
      
    </section>
  );
};

export default AboutPageQuestion;
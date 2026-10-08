import React, { useEffect, useMemo, useState } from "react";
import {
  FaSearch,
  FaChevronDown,
  FaQuestionCircle,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaHotel,
  FaCar,
  FaWallet,
  FaHeadset,
  FaWhatsapp,
  FaArrowRight,
  FaAngleUp,
} from "react-icons/fa";

import "./FaqMain.css";

const FaqMain = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeCategory, setActiveCategory] =
    useState("All Questions");

  const [searchTerm, setSearchTerm] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);

  /* =====================================================
     SCROLL TOP BUTTON
  ===================================================== */

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* =====================================================
     CATEGORIES
  ===================================================== */

  const categories = [
    {
      name: "All Questions",
      icon: <FaQuestionCircle />,
    },
    {
      name: "Booking",
      icon: <FaCalendarAlt />,
    },
    {
      name: "Packages",
      icon: <FaMapMarkerAlt />,
    },
    {
      name: "Hotels",
      icon: <FaHotel />,
    },
    {
      name: "Transport",
      icon: <FaCar />,
    },
    {
      name: "Payment",
      icon: <FaWallet />,
    },
  ];

  /* =====================================================
     FAQ DATA
  ===================================================== */

  const faqData = [
    {
      category: "Booking",
      question:
        "How can I book an Odisha tour package?",
      answer:
        "You can book your Odisha tour by contacting us through our enquiry form, phone, WhatsApp or email. Simply share your preferred travel dates, destinations, number of travellers and package requirements. Our travel expert will prepare a suitable itinerary and guide you through the booking process.",
    },

    {
      category: "Packages",
      question:
        "Which destinations can I visit in Odisha?",
      answer:
        "We can arrange trips covering Bhubaneswar, Puri, Konark, Chilika Lake, Cuttack, Gopalpur, Dhenkanal, Satkosia, Similipal and many other beautiful destinations across Odisha.",
    },

    {
      category: "Packages",
      question:
        "Can I customize my travel package?",
      answer:
        "Yes. Our travel packages can be customized according to your preferred destinations, number of days, hotel category, transportation, sightseeing preferences and budget.",
    },

    {
      category: "Booking",
      question:
        "How early should I book my Odisha trip?",
      answer:
        "We recommend booking at least 1–3 weeks before your travel date. During festivals, holidays and peak seasons, we recommend booking even earlier to secure your preferred hotels and transportation.",
    },

    {
      category: "Hotels",
      question:
        "Do you provide hotel accommodation?",
      answer:
        "Yes. Hotel accommodation can be included in your Odisha tour package. We can suggest hotels based on your preferred location, comfort level and budget.",
    },

    {
      category: "Hotels",
      question:
        "Can I choose my own hotel?",
      answer:
        "Yes. If you already have a preferred hotel, you can share the hotel details with us. We can include it in your itinerary depending on availability and booking conditions.",
    },

    {
      category: "Transport",
      question:
        "Is transportation included in the tour package?",
      answer:
        "Transportation depends on the package you choose. We can arrange private cars, airport transfers, railway station transfers and sightseeing transportation according to your itinerary.",
    },

    {
      category: "Transport",
      question:
        "Do you provide airport and railway station pickup?",
      answer:
        "Yes. We provide pickup and drop services from Bhubaneswar Airport, Bhubaneswar Railway Station and other suitable arrival points according to your travel plan.",
    },

    {
      category: "Payment",
      question:
        "How can I make the payment?",
      answer:
        "Payment options will be shared by our travel team after your package is finalized. We will provide the required payment details and instructions during the booking process.",
    },

    {
      category: "Payment",
      question:
        "Is an advance payment required?",
      answer:
        "Depending on the package and services booked, an advance payment may be required to confirm hotels, transportation and other travel services. The exact amount will be communicated before confirmation.",
    },

    {
      category: "Booking",
      question:
        "Can I change my travel date after booking?",
      answer:
        "Travel date changes may be possible depending on hotel, transportation and supplier availability. Please contact our team as early as possible if you need to modify your travel dates.",
    },

    {
      category: "Booking",
      question:
        "What happens if I need to cancel my trip?",
      answer:
        "Cancellation terms depend on the services booked and the time of cancellation. Our team will explain the applicable cancellation policy before confirming your booking.",
    },

    {
      category: "Packages",
      question:
        "Can you arrange a short 2 or 3 day Odisha trip?",
      answer:
        "Yes. We can create short Odisha itineraries covering destinations such as Bhubaneswar, Puri, Konark and Chilika depending on your arrival and departure schedule.",
    },

    {
      category: "Packages",
      question:
        "Do you arrange family and group tours?",
      answer:
        "Yes. We arrange family holidays, couple trips, friends' tours, corporate trips and larger group travel. The itinerary can be customized according to your group's requirements.",
    },

    {
      category: "Transport",
      question:
        "Can you arrange a private car with a driver?",
      answer:
        "Yes. Private vehicle options with experienced drivers can be arranged for sightseeing and intercity travel throughout your Odisha itinerary.",
    },

    {
      category: "Packages",
      question:
        "What is the best time to visit Odisha?",
      answer:
        "October to March is generally a comfortable time to explore many parts of Odisha. However, the best time can vary depending on the destinations and experiences you want to enjoy.",
    },
  ];

  /* =====================================================
     FILTER FAQ
  ===================================================== */

  const filteredFaqs = useMemo(() => {
    const search = searchTerm.trim().toLowerCase();

    return faqData.filter((faq) => {
      const categoryMatch =
        activeCategory === "All Questions" ||
        faq.category === activeCategory;

      const searchMatch =
        !search ||
        faq.question.toLowerCase().includes(search) ||
        faq.answer.toLowerCase().includes(search);

      return categoryMatch && searchMatch;
    });
  }, [activeCategory, searchTerm]);

  /* =====================================================
     FAQ TOGGLE
  ===================================================== */

  const toggleFaq = (index) => {
    setActiveIndex((previous) =>
      previous === index ? null : index
    );
  };

  /* =====================================================
     WHATSAPP
  ===================================================== */

  const openWhatsApp = () => {
    const phone = "916372545244";

    const message = encodeURIComponent(
      "Hello, I have a question about your Odisha travel packages."
    );

    window.open(
      `https://wa.me/${phone}?text=${message}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  /* =====================================================
     RESET FILTERS
  ===================================================== */

  const resetFilters = () => {
    setSearchTerm("");
    setActiveCategory("All Questions");
    setActiveIndex(0);
  };

  return (
    <section className="FaqMain">

      {/* =================================================
          FAQ MAIN CONTENT
          HERO SECTION REMOVED
      ================================================= */}

      <div className="FaqMain-container">

        <div className="FaqMain-content">

          {/* =================================================
              SIDEBAR
          ================================================= */}

          <aside className="FaqMain-sidebar">

            <div className="FaqMain-sidebarCard">

              <div className="FaqMain-sidebarHeading">
                <span></span>
                BROWSE BY TOPIC
              </div>

              <div className="FaqMain-categoryList">

                {categories.map((category) => (
                  <button
                    type="button"
                    key={category.name}
                    className={`FaqMain-category ${
                      activeCategory === category.name
                        ? "FaqMain-categoryActive"
                        : ""
                    }`}
                    onClick={() => {
                      setActiveCategory(category.name);
                      setActiveIndex(0);
                    }}
                  >

                    <span className="FaqMain-categoryIcon">
                      {category.icon}
                    </span>

                    <span className="FaqMain-categoryName">
                      {category.name}
                    </span>

                    <FaArrowRight className="FaqMain-categoryArrow" />

                  </button>
                ))}

              </div>

              {/* SUPPORT CARD */}

              <div className="FaqMain-supportCard">

                <div className="FaqMain-supportIcon">
                  <FaHeadset />
                </div>

                <h3>
                  Still have questions?
                </h3>

                <p>
                  Our travel experts are ready to help
                  you plan your perfect Odisha journey.
                </p>

                <button
                  type="button"
                  onClick={openWhatsApp}
                >
                  <FaWhatsapp />
                  Chat with us
                </button>

              </div>

            </div>

          </aside>

          {/* =================================================
              FAQ LIST
          ================================================= */}

          <main className="FaqMain-listArea">

            <div className="FaqMain-listHeader">

              <div>

                <div className="FaqMain-sectionLabel">
                  <span></span>
                  COMMON QUESTIONS
                </div>

                <h1>
                  Frequently Asked
                  <span> Questions</span>
                </h1>

                <p>
                  Find answers to the most common questions
                  about travelling with us.
                </p>

              </div>

              <div className="FaqMain-resultCount">
                {filteredFaqs.length} Questions
              </div>

            </div>

            {/* FAQ LIST */}

            {filteredFaqs.length > 0 ? (

              <div className="FaqMain-list">

                {filteredFaqs.map((faq, index) => {

                  const isOpen =
                    activeIndex === index;

                  return (
                    <div
                      className={`FaqMain-item ${
                        isOpen
                          ? "FaqMain-itemActive"
                          : ""
                      }`}
                      key={`${faq.question}-${index}`}
                    >

                      <button
                        type="button"
                        className="FaqMain-question"
                        onClick={() => toggleFaq(index)}
                        aria-expanded={isOpen}
                      >

                        <span className="FaqMain-number">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="FaqMain-questionText">
                          {faq.question}
                        </span>

                        <span className="FaqMain-questionIcon">
                          <FaChevronDown />
                        </span>

                      </button>

                      <div
                        className={`FaqMain-answer ${
                          isOpen
                            ? "FaqMain-answerOpen"
                            : ""
                        }`}
                      >

                        <div className="FaqMain-answerInner">

                          <div className="FaqMain-answerLine"></div>

                          <p>
                            {faq.answer}
                          </p>

                        </div>

                      </div>

                    </div>
                  );
                })}

              </div>

            ) : (

              <div className="FaqMain-empty">

                <div className="FaqMain-emptyIcon">
                  <FaSearch />
                </div>

                <h3>
                  No questions found
                </h3>

                <p>
                  Try another search keyword or select
                  a different category.
                </p>

                <button
                  type="button"
                  onClick={resetFilters}
                >
                  View All Questions
                </button>

              </div>

            )}

          </main>

        </div>

      </div>

    
    </section>
  );
};

export default FaqMain;
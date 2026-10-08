import React, { useState } from "react";
import {
  FaArrowRight,
  FaCalendarAlt,
  FaCompass,
  FaGlobeAsia,
} from "react-icons/fa";

import "./AboutPageThree.css";

// ==========================================
// YOUR ASSETS
// ==========================================

import journey1996 from "../../assets/journey1996.png";
import journey2006 from "../../assets/journey2006.jpg";
import journey2016 from "../../assets/journey2016.jpg";
import journey2022 from "../../assets/journey2022.jpg";
import journey2023 from "../../assets/journey2023.jpeg";
import journey2025 from "../../assets/journey2025.jpg";


const AboutPageThree = () => {
  // ========================================
  // JOURNEY DATA
  // ========================================

  const journeys = [
    {
      year: "1996",
      image: journey1996,
      title: "1996 – The Beginning of Travel Dreams",
      description:
        "Our journey began with a simple passion for discovering new places and creating meaningful travel experiences. What started as a small dream gradually became a vision to help travellers explore beautiful destinations with comfort and confidence.",
      highlight:
        "A passion for travel became the foundation of our journey.",
    },

    {
      year: "2006",
      image: journey2006,
      title: "2006 – Expanding New Horizons",
      description:
        "As our experience grew, we began exploring new destinations and building stronger connections with travellers. We focused on understanding what people truly wanted from their journeys and started creating more personalized travel experiences.",
      highlight:
        "New destinations, new experiences and stronger connections.",
    },

    {
      year: "2016",
      image: journey2016,
      title: "2016 – Creating Memorable Experiences",
      description:
        "Travel became more than simply visiting a destination. We started focusing on experiences, local culture, nature, food and unforgettable moments that travellers could take home with them.",
      highlight:
        "We turned ordinary trips into meaningful memories.",
    },

    {
      year: "2022",
      image: journey2022,
      title: "2022 – A New Era of Personalized Journeys",
      description:
        "We entered a new era of travel planning with a stronger focus on personalized journeys. Every traveller is different, so we began designing experiences around individual interests, schedules, budgets and expectations.",
      highlight:
        "Every journey became personal, flexible and thoughtfully planned.",
    },

    {
      year: "2023",
      image: journey2023,
      title: "2023 – Exploring New Possibilities",
      description:
        "Our vision continued to grow as we explored new ways to make travel easier and more inspiring. From destination discovery to customized itineraries, we continued improving every part of the travel experience.",
      highlight:
        "Better planning, better experiences and endless possibilities.",
    },

    {
      year: "2025",
      image: journey2025,
      title: "2025 – Pioneering Next-Gen Travel Solutions",
      description:
        "Today, we are combining local expertise, modern technology and thoughtful travel planning to create the next generation of Odisha travel experiences. Our goal is simple — make every journey smooth, memorable and truly special.",
      highlight:
        "The future of travel is personalized, connected and unforgettable.",
    },
  ];


  // ========================================
  // ACTIVE JOURNEY
  // ========================================

  const [activeJourney, setActiveJourney] = useState(2);

  const selectedJourney = journeys[activeJourney];


  // ========================================
  // HANDLE CLICK
  // ========================================

  const handleJourneyClick = (index) => {
    setActiveJourney(index);
  };


  return (
    <section className="AboutPageThree">

      {/* ====================================
          BACKGROUND
      ==================================== */}

      <div className="AboutPageThree-background"></div>

      <div className="AboutPageThree-pattern AboutPageThree-patternOne"></div>

      <div className="AboutPageThree-pattern AboutPageThree-patternTwo"></div>


      {/* ====================================
          CONTAINER
      ==================================== */}

      <div className="AboutPageThree-container">


        {/* ==================================
            HEADER
        ================================== */}

        <div className="AboutPageThree-header">

          <div className="AboutPageThree-eyebrow">

            <span className="AboutPageThree-eyebrowLine"></span>

            <span>OUR JOURNEY</span>

          </div>


          <h2 className="AboutPageThree-heading">
            Behind The{" "}
            <span>Journey</span>
          </h2>


          <p className="AboutPageThree-subtitle">
            With years of experience in the travel industry,
            we specialize in crafting personalized journeys
            filled with discovery, culture and unforgettable
            memories.
          </p>

        </div>


        {/* ==================================
            TIMELINE
        ================================== */}

        <div className="AboutPageThree-timelineWrapper">

          <div className="AboutPageThree-timelineScroll">

            <div className="AboutPageThree-timeline">

              {/* Timeline line */}

              <div className="AboutPageThree-line">

                <span className="AboutPageThree-lineArrow AboutPageThree-lineArrowLeft">
                  ‹
                </span>

                <span className="AboutPageThree-lineArrow AboutPageThree-lineArrowRight">
                  ›
                </span>

              </div>


              {/* Timeline items */}

              {journeys.map((journey, index) => {

                const isActive =
                  index === activeJourney;

                return (
                  <button
                    key={journey.year}
                    type="button"
                    className={`AboutPageThree-item ${
                      isActive
                        ? "AboutPageThree-itemActive"
                        : ""
                    }`}
                    onClick={() =>
                      handleJourneyClick(index)
                    }
                    aria-label={`View ${journey.year} journey`}
                  >

                    {/* Image */}

                    <div className="AboutPageThree-imageOuter">

                      {/* Glow */}

                      <div className="AboutPageThree-imageGlow"></div>


                      {/* Image */}

                      <div className="AboutPageThree-imageRing">

                        <img
                          src={journey.image}
                          alt={`${journey.year} travel journey`}
                          className="AboutPageThree-image"
                        />

                      </div>

                    </div>


                    {/* Dot */}

                    <div className="AboutPageThree-dot"></div>


                    {/* Year */}

                    <span className="AboutPageThree-year">
                      {journey.year}
                    </span>

                  </button>
                );
              })}

            </div>

          </div>

        </div>


        {/* ==================================
            JOURNEY DETAILS
        ================================== */}

        <div
          key={selectedJourney.year}
          className="AboutPageThree-details"
        >

          <div className="AboutPageThree-detailsTop">

            <div className="AboutPageThree-detailsBadge">

              <FaCalendarAlt />

              <span>
                {selectedJourney.year}
              </span>

            </div>


            <div className="AboutPageThree-detailsLabel">

              <FaCompass />

              <span>
                JOURNEY MILESTONE
              </span>

            </div>

          </div>


          <h3 className="AboutPageThree-detailsTitle">
            {selectedJourney.title}
          </h3>


          <p className="AboutPageThree-detailsDescription">
            {selectedJourney.description}
          </p>


         
         
        </div>


        {/* ==================================
            BOTTOM MESSAGE
        ================================== */}

        <div className="AboutPageThree-bottomMessage">

          <span>
            Every destination tells a story.
          </span>

          <strong>
            Every journey creates a memory.
          </strong>

          <FaArrowRight />

        </div>

      </div>

    </section>
  );
};


export default AboutPageThree;
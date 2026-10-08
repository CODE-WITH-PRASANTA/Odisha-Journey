import React, { useEffect, useRef, useState } from "react";
import {
  FaArrowRight,
  FaCheckCircle,
  FaGlobeAsia,
  FaHeart,
  FaPlaneDeparture,
  FaQuoteLeft,
} from "react-icons/fa";

import "./AboutPageOne.css";



import aboutMainImage from "../../assets/about-main.jpeg";
import aboutTravelImage from "../../assets/about-travel.jpeg";
import aboutWaterImage from "../../assets/about-water.jpeg";


const AboutPageOne = () => {

  const sectionRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);


  useEffect(() => {

    const observer = new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {
            setIsVisible(true);

            observer.unobserve(entry.target);
          }

        });

      },
      {
        threshold: 0.18,
      }
    );


    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }


    return () => {
      observer.disconnect();
    };

  }, []);


  return (

    <section
      ref={sectionRef}
      className={`AboutPageOne ${
        isVisible
          ? "AboutPageOne-visible"
          : ""
      }`}
    >

      {/* ==================================================
          BACKGROUND DECORATION
      ================================================== */}

      <div className="AboutPageOne-backgroundShape AboutPageOne-backgroundShapeOne"></div>

      <div className="AboutPageOne-backgroundShape AboutPageOne-backgroundShapeTwo"></div>


      {/* ==================================================
          MAIN CONTAINER
      ================================================== */}

      <div className="AboutPageOne-container">


        {/* =================================================
            LEFT CONTENT
        ================================================= */}

        <div className="AboutPageOne-content">


          {/* Small Label */}

          <div className="AboutPageOne-label">

            <span className="AboutPageOne-labelLine"></span>

            <span>
              ABOUT US
            </span>

          </div>


          {/* Heading */}

          <h2 className="AboutPageOne-title">

            Why We're
            <span> Best Agency</span>

          </h2>


          {/* Intro Heading */}

          <h3 className="AboutPageOne-intro">

            Welcome to Odisha Journey –
            <br className="AboutPageOne-desktopBreak" />

            Your Gateway to
            <br className="AboutPageOne-desktopBreak" />

            Unforgettable Journeys!

          </h3>


          {/* Description */}

          <div className="AboutPageOne-description">

            <p>
              Odisha Journey is a trusted name in
              Odisha travel, offering seamless travel
              planning, personalized itineraries and
              unforgettable adventures.
            </p>

            <p>
              With local knowledge and a passion for
              Odisha, we help travellers discover
              beautiful destinations, rich traditions
              and authentic experiences.
            </p>

            <p>
              We believe that travel is more than just
              moving from one place to another — it's
              about discovering new cultures, creating
              unforgettable experiences and making
              lifelong memories.
            </p>

          </div>


          {/* =================================================
              SMALL BENEFITS
          ================================================= */}

          <div className="AboutPageOne-benefits">

            <div className="AboutPageOne-benefit">

              <div className="AboutPageOne-benefitIcon">
                <FaCheckCircle />
              </div>

              <div>
                <strong>
                  Local Expertise
                </strong>

                <span>
                  Authentic Odisha experiences
                </span>
              </div>

            </div>


            <div className="AboutPageOne-benefit">

              <div className="AboutPageOne-benefitIcon">
                <FaHeart />
              </div>

              <div>
                <strong>
                  Personalized Trips
                </strong>

                <span>
                  Journeys designed for you
                </span>
              </div>

            </div>

          </div>


          {/* =================================================
              FOUNDER
          ================================================= */}

          <div className="AboutPageOne-founder">

            <div className="AboutPageOne-founderSignature">

              <span>
                AK
              </span>

            </div>


            <div className="AboutPageOne-founderInfo">

              <strong>
                Akash Kumar
              </strong>

              <span>
                Founder & Travel Expert
              </span>

            </div>

          </div>


        </div>


        {/* =================================================
            RIGHT IMAGE COLLAGE
        ================================================= */}

        <div className="AboutPageOne-visual">


          {/* Decorative Circle */}

          <div className="AboutPageOne-visualCircle"></div>


          {/* =================================================
              MAIN LARGE IMAGE
          ================================================= */}

          <div className="AboutPageOne-mainImage">

            <img
              src={aboutMainImage}
              alt="Beautiful Odisha travel destination"
            />

            <div className="AboutPageOne-imageOverlay"></div>


            {/* Main Image Badge */}

            <div className="AboutPageOne-mainBadge">

              <div className="AboutPageOne-mainBadgeIcon">
                <FaGlobeAsia />
              </div>

              <div>

                <strong>
                  Explore Odisha
                </strong>

                <span>
                  Culture • Nature • Heritage
                </span>

              </div>

            </div>

          </div>


          {/* =================================================
              TOP RIGHT IMAGE
          ================================================= */}

          <div className="AboutPageOne-smallImage AboutPageOne-smallImageTop">

            <img
              src={aboutTravelImage}
              alt="Odisha travel experience"
            />

            <div className="AboutPageOne-smallImageOverlay">

              <FaPlaneDeparture />

            </div>

          </div>


          {/* =================================================
              BOTTOM RIGHT IMAGE
          ================================================= */}

          <div className="AboutPageOne-smallImage AboutPageOne-smallImageBottom">

            <img
              src={aboutWaterImage}
              alt="Odisha beach and nature"
            />

            <div className="AboutPageOne-smallImageOverlay">

              <FaHeart />

            </div>

          </div>


          {/* =================================================
              FLOATING QUOTE
          ================================================= */}

          <div className="AboutPageOne-quote">

            <FaQuoteLeft />

            <p>
              Travel is not just about
              places. It's about the
              memories we create.
            </p>

          </div>


          {/* Decorative Dot */}

          <div className="AboutPageOne-dot"></div>

        </div>

      </div>


      {/* ==================================================
          BOTTOM DECORATIVE LINE
      ================================================== */}

      <div className="AboutPageOne-bottomLine"></div>

    </section>

  );
};


export default AboutPageOne;
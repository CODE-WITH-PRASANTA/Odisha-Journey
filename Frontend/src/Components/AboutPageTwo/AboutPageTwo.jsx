import React, { useEffect, useRef, useState } from "react";

import {
  FaAward,
  FaPercent,
  FaWallet,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";

import "./AboutPageTwo.css";

const AboutPageTwo = () => {
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
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`AboutPageTwo ${
        isVisible ? "AboutPageTwo-visible" : ""
      }`}
    >

      <div className="AboutPageTwo-container">

        <div className="AboutPageTwo-heading">
          <h2>
            We're Providing{" "}
            <span>Best Service Ever!</span>
          </h2>

          <div className="AboutPageTwo-headingLine">
            <span></span>
          </div>
        </div>

        <div className="AboutPageTwo-services">

          {/* Local Guidance */}
          <div className="AboutPageTwo-service">

            <div className="AboutPageTwo-icon AboutPageTwo-iconGold">
              <FaAward />
            </div>

            <div className="AboutPageTwo-serviceContent">
              <h3>Local Guidance</h3>

              <p>
                Travel with experienced professionals
                who know Odisha's destinations,
                culture and hidden gems.
              </p>
            </div>

          </div>


          {/* Deals & Discounts */}
          <div className="AboutPageTwo-service">

            <div className="AboutPageTwo-icon AboutPageTwo-iconBlue">
              <FaPercent />
            </div>

            <div className="AboutPageTwo-serviceContent">
              <h3>Deals & Discounts</h3>

              <p>
                Get special offers and smart deals
                on flights, hotels, activities
                and complete travel packages.
              </p>
            </div>

          </div>


          {/* Saves Money */}
          <div className="AboutPageTwo-service">

            <div className="AboutPageTwo-icon AboutPageTwo-iconOrange">
              <FaWallet />
            </div>

            <div className="AboutPageTwo-serviceContent">
              <h3>Saves Money</h3>

              <p>
                Avoid hidden fees and unnecessary
                expenses with budget-friendly
                travel options.
              </p>
            </div>

          </div>

        </div>


        <div className="AboutPageTwo-offerWrapper">

          <a
            href="/packages"
            className="AboutPageTwo-offer"
          >
            <span className="AboutPageTwo-offerText">
              Flat 30% Discounts All Packages
            </span>

            <span className="AboutPageTwo-offerLink">
              Check Offer
              <FaArrowUpRightFromSquare />
            </span>
          </a>

        </div>

      </div>

    </section>
  );
};

export default AboutPageTwo;
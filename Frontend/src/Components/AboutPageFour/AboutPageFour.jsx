import React from "react";
import {
  FaPlaneDeparture,
  FaTags,
  FaHeadset,
  FaAward,
  FaArrowRight,
  FaPlay,
  FaYoutube,
} from "react-icons/fa";

import "./AboutPageFour.css";



import youtubeImage from "../../assets/youtube-travel.jpg";


const AboutPageFour = () => {

  /* ==========================================================
     FEATURE DATA
  ========================================================== */

  const features = [
    {
      id: 1,
      icon: <FaPlaneDeparture />,
      title: (
        <>
          Expertly Curated
          <br />
          Tours.
        </>
      ),
      description:
        "Carefully planned journeys designed around your interests and travel style.",
      className: "green",
    },

    {
      id: 2,
      icon: <FaTags />,
      title: (
        <>
          Affordable & Flexible
          <br />
          Packages.
        </>
      ),
      description:
        "Flexible packages with excellent value, transparent pricing and convenient options.",
      className: "gray",
    },

    {
      id: 3,
      icon: <FaHeadset />,
      title: (
        <>
          24/7 Customer
          <br />
          Support.
        </>
      ),
      description:
        "Our travel experts are always available to help you before and during your journey.",
      className: "purple",
    },

    {
      id: 4,
      icon: <FaAward />,
      title: (
        <>
          Certified &
          <br />
          Experienced Guides.
        </>
      ),
      description:
        "Travel confidently with knowledgeable and experienced local professionals.",
      className: "mint",
    },
  ];


  /* ==========================================================
     COMPANY LOGOS
  ========================================================== */

  const logos = [
    {
      id: 1,
      type: "tripzone",
    },

    {
      id: 2,
      type: "borcelle",
    },

    {
      id: 3,
      type: "gotrip",
    },

    {
      id: 4,
      type: "travel",
    },

    {
      id: 5,
      type: "gfly",
    },

    {
      id: 6,
      type: "traverse",
    },
  ];


  /*
    Duplicate logos for seamless infinite animation.
  */

  const marqueeLogos = [
    ...logos,
    ...logos,
  ];


  /* ==========================================================
     YOUTUBE URL

     Replace this with your own YouTube channel/video URL.
  ========================================================== */

  const youtubeUrl =
    "https://www.youtube.com/";


  /* ==========================================================
     OPEN YOUTUBE
  ========================================================== */

  const handleYoutubeClick = () => {
    window.open(
      youtubeUrl,
      "_blank",
      "noopener,noreferrer"
    );
  };


  return (
    <section className="AboutPageFour">

      {/* =====================================================
          BACKGROUND DECORATIONS
      ===================================================== */}

      <div
        className="
          AboutPageFour-backgroundGlow
          AboutPageFour-backgroundGlowOne
        "
      />

      <div
        className="
          AboutPageFour-backgroundGlow
          AboutPageFour-backgroundGlowTwo
        "
      />


      <div className="AboutPageFour-container">


        {/* ===================================================
            HEADER
        =================================================== */}

        <div className="AboutPageFour-header">

          <div className="AboutPageFour-eyebrow">

            <span className="AboutPageFour-eyebrowLine" />

            <span>
              WHY CHOOSE US
            </span>

            <span className="AboutPageFour-eyebrowLine" />

          </div>


          <h2 className="AboutPageFour-title">
            Why Travel With Us?
          </h2>


          <p className="AboutPageFour-subtitle">
            We specialize in crafting personalized journeys
            that suit every traveler's dream.
          </p>

        </div>


        {/* ===================================================
            FEATURE CARDS
        =================================================== */}

        <div className="AboutPageFour-features">

          {features.map((feature) => (

            <article
              key={feature.id}
              className={`
                AboutPageFour-card
                AboutPageFour-card-${feature.className}
              `}
            >

              <div className="AboutPageFour-cardGlow" />


              <div className="AboutPageFour-icon">

                <span className="AboutPageFour-iconInner">
                  {feature.icon}
                </span>

              </div>


              <div className="AboutPageFour-cardContent">

                <h3 className="AboutPageFour-cardTitle">
                  {feature.title}
                </h3>

                <p className="AboutPageFour-cardDescription">
                  {feature.description}
                </p>

              </div>


              <div className="AboutPageFour-cardArrow">
                <FaArrowRight />
              </div>

            </article>

          ))}

        </div>


        {/* ===================================================
            TRUSTED COMPANIES TITLE
        =================================================== */}

        <div className="AboutPageFour-trust">

          <span className="AboutPageFour-trustLine" />

          <h3 className="AboutPageFour-trustTitle">
            Those Companies You Can Easily Trust!
          </h3>

          <span className="AboutPageFour-trustLine" />

        </div>


        {/* ===================================================
            LOGO MARQUEE
        =================================================== */}

        <div className="AboutPageFour-marquee">

          <div className="AboutPageFour-marqueeTrack">

            {marqueeLogos.map((logo, index) => (

              <div
                className="AboutPageFour-logoWrapper"
                key={`${logo.type}-${index}`}
              >

                <div
                  className={`
                    AboutPageFour-logo
                    AboutPageFour-logo-${logo.type}
                  `}
                >


                  {/* TRIPZONE */}

                  {logo.type === "tripzone" && (
                    <>
                      <div className="AboutPageFour-logoIcon">
                        <FaHeadset />
                      </div>

                      <div className="AboutPageFour-logoText">

                        <strong>
                          Trip<span>Zone</span>
                        </strong>

                        <small>
                          Traveler.co
                        </small>

                      </div>
                    </>
                  )}


                  {/* BORCELLE */}

                  {logo.type === "borcelle" && (
                    <>
                      <div className="AboutPageFour-borcelleSymbol">
                        ✦
                      </div>

                      <div className="AboutPageFour-logoText">

                        <strong>
                          Borcelle
                        </strong>

                        <small>
                          Tour & Travel
                        </small>

                      </div>
                    </>
                  )}


                  {/* GOTRIP */}

                  {logo.type === "gotrip" && (
                    <>
                      <div className="AboutPageFour-gotripIcon">
                        ◎
                      </div>

                      <div className="AboutPageFour-logoText">

                        <strong>
                          GoTrip
                        </strong>

                        <small>
                          Global Agency
                        </small>

                      </div>
                    </>
                  )}


                  {/* TRAVEL */}

                  {logo.type === "travel" && (

                    <div className="AboutPageFour-travelLogo">

                      <strong>
                        travel
                      </strong>

                      <span>
                        ✈
                      </span>

                    </div>

                  )}


                  {/* G-FLY */}

                  {logo.type === "gfly" && (
                    <>
                      <div className="AboutPageFour-gflyIcon">
                        ◉
                      </div>

                      <div className="AboutPageFour-logoText">

                        <strong>
                          G-Fly
                        </strong>

                        <small>
                          Global Agency
                        </small>

                      </div>
                    </>
                  )}


                  {/* TRAVERSE */}

                  {logo.type === "traverse" && (

                    <div className="AboutPageFour-traverseLogo">

                      <strong>
                        TRAVERSE
                      </strong>

                      <small>
                        TOUR & TRAVEL AGENCY
                      </small>

                    </div>

                  )}

                </div>

              </div>

            ))}

          </div>

        </div>


        {/* ===================================================
            TRUST FOOTER
        =================================================== */}

        <div className="AboutPageFour-trustFooter">

          <span>
            Trusted travel partners
          </span>

          <span className="AboutPageFour-trustDot" />

          <span>
            Reliable experiences
          </span>

          <span className="AboutPageFour-trustDot" />

          <span>
            Memorable journeys
          </span>

        </div>


        {/* ===================================================
            YOUTUBE VIDEO SECTION
        =================================================== */}

        <section className="AboutPageFour-youtube">

          <div className="AboutPageFour-youtubeContent">

            {/* TOP LABEL */}

            <div className="AboutPageFour-youtubeEyebrow">

              <span className="AboutPageFour-youtubeLine" />

              <span>
                WATCH OUR JOURNEY
              </span>

            </div>


            {/* TITLE */}

            <h2 className="AboutPageFour-youtubeTitle">

              Experience Odisha
              <span> Through Our Eyes.</span>

            </h2>


            {/* DESCRIPTION */}

            <p className="AboutPageFour-youtubeDescription">

              Discover breathtaking destinations, vibrant
              culture, ancient temples and unforgettable
              experiences through our travel stories.

            </p>


            {/* BUTTON */}

            <button
              type="button"
              className="AboutPageFour-youtubeButton"
              onClick={handleYoutubeClick}
              aria-label="Watch our YouTube channel"
            >

              <span className="AboutPageFour-youtubeButtonIcon">
                <FaYoutube />
              </span>

              <span>
                Watch on YouTube
              </span>

              <FaArrowRight
                className="AboutPageFour-youtubeButtonArrow"
              />

            </button>

          </div>


          {/* =================================================
              VIDEO THUMBNAIL
          ================================================= */}

          <div className="AboutPageFour-youtubeVideo">

            <img
              src={youtubeImage}
              alt="Odisha travel journey"
              className="AboutPageFour-youtubeImage"
            />


            {/* DARK OVERLAY */}

            <div className="AboutPageFour-youtubeOverlay" />


            {/* DECORATIVE CORNERS */}

            <span className="AboutPageFour-youtubeCorner AboutPageFour-youtubeCornerOne" />

            <span className="AboutPageFour-youtubeCorner AboutPageFour-youtubeCornerTwo" />


            {/* PLAY BUTTON */}

            <button
              type="button"
              className="AboutPageFour-youtubePlay"
              onClick={handleYoutubeClick}
              aria-label="Play YouTube video"
            >

              <span className="AboutPageFour-youtubePlayOuter">

                <span className="AboutPageFour-youtubePlayInner">

                  <FaPlay />

                </span>

              </span>

            </button>


            {/* VIDEO BADGE */}

            <div className="AboutPageFour-youtubeBadge">

              <FaYoutube />

              <span>
                OUR TRAVEL STORIES
              </span>

            </div>


            {/* BOTTOM INFORMATION */}

            <div className="AboutPageFour-youtubeBottom">

              <div>

                <strong>
                  Discover Odisha
                </strong>

                <span>
                  Culture • Nature • Adventure
                </span>

              </div>


              <div className="AboutPageFour-youtubeWatch">

                <FaPlay />

                <span>
                  Watch Video
                </span>

              </div>

            </div>

          </div>

        </section>


      </div>

    </section>
  );
};


export default AboutPageFour;
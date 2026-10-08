import React, { useEffect, useState } from "react";
import {
  FaPlay,
  FaStar,
  FaQuoteLeft,
  FaChevronLeft,
  FaChevronRight,
  FaTripadvisor,
} from "react-icons/fa";

import "./AboutPageFive.css";

// =====================================================
// ADD YOUR OWN IMAGES HERE
// =====================================================

import reviewOne from "../../assets/review1.jpg";
import reviewTwo from "../../assets/review1.jpg";
import reviewThree from "../../assets/review1.jpg";
import reviewFour from "../../assets/review1.jpg";
import reviewFive from "../../assets/review1.jpg";
import reviewSix from "../../assets/review1.jpg";


// =====================================================
// REVIEW DATA
// =====================================================

const reviews = [
  {
    id: 1,
    name: "James Bonde",
    role: "GoFly Traveler",
    image: reviewOne,
    title: "Average Experience",
    rating: 4.5,
    text:
      "The tour was well-organized, and we enjoyed every bit of it. However, I wish we had more free time to explore on our own. Overall, a great experience!",
  },

  {
    id: 2,
    name: "Michael D Linda",
    role: "GoFly Traveler",
    image: reviewTwo,
    title: "Great Visitors Venue!",
    rating: 4.5,
    text:
      "Thank you so much for your work on our honeymoon. We really did have such a great time and it was everything we were hoping!",
  },

  {
    id: 3,
    name: "Amber Lashley",
    role: "GoFly Traveler",
    image: reviewThree,
    title: "Fantastic Service!",
    rating: 5,
    text:
      "We have returned from our journey and want to let you know how terrific the trip was! Everything was great. We highly recommend them. Thank you so much!",
  },

  {
    id: 4,
    name: "David Wilson",
    role: "GoFly Traveler",
    image: reviewFour,
    title: "Wonderful Journey!",
    rating: 5,
    text:
      "Everything was planned perfectly from beginning to end. The destinations, hotels and local experiences were absolutely amazing.",
  },

  {
    id: 5,
    name: "Sophia Martin",
    role: "GoFly Traveler",
    image: reviewFive,
    title: "Amazing Experience!",
    rating: 4.5,
    text:
      "The entire journey was smooth and enjoyable. Our guide was extremely helpful and made the trip even more memorable.",
  },

  {
    id: 6,
    name: "Daniel Smith",
    role: "GoFly Traveler",
    image: reviewSix,
    title: "Highly Recommended!",
    rating: 5,
    text:
      "A beautifully organized trip with excellent support throughout the journey. We will definitely travel with them again.",
  },
];


// =====================================================
// STAR COMPONENT
// =====================================================

const RatingStars = ({ rating }) => {
  return (
    <div className="AboutPageFive-rating">

      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={
            star <= Math.floor(rating)
              ? "AboutPageFive-star AboutPageFive-starActive"
              : "AboutPageFive-star"
          }
        >
          <FaStar />
        </span>
      ))}

      {rating % 1 !== 0 && (
        <span className="AboutPageFive-starHalf">
          <FaStar />
        </span>
      )}

    </div>
  );
};


// =====================================================
// MAIN COMPONENT
// =====================================================

const AboutPageFive = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const [cardsPerView, setCardsPerView] = useState(
    window.innerWidth <= 700 ? 1 : 3
  );


  // ===================================================
  // RESPONSIVE CARD COUNT
  // ===================================================

  useEffect(() => {

    const handleResize = () => {

      if (window.innerWidth <= 700) {
        setCardsPerView(1);
      } else if (window.innerWidth <= 1050) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }

    };

    handleResize();

    window.addEventListener(
      "resize",
      handleResize
    );

    return () => {
      window.removeEventListener(
        "resize",
        handleResize
      );
    };

  }, []);


  // ===================================================
  // MAX SLIDE
  // ===================================================

  const maxIndex =
    Math.max(
      0,
      reviews.length - cardsPerView
    );


  // ===================================================
  // AUTO SLIDE
  // EVERY 3 SECONDS
  // ===================================================

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrentIndex((previous) => {

        if (previous >= maxIndex) {
          return 0;
        }

        return previous + 1;

      });

    }, 3000);

    return () => {
      clearInterval(interval);
    };

  }, [maxIndex]);


  // ===================================================
  // PREVIOUS
  // ===================================================

  const handlePrevious = () => {

    setCurrentIndex((previous) => {

      if (previous <= 0) {
        return maxIndex;
      }

      return previous - 1;

    });

  };


  // ===================================================
  // NEXT
  // ===================================================

  const handleNext = () => {

    setCurrentIndex((previous) => {

      if (previous >= maxIndex) {
        return 0;
      }

      return previous + 1;

    });

  };


  // ===================================================
  // DOT CLICK
  // ===================================================

  const handleDotClick = (index) => {

    setCurrentIndex(index);

  };


  return (

    <section className="AboutPageFive">

      {/* =================================================
          BACKGROUND DECORATION
      ================================================= */}

      <div className="AboutPageFive-background">

        <div className="AboutPageFive-backgroundShape AboutPageFive-backgroundShapeOne" />

        <div className="AboutPageFive-backgroundShape AboutPageFive-backgroundShapeTwo" />

        <div className="AboutPageFive-backgroundShape AboutPageFive-backgroundShapeThree" />

        <div className="AboutPageFive-cameraDecoration">
          ◉
        </div>

      </div>


      <div className="AboutPageFive-container">


        {/* =================================================
            HEADER
        ================================================= */}

        <div className="AboutPageFive-header">

          <div className="AboutPageFive-label">

            <span className="AboutPageFive-labelLine" />

            <span>
              TRAVELER STORIES
            </span>

            <span className="AboutPageFive-labelLine" />

          </div>


          <h2 className="AboutPageFive-title">
            Hear It from Travelers
          </h2>


          <p className="AboutPageFive-subtitle">

            We go beyond just booking trips—we create
            unforgettable travel
            <br className="AboutPageFive-desktopBreak" />
            experiences that match your dreams!

          </p>

        </div>


        {/* =================================================
            REVIEWS
        ================================================= */}

        <div className="AboutPageFive-reviewWrapper">


          {/* PREVIOUS BUTTON */}

          <button
            type="button"
            className="AboutPageFive-navigation AboutPageFive-navigationPrevious"
            onClick={handlePrevious}
            aria-label="Previous reviews"
          >
            <FaChevronLeft />
          </button>


          {/* SLIDER */}

          <div className="AboutPageFive-slider">

            <div
              className="AboutPageFive-sliderTrack"
              style={{
                transform: `translateX(-${
                  currentIndex *
                  (100 / cardsPerView)
                }%)`,
              }}
            >

              {reviews.map((review, index) => (

                <article
                  key={review.id}
                  className={`
                    AboutPageFive-reviewCard
                    ${
                      index >= currentIndex &&
                      index < currentIndex + cardsPerView
                        ? "AboutPageFive-reviewCardActive"
                        : ""
                    }
                  `}
                >

                  {/* CARD TOP */}

                  <div className="AboutPageFive-reviewTop">

                    <div className="AboutPageFive-reviewUser">

                      <div className="AboutPageFive-avatarWrapper">

                        <img
                          src={review.image}
                          alt={review.name}
                          className="AboutPageFive-avatar"
                        />

                      </div>


                      <div className="AboutPageFive-userInfo">

                        <h3>
                          {review.name}
                        </h3>

                        <p>
                          {review.role}
                        </p>

                      </div>

                    </div>


                    {/* VIDEO BUTTON */}

                    <button
                      type="button"
                      className="AboutPageFive-videoButton"
                      aria-label={`Watch ${review.name}'s review`}
                    >

                      <FaPlay />

                    </button>

                  </div>


                  {/* RATING */}

                  <RatingStars
                    rating={review.rating}
                  />


                  {/* REVIEW TITLE */}

                  <h4 className="AboutPageFive-reviewTitle">
                    {review.title}
                  </h4>


                  {/* REVIEW TEXT */}

                  <p className="AboutPageFive-reviewText">
                    {review.text}
                  </p>


                  {/* QUOTE */}

                  <div className="AboutPageFive-quote">
                    <FaQuoteLeft />
                  </div>


                  {/* BOTTOM */}

                  <div className="AboutPageFive-cardBottom">

                    <span>
                      Verified Traveler
                    </span>

                    <span className="AboutPageFive-verifiedDot" />

                    <span>
                      5.0 Experience
                    </span>

                  </div>

                </article>

              ))}

            </div>

          </div>


          {/* NEXT BUTTON */}

          <button
            type="button"
            className="AboutPageFive-navigation AboutPageFive-navigationNext"
            onClick={handleNext}
            aria-label="Next reviews"
          >
            <FaChevronRight />
          </button>

        </div>


        {/* =================================================
            DOT PAGINATION
        ================================================= */}

        <div className="AboutPageFive-pagination">

          {Array.from({
            length: maxIndex + 1,
          }).map((_, index) => (

            <button
              key={index}
              type="button"
              className={`
                AboutPageFive-paginationDot
                ${
                  currentIndex === index
                    ? "AboutPageFive-paginationDotActive"
                    : ""
                }
              `}
              onClick={() =>
                handleDotClick(index)
              }
              aria-label={`Go to review slide ${index + 1}`}
            />

          ))}

        </div>


        {/* =================================================
            REVIEW PLATFORM SUMMARY
        ================================================= */}

        <div className="AboutPageFive-platforms">


          {/* TRIPADVISOR */}

          <div className="AboutPageFive-platform">

            <div className="AboutPageFive-platformLogo AboutPageFive-tripadvisorLogo">

              <FaTripadvisor />

            </div>

            <div className="AboutPageFive-platformContent">

              <strong>
                Tripadvisor
              </strong>

              <span>
                Reviews
              </span>

              <div className="AboutPageFive-smallRating">

                <span>●</span>
                <span>●</span>
                <span>●</span>
                <span>●</span>
                <span>◐</span>

              </div>

            </div>

          </div>


          {/* DIVIDER */}

          <div className="AboutPageFive-platformDivider" />


          {/* SCORE */}

          <div className="AboutPageFive-score">
            4.5
          </div>


          {/* TRUSTPILOT */}

          <div className="AboutPageFive-platform">

            <div className="AboutPageFive-platformLogo AboutPageFive-trustpilotLogo">
              ★
            </div>

            <div className="AboutPageFive-platformContent">

              <strong>
                Trustpilot
              </strong>

              <div className="AboutPageFive-trustStars">

                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>

              </div>

              <span>
                (2K reviews)
              </span>

            </div>

          </div>

        </div>


      </div>

    </section>

  );

};


export default AboutPageFive;
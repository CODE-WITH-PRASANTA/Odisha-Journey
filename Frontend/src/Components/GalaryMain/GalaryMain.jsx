import React, { useEffect, useState } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaCalendarAlt,
  FaChevronLeft,
  FaChevronRight,
  FaClock,
  FaExpand,
  FaImages,
  FaMapMarkerAlt,
  FaTimes,
} from "react-icons/fa";

import "./GalaryMain.css";

const GalaryMain = () => {
  const [activeCategory, setActiveCategory] = useState("All Photos");
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const ITEMS_PER_PAGE = 12;

  /* =====================================================
     CATEGORY DATA
  ===================================================== */

  const categories = [
    "All Photos",
    "Temples",
    "Beaches",
    "Nature",
    "Festivals",
    "Culture",
    "Wildlife",
    "Food",
  ];

  /* =====================================================
     GALLERY DATA
  ===================================================== */

  const galleryItems = [
    {
      id: 1,
      title: "Jagannath Temple, Puri",
      category: "Temples",
      location: "Puri, Odisha",
      photos: "24 Photos",
      date: "December 2024",
      image:
        "https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?auto=format&fit=crop&w=1400&q=90",
    },

    {
      id: 2,
      title: "Puri Beach",
      category: "Beaches",
      location: "Puri, Odisha",
      photos: "18 Photos",
      date: "December 2024",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=90",
    },

    {
      id: 3,
      title: "Konark Sun Temple",
      category: "Temples",
      location: "Konark, Odisha",
      photos: "16 Photos",
      date: "November 2024",
      image:
        "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fit=crop&w=1400&q=90",
    },

    {
      id: 4,
      title: "Chilika Lake",
      category: "Nature",
      location: "Chilika, Odisha",
      photos: "20 Photos",
      date: "November 2024",
      image:
        "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1400&q=90",
    },

    {
      id: 5,
      title: "Daringbadi Hills",
      category: "Nature",
      location: "Daringbadi, Odisha",
      photos: "14 Photos",
      date: "November 2024",
      image:
        "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1400&q=90",
    },

    {
      id: 6,
      title: "Waterfalls of Odisha",
      category: "Nature",
      location: "Koraput, Odisha",
      photos: "22 Photos",
      date: "October 2024",
      image:
        "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=1400&q=90",
    },

    {
      id: 7,
      title: "Rath Yatra Festival",
      category: "Festivals",
      location: "Puri, Odisha",
      photos: "19 Photos",
      date: "July 2024",
      image:
        "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1400&q=90",
    },

    {
      id: 8,
      title: "Tribal Culture",
      category: "Culture",
      location: "Koraput, Odisha",
      photos: "15 Photos",
      date: "October 2024",
      image:
        "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?auto=format&fit=crop&w=1400&q=90",
    },

    {
      id: 9,
      title: "Udayagiri & Khandagiri",
      category: "Temples",
      location: "Bhubaneswar, Odisha",
      photos: "12 Photos",
      date: "October 2024",
      image:
        "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1400&q=90",
    },

    {
      id: 10,
      title: "Simlipal Wildlife Sanctuary",
      category: "Wildlife",
      location: "Mayurbhanj, Odisha",
      photos: "17 Photos",
      date: "September 2024",
      image:
        "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=1400&q=90",
    },

    {
      id: 11,
      title: "Authentic Odia Cuisine",
      category: "Food",
      location: "Odisha",
      photos: "13 Photos",
      date: "September 2024",
      image:
        "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1400&q=90",
    },

    {
      id: 12,
      title: "Gopalpur Beach",
      category: "Beaches",
      location: "Gopalpur, Odisha",
      photos: "11 Photos",
      date: "September 2024",
      image:
        "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=1400&q=90",
    },

    {
      id: 13,
      title: "Barabati Fort",
      category: "Culture",
      location: "Cuttack, Odisha",
      photos: "10 Photos",
      date: "August 2024",
      image:
        "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1400&q=90",
    },

    {
      id: 14,
      title: "Nandankanan Wildlife",
      category: "Wildlife",
      location: "Bhubaneswar, Odisha",
      photos: "21 Photos",
      date: "August 2024",
      image:
        "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1400&q=90",
    },

    {
      id: 15,
      title: "Odisha Folk Festival",
      category: "Festivals",
      location: "Bhubaneswar, Odisha",
      photos: "18 Photos",
      date: "August 2024",
      image:
        "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1400&q=90",
    },

    {
      id: 16,
      title: "Gahirmatha Coast",
      category: "Nature",
      location: "Kendrapara, Odisha",
      photos: "14 Photos",
      date: "July 2024",
      image:
        "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1400&q=90",
    },
  ];

  /* =====================================================
     FILTER DATA
  ===================================================== */

  const filteredItems =
    activeCategory === "All Photos"
      ? galleryItems
      : galleryItems.filter(
          (item) =>
            item.category === activeCategory
        );

  /* =====================================================
     PAGINATION
  ===================================================== */

  const totalPages = Math.ceil(
    filteredItems.length / ITEMS_PER_PAGE
  );

  const startIndex =
    (currentPage - 1) * ITEMS_PER_PAGE;

  const currentItems = filteredItems.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  /* =====================================================
     CATEGORY CHANGE
  ===================================================== */

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentPage(1);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* =====================================================
     OPEN IMAGE
  ===================================================== */

  const handleOpenImage = (item) => {
    const index = filteredItems.findIndex(
      (galleryItem) =>
        galleryItem.id === item.id
    );

    setCurrentImageIndex(index);
    setSelectedImage(item);

    document.body.style.overflow = "hidden";
  };

  /* =====================================================
     CLOSE IMAGE
  ===================================================== */

  const handleCloseImage = () => {
    setSelectedImage(null);
    document.body.style.overflow = "";
  };

  /* =====================================================
     NEXT IMAGE
  ===================================================== */

  const handleNextImage = () => {
    const nextIndex =
      (currentImageIndex + 1) %
      filteredItems.length;

    setCurrentImageIndex(nextIndex);
    setSelectedImage(
      filteredItems[nextIndex]
    );
  };

  /* =====================================================
     PREVIOUS IMAGE
  ===================================================== */

  const handlePreviousImage = () => {
    const previousIndex =
      (currentImageIndex -
        1 +
        filteredItems.length) %
      filteredItems.length;

    setCurrentImageIndex(previousIndex);
    setSelectedImage(
      filteredItems[previousIndex]
    );
  };

  /* =====================================================
     KEYBOARD SUPPORT
  ===================================================== */

  useEffect(() => {
    const handleKeyboard = (event) => {
      if (!selectedImage) return;

      if (event.key === "Escape") {
        handleCloseImage();
      }

      if (event.key === "ArrowRight") {
        handleNextImage();
      }

      if (event.key === "ArrowLeft") {
        handlePreviousImage();
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyboard
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyboard
      );
    };
  }, [
    selectedImage,
    currentImageIndex,
    filteredItems,
  ]);

  /* =====================================================
     CLEANUP SCROLL
  ===================================================== */

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  /* =====================================================
     PAGE CHANGE
  ===================================================== */

  const handlePageChange = (page) => {
    if (
      page < 1 ||
      page > totalPages
    ) {
      return;
    }

    setCurrentPage(page);

    setTimeout(() => {
      const gallerySection =
        document.querySelector(
          ".GalaryMain"
        );

      if (gallerySection) {
        gallerySection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 50);
  };

  return (
    <section className="GalaryMain">

      {/* =================================================
          HEADER
      ================================================= */}

      <div className="GalaryMain-header">

        <div className="GalaryMain-label">
          <span></span>
          PHOTO GALLERY
        </div>

        <h1>
          Explore the
          <span> Beauty of Odisha</span>
        </h1>

        <p>
          A visual journey through Odisha's
          stunning landscapes, ancient temples,
          vibrant festivals and rich culture.
        </p>

      </div>


      {/* =================================================
          CATEGORY FILTER
      ================================================= */}

      <div className="GalaryMain-categoryWrapper">

        <div className="GalaryMain-categoryList">

          {categories.map(
            (category) => (

              <button
                key={category}
                type="button"
                className={`GalaryMain-category ${
                  activeCategory === category
                    ? "GalaryMain-categoryActive"
                    : ""
                }`}
                onClick={() =>
                  handleCategoryChange(
                    category
                  )
                }
              >
                {category}
              </button>

            )
          )}

        </div>

      </div>


      {/* =================================================
          GALLERY GRID
      ================================================= */}

      <div className="GalaryMain-grid">

        {currentItems.map(
          (item, index) => (

            <article
              key={item.id}
              className="GalaryMain-card"
              style={{
                "--GalaryMain-delay": `${
                  index * 0.10
                }s`,
              }}
              onClick={() =>
                handleOpenImage(item)
              }
            >

              <div className="GalaryMain-imageWrapper">

                <img
                  src={item.image}
                  alt={item.title}
                  loading={
                    index < 4
                      ? "eager"
                      : "lazy"
                  }
                />

                <div className="GalaryMain-overlay"></div>


                {/* EXPAND */}

                <div className="GalaryMain-expand">
                  <FaExpand />
                </div>


                {/* BOTTOM INFORMATION */}

                <div className="GalaryMain-cardInfo">

                  <div className="GalaryMain-location">

                    <FaMapMarkerAlt />

                    <span>
                      {item.title}
                    </span>

                  </div>

                  <div className="GalaryMain-photoCount">

                    <FaImages />

                    <span>
                      {item.photos}
                    </span>

                  </div>

                </div>

              </div>

            </article>

          )
        )}

      </div>


      {/* =================================================
          EMPTY STATE
      ================================================= */}

      {currentItems.length === 0 && (

        <div className="GalaryMain-empty">

          <FaImages />

          <h3>
            No Photos Found
          </h3>

          <p>
            There are no photos available
            in this category yet.
          </p>

        </div>

      )}


      {/* =================================================
          PAGINATION
      ================================================= */}

      {totalPages > 1 && (

        <div className="GalaryMain-pagination">

          <button
            type="button"
            className="GalaryMain-paginationArrow"
            disabled={currentPage === 1}
            onClick={() =>
              handlePageChange(
                currentPage - 1
              )
            }
          >
            <FaChevronLeft />
          </button>


          <div className="GalaryMain-paginationNumbers">

            {Array.from(
              {
                length: totalPages,
              },
              (_, index) => index + 1
            ).map((page) => (

              <button
                key={page}
                type="button"
                className={`GalaryMain-paginationNumber ${
                  currentPage === page
                    ? "GalaryMain-paginationActive"
                    : ""
                }`}
                onClick={() =>
                  handlePageChange(page)
                }
              >
                {page}
              </button>

            ))}

          </div>


          <button
            type="button"
            className="GalaryMain-paginationArrow"
            disabled={
              currentPage === totalPages
            }
            onClick={() =>
              handlePageChange(
                currentPage + 1
              )
            }
          >
            <FaChevronRight />
          </button>

        </div>

      )}


      {/* =================================================
          LIGHTBOX
      ================================================= */}

      {selectedImage && (

        <div
          className="GalaryMain-lightbox"
          onClick={(event) => {

            if (
              event.target ===
              event.currentTarget
            ) {
              handleCloseImage();
            }

          }}
        >

          {/* CLOSE */}

          <button
            type="button"
            className="GalaryMain-lightboxClose"
            onClick={handleCloseImage}
            aria-label="Close image"
          >
            <FaTimes />
          </button>


          {/* PREVIOUS */}

          <button
            type="button"
            className="GalaryMain-lightboxArrow GalaryMain-lightboxPrevious"
            onClick={(event) => {
              event.stopPropagation();
              handlePreviousImage();
            }}
            aria-label="Previous image"
          >
            <FaArrowLeft />
          </button>


          {/* IMAGE CONTENT */}

          <div
            className="GalaryMain-lightboxContent"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <div className="GalaryMain-lightboxImageBox">

              <img
                src={selectedImage.image}
                alt={selectedImage.title}
              />

            </div>


            <div className="GalaryMain-lightboxDetails">

              <div>

                <div className="GalaryMain-lightboxCategory">
                  {selectedImage.category}
                </div>

                <h2>
                  {selectedImage.title}
                </h2>

                <div className="GalaryMain-lightboxMeta">

                  <span>
                    <FaMapMarkerAlt />
                    {selectedImage.location}
                  </span>

                  <span>
                    <FaCalendarAlt />
                    {selectedImage.date}
                  </span>

                  <span>
                    <FaImages />
                    {selectedImage.photos}
                  </span>

                </div>

              </div>

              <div className="GalaryMain-lightboxCounter">
                {currentImageIndex + 1}
                {" / "}
                {filteredItems.length}
              </div>

            </div>

          </div>


          {/* NEXT */}

          <button
            type="button"
            className="GalaryMain-lightboxArrow GalaryMain-lightboxNext"
            onClick={(event) => {
              event.stopPropagation();
              handleNextImage();
            }}
            aria-label="Next image"
          >
            <FaArrowRight />
          </button>

        </div>

      )}

    </section>
  );
};

export default GalaryMain;
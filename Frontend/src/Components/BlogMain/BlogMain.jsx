import React, { useMemo, useState, useEffect } from "react";
import {
  FaSearch,
  FaArrowRight,
  FaArrowLeft,
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaMountain,
  FaLandmark,
  FaUtensils,
  FaUmbrellaBeach,
  FaThLarge,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import "./BlogMain.css";

const BlogMain = () => {
  const [activeCategory, setActiveCategory] = useState("All Posts");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // 9 BLOGS PER PAGE
  const POSTS_PER_PAGE = 9;

  /* =====================================================
     CATEGORIES
  ===================================================== */

  const categories = [
    {
      name: "All Posts",
      icon: <FaThLarge />,
    },
    {
      name: "Travel Guide",
      icon: <FaMapMarkerAlt />,
    },
    {
      name: "Destinations",
      icon: <FaMountain />,
    },
    {
      name: "Culture & Heritage",
      icon: <FaLandmark />,
    },
    {
      name: "Food & Cuisine",
      icon: <FaUtensils />,
    },
    {
      name: "Festivals",
      icon: <FaCalendarAlt />,
    },
    {
      name: "Travel Tips",
      icon: <FaUmbrellaBeach />,
    },
  ];

  /* =====================================================
     BLOG DATA

     Add more blogs here.
     Pagination automatically works when
     blogs exceed 9 items.
  ===================================================== */

  const blogs = [
    {
      id: 1,
      category: "Destinations",
      date: "Dec 15, 2024",
      readTime: "6 min read",
      title:
        "A Complete Travel Guide to Puri – The Spiritual Heart of Odisha",
      description:
        "Discover the best places to visit, temple timings, beach experiences and travel tips for a memorable trip to Puri.",
      image:
        "https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?auto=format&fit=crop&w=1200&q=85",
    },

    {
      id: 2,
      category: "Culture & Heritage",
      date: "Dec 10, 2024",
      readTime: "5 min read",
      title:
        "Konark Sun Temple – A Timeless Marvel of Odisha",
      description:
        "Explore the history, architecture, interesting facts and travel tips for visiting the UNESCO World Heritage Site in Konark.",
      image:
        "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fit=crop&w=1200&q=85",
    },

    {
      id: 3,
      category: "Destinations",
      date: "Dec 5, 2024",
      readTime: "4 min read",
      title:
        "Chilika Lake – A Paradise for Nature Lovers",
      description:
        "Experience the beauty of Asia's largest brackish water lagoon, its wildlife, nearby attractions and travel tips.",
      image:
        "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=85",
    },

    {
      id: 4,
      category: "Destinations",
      date: "Nov 28, 2024",
      readTime: "5 min read",
      title:
        "Top 10 Must Visit Places in Odisha",
      description:
        "From temples to beaches, waterfalls to wildlife sanctuaries, here are the top places you should not miss in Odisha.",
      image:
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=85",
    },

    {
      id: 5,
      category: "Food & Cuisine",
      date: "Nov 20, 2024",
      readTime: "4 min read",
      title:
        "Traditional Odia Cuisine – A Taste of Authentic Odisha",
      description:
        "Explore the rich flavors, popular dishes and unique food culture of Odisha that every traveller must try.",
      image:
        "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1200&q=85",
    },

    {
      id: 6,
      category: "Festivals",
      date: "Nov 12, 2024",
      readTime: "5 min read",
      title:
        "Rath Yatra – The Grand Festival of Lord Jagannath",
      description:
        "Know the history, significance, rituals and travel tips for experiencing the world-famous Rath Yatra in Puri.",
      image:
        "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=85",
    },

    {
      id: 7,
      category: "Travel Guide",
      date: "Nov 7, 2024",
      readTime: "7 min read",
      title:
        "The Ultimate Odisha Travel Itinerary",
      description:
        "Plan an unforgettable Odisha journey with this carefully designed itinerary covering temples, beaches, culture and nature.",
      image:
        "https://images.unsplash.com/photo-1524498250077-390f9e378fc0?auto=format&fit=crop&w=1200&q=85",
    },

    {
      id: 8,
      category: "Travel Tips",
      date: "Nov 2, 2024",
      readTime: "5 min read",
      title:
        "Essential Travel Tips for Exploring Odisha",
      description:
        "Everything you need to know about the best time to visit, transport, local experiences, safety and more.",
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=85",
    },

    {
      id: 9,
      category: "Culture & Heritage",
      date: "Oct 28, 2024",
      readTime: "6 min read",
      title:
        "Discover the Rich Heritage of Odisha",
      description:
        "Explore ancient temples, traditional art, architecture and the fascinating cultural heritage of Odisha.",
      image:
        "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=85",
    },

    {
      id: 10,
      category: "Destinations",
      date: "Oct 20, 2024",
      readTime: "5 min read",
      title:
        "Daringbadi – The Kashmir of Odisha",
      description:
        "Explore the beautiful hills, forests, waterfalls and pleasant weather of Daringbadi with this complete travel guide.",
      image:
        "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=85",
    },

    {
      id: 11,
      category: "Travel Guide",
      date: "Oct 15, 2024",
      readTime: "6 min read",
      title:
        "Best Weekend Getaways From Bhubaneswar",
      description:
        "Discover beautiful destinations around Bhubaneswar that are perfect for a relaxing weekend escape.",
      image:
        "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=85",
    },

    {
      id: 12,
      category: "Food & Cuisine",
      date: "Oct 10, 2024",
      readTime: "4 min read",
      title:
        "10 Famous Odia Foods You Must Try",
      description:
        "From Dalma to Chhena Poda, explore some of the most delicious and traditional foods of Odisha.",
      image:
        "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=85",
    },

    {
      id: 13,
      category: "Travel Tips",
      date: "Oct 5, 2024",
      readTime: "5 min read",
      title:
        "Best Time to Visit Odisha",
      description:
        "Find out the ideal seasons, weather conditions and important travel tips before planning your Odisha trip.",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85",
    },

    {
      id: 14,
      category: "Festivals",
      date: "Sep 28, 2024",
      readTime: "6 min read",
      title:
        "Odisha Festivals You Should Experience",
      description:
        "Discover the colorful festivals, traditions and cultural celebrations that make Odisha special.",
      image:
        "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?auto=format&fit=crop&w=1200&q=85",
    },

    {
      id: 15,
      category: "Destinations",
      date: "Sep 20, 2024",
      readTime: "5 min read",
      title:
        "Explore the Beautiful Waterfalls of Odisha",
      description:
        "Discover some of Odisha's most beautiful waterfalls and the best ways to explore them.",
      image:
        "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=1200&q=85",
    },

    {
      id: 16,
      category: "Culture & Heritage",
      date: "Sep 15, 2024",
      readTime: "7 min read",
      title:
        "Ancient Temples That Define Odisha",
      description:
        "Take a journey through Odisha's architectural heritage and discover its magnificent ancient temples.",
      image:
        "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=85",
    },

    {
      id: 17,
      category: "Travel Guide",
      date: "Sep 8, 2024",
      readTime: "6 min read",
      title:
        "A Perfect 5-Day Odisha Travel Plan",
      description:
        "A practical five-day itinerary covering the best attractions, experiences and destinations across Odisha.",
      image:
        "https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=1200&q=85",
    },

    {
      id: 18,
      category: "Travel Tips",
      date: "Sep 1, 2024",
      readTime: "4 min read",
      title:
        "Smart Travel Tips for Your Odisha Trip",
      description:
        "Useful tips for transport, accommodation, local food, sightseeing and making your trip stress-free.",
      image:
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=85",
    },
  ];

  /* =====================================================
     FILTER BLOGS
  ===================================================== */

  const filteredBlogs = useMemo(() => {
    const search = searchTerm.toLowerCase().trim();

    return blogs.filter((blog) => {
      const categoryMatch =
        activeCategory === "All Posts" ||
        blog.category === activeCategory;

      const searchMatch =
        !search ||
        blog.title.toLowerCase().includes(search) ||
        blog.description.toLowerCase().includes(search) ||
        blog.category.toLowerCase().includes(search);

      return categoryMatch && searchMatch;
    });
  }, [activeCategory, searchTerm]);

  /* =====================================================
     TOTAL PAGES
  ===================================================== */

  const totalPages = Math.ceil(
    filteredBlogs.length / POSTS_PER_PAGE
  );

  /* =====================================================
     CURRENT PAGE DATA
  ===================================================== */

  const startIndex =
    (currentPage - 1) * POSTS_PER_PAGE;

  const endIndex =
    startIndex + POSTS_PER_PAGE;

  const currentBlogs =
    filteredBlogs.slice(
      startIndex,
      endIndex
    );

  /* =====================================================
     RESET PAGE WHEN FILTER CHANGES
  ===================================================== */

  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, searchTerm]);

  /* =====================================================
     FIX PAGE IF CURRENT PAGE EXCEEDS TOTAL
  ===================================================== */

  useEffect(() => {
    if (
      totalPages > 0 &&
      currentPage > totalPages
    ) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  /* =====================================================
     PAGINATION
  ===================================================== */

  const handlePageChange = (page) => {
    if (
      page < 1 ||
      page > totalPages ||
      page === currentPage
    ) {
      return;
    }

    setCurrentPage(page);

    setTimeout(() => {
      const blogSection =
        document.querySelector(".BlogMain");

      if (blogSection) {
        blogSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 50);
  };

  /* =====================================================
     PAGE NUMBERS
  ===================================================== */

  const pageNumbers = [];

  for (
    let page = 1;
    page <= totalPages;
    page++
  ) {
    pageNumbers.push(page);
  }

  /* =====================================================
     READ MORE
  ===================================================== */

  const handleReadMore = (blog) => {
    console.log("Selected Blog:", blog);

    // Add React Router navigation here.
    // Example:
    // navigate(`/blog/${blog.id}`);
  };

  /* =====================================================
     RESET
  ===================================================== */

  const handleReset = () => {
    setActiveCategory("All Posts");
    setSearchTerm("");
    setCurrentPage(1);
  };

  return (
    <section className="BlogMain">

      <div className="BlogMain-container">

        {/* =================================================
            CATEGORY NAVIGATION
        ================================================= */}

        <div className="BlogMain-categoryWrapper">

          <div className="BlogMain-categoryScroll">

            {categories.map((category) => (

              <button
                type="button"
                key={category.name}
                className={`BlogMain-category ${
                  activeCategory === category.name
                    ? "BlogMain-categoryActive"
                    : ""
                }`}
                onClick={() => {
                  setActiveCategory(
                    category.name
                  );
                }}
              >

                <span className="BlogMain-categoryIcon">
                  {category.icon}
                </span>

                <span className="BlogMain-categoryText">
                  {category.name}
                </span>

              </button>

            ))}

          </div>

        </div>


        {/* =================================================
            SEARCH SECTION
        ================================================= */}

        <div className="BlogMain-searchWrapper">

          <div className="BlogMain-searchInfo">

            <div className="BlogMain-sectionLabel">
              <span></span>
              FIND YOUR STORY
            </div>

            <h1>
              Explore Our
              <span> Travel Stories</span>
            </h1>

            <p>
              Discover inspiring destinations, local
              experiences, travel guides and useful tips
              for exploring Odisha.
            </p>

          </div>


          <form
            className="BlogMain-search"
            onSubmit={(e) =>
              e.preventDefault()
            }
          >

            <FaSearch className="BlogMain-searchIcon" />

            <input
              type="text"
              value={searchTerm}
              onChange={(e) =>
                setSearchTerm(e.target.value)
              }
              placeholder="Search articles, destinations, travel tips..."
              aria-label="Search blog articles"
            />

            <button type="submit">
              Search
              <FaArrowRight />
            </button>

          </form>

        </div>


        {/* =================================================
            SECTION HEADER
        ================================================= */}

        <div className="BlogMain-sectionHeader">

          <div>

            <div className="BlogMain-sectionLabel">
              <span></span>
              OUR LATEST STORIES
            </div>

            <h2>
              Latest Blog
              <span> Posts</span>
            </h2>

          </div>

          <div className="BlogMain-total">
            {filteredBlogs.length} Articles
          </div>

        </div>


        {/* =================================================
            BLOG GRID
        ================================================= */}

        {currentBlogs.length > 0 ? (

          <div className="BlogMain-grid">

            {currentBlogs.map((blog) => (

              <article
                className="BlogMain-card"
                key={blog.id}
              >

                <div className="BlogMain-cardImage">

                  <img
                    src={blog.image}
                    alt={blog.title}
                    loading="lazy"
                  />

                  <div className="BlogMain-cardCategory">
                    <FaMapMarkerAlt />
                    {blog.category}
                  </div>

                  <div className="BlogMain-imageOverlay"></div>

                </div>


                <div className="BlogMain-cardContent">

                  <div className="BlogMain-meta">

                    <span>
                      <FaCalendarAlt />
                      {blog.date}
                    </span>

                    <span>
                      <FaClock />
                      {blog.readTime}
                    </span>

                  </div>

                  <h3>
                    {blog.title}
                  </h3>

                  <p>
                    {blog.description}
                  </p>

                  <button
                    type="button"
                    className="BlogMain-readMore"
                    onClick={() =>
                      handleReadMore(blog)
                    }
                  >
                    Read Full Article

                    <FaArrowRight />

                  </button>

                </div>

              </article>

            ))}

          </div>

        ) : (

          /* =================================================
             EMPTY STATE
          ================================================= */

          <div className="BlogMain-empty">

            <div className="BlogMain-emptyIcon">
              <FaSearch />
            </div>

            <h3>
              No Articles Found
            </h3>

            <p>
              We couldn't find any articles
              matching your search.
            </p>

            <button
              type="button"
              onClick={handleReset}
            >
              View All Articles
            </button>

          </div>

        )}


        {/* =================================================
            PAGINATION
        ================================================= */}

        {totalPages > 1 && (

          <div className="BlogMain-pagination">

            {/* PREVIOUS */}

            <button
              type="button"
              className="BlogMain-paginationArrow"
              disabled={currentPage === 1}
              onClick={() =>
                handlePageChange(
                  currentPage - 1
                )
              }
              aria-label="Previous page"
            >
              <FaChevronLeft />
            </button>


            {/* PAGE NUMBERS */}

            <div className="BlogMain-paginationNumbers">

              {pageNumbers.map((page) => (

                <button
                  type="button"
                  key={page}
                  className={`BlogMain-paginationNumber ${
                    currentPage === page
                      ? "BlogMain-paginationNumberActive"
                      : ""
                  }`}
                  onClick={() =>
                    handlePageChange(page)
                  }
                  aria-current={
                    currentPage === page
                      ? "page"
                      : undefined
                  }
                >
                  {page}
                </button>

              ))}

            </div>


            {/* NEXT */}

            <button
              type="button"
              className="BlogMain-paginationArrow"
              disabled={
                currentPage === totalPages
              }
              onClick={() =>
                handlePageChange(
                  currentPage + 1
                )
              }
              aria-label="Next page"
            >
              <FaChevronRight />
            </button>

          </div>

        )}


        {/* =================================================
            PAGINATION INFO
        ================================================= */}

        {totalPages > 1 && (

          <div className="BlogMain-paginationInfo">

            Showing{" "}
            <strong>
              {startIndex + 1}
            </strong>
            {" – "}
            <strong>
              {Math.min(
                endIndex,
                filteredBlogs.length
              )}
            </strong>
            {" of "}
            <strong>
              {filteredBlogs.length}
            </strong>
            {" articles"}

          </div>

        )}

      </div>

    </section>
  );
};

export default BlogMain;
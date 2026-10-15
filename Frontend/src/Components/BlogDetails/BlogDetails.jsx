
import React, { useState } from "react";
import "./BlogDetails.css";

const BlogDetails = () => {
  const [showCallback, setShowCallback] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    travelDate: "",
    message: "",
  });
  const [formError, setFormError] = useState("");

  const phoneNumber = "919776777427";
  const whatsappNumber = "916372545244";

  const relatedArticles = [
    {
      id: 1,
      category: "TRAVEL GUIDE",
      title:
        "Exploring Golden Triangle of India: Delhi, Agra & Taj Mahal Excursions",
      time: "6 mins read",
      image:
        "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=240&q=80",
      link: "/blog/golden-triangle-india",
    },
  ];

  const updateForm = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormError("");
  };

  const handleCallbackSubmit = (event) => {
    event.preventDefault();

    const cleanPhone = formData.phone.replace(/\D/g, "");

    if (!formData.name.trim() || !formData.phone.trim()) {
      setFormError("Please enter your name and phone number.");
      return;
    }

    if (cleanPhone.length < 10 || cleanPhone.length > 15) {
      setFormError("Please enter a valid phone number.");
      return;
    }

    const message = [
      "Hello Royal Odisha Tour Travels!",
      "I would like to request a callback.",
      `Name: ${formData.name}`,
      `Phone: ${formData.phone}`,
      `Travel date: ${formData.travelDate || "Not specified"}`,
      `Requirements: ${formData.message || "Please share your tour packages."}`,
    ].join("\n");

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );

    setShowCallback(false);
    setFormData({
      name: "",
      phone: "",
      travelDate: "",
      message: "",
    });
    setFormError("");
  };

  const handleShare = async () => {
    const shareData = {
      title: "Odisha Golden Triangle Travel Guide",
      text: "Explore Puri, Konark and Bhubaneswar with Royal Odisha Tour Travels.",
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(shareData.url);
        window.alert("Article link copied successfully!");
      }
    } catch (error) {
      if (error.name !== "AbortError") {
        window.prompt("Copy article link:", shareData.url);
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="BlogDetails">
      <div className="BlogDetails__container">
        {/* ARTICLE */}
        <main className="BlogDetails__main">
          <article className="BlogDetails__article">
            <div className="BlogDetails__intro">
              <p className="BlogDetails__introText">
                Explore Puri, Konark, and Bhubaneswar — the three pillars of
                heritage, spirituality, and beaches in Odisha.
              </p>
            </div>

            <div className="BlogDetails__articleContent">
              <p className="BlogDetails__paragraph">
                Odisha’s Golden Triangle, comprising Bhubaneswar, Puri, and
                Konark, presents a brilliant tapestry of heritage, architecture,
                and spirituality. Visiting the stunning 11th-century Lingaraj
                Temple in Bhubaneswar is only the first step. Afterwards, a
                drive through the beautiful Marine Drive brings you to Puri
                Beach, and finally to the UNESCO World Heritage site, the Konark
                Sun Temple.
              </p>
            </div>

            {/* AUTHOR */}
            <div className="BlogDetails__author">
              <div className="BlogDetails__authorAvatar" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="12" cy="7" r="4" />
                  <path d="M4.5 21v-2a7.5 7.5 0 0 1 15 0v2" />
                </svg>
              </div>

              <div className="BlogDetails__authorInfo">
                <div className="BlogDetails__authorHeading">
                  <h3>Admin User</h3>
                  <span className="BlogDetails__verified">
                    ✓ VERIFIED HERITAGE AUTHOR
                  </span>
                </div>

                <p>
                  Certified destination expert at Royal Odisha Tour Travels.
                  Specializes in Kalinga temple architecture, wildlife
                  eco-safaris, and customized private cab itineraries across
                  Odisha &amp; India.
                </p>
              </div>
            </div>

            {/* TOUR BANNER */}
            <div className="BlogDetails__tour">
              <div className="BlogDetails__tourContent">
                <span className="BlogDetails__tourBadge">
                  <span aria-hidden="true">🚀</span> FEATURED TOUR PACKAGE
                </span>

                <h2>Want to Experience This Destination in Luxury?</h2>

                <p>
                  Book our all-inclusive private chauffeur cab packages with
                  5-star stays and VIP darshan passes.
                </p>
              </div>

              <a
                className="BlogDetails__tourButton"
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  "Hello! I would like to explore your premium Odisha tour packages."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                EXPLORE PACKAGES <span>→</span>
              </a>
            </div>

            {/* TAGS */}
            <div className="BlogDetails__tags">
              <span className="BlogDetails__tagsLabel">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8Z" />
                  <circle cx="8" cy="8" r="1" />
                </svg>
                Tags:
              </span>

              <a href="/blog?tag=Puri">#Puri</a>
              <a href="/blog?tag=Konark">#Konark</a>
              <a href="/blog?tag=Bhubaneswar">#Bhubaneswar</a>
            </div>

            {/* SHARE */}
            <div className="BlogDetails__share">
              <p>SHARE THIS STORY WITH FRIENDS</p>

              <button
                className="BlogDetails__shareButton"
                type="button"
                onClick={handleShare}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="18" cy="5" r="3" />
                  <circle cx="6" cy="12" r="3" />
                  <circle cx="18" cy="19" r="3" />
                  <path d="m8.7 10.5 6.6-4M8.7 13.5l6.6 4" />
                </svg>
                SHARE ARTICLE
              </button>
            </div>
          </article>
        </main>

        {/* SIDEBAR */}
        <aside className="BlogDetails__sidebar">
          {/* Only the visit card is sticky */}
          <div className="BlogDetails__visitCard">
            <div className="BlogDetails__visitIcon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21V5.5Z" />
                <path d="M4 18.5A2.5 2.5 0 0 1 6.5 16H20" />
              </svg>
            </div>

            <span className="BlogDetails__visitEyebrow">
              PLAN YOUR VISIT
            </span>

            <h2>Ready to Experience Odisha?</h2>

            <p>
              Our travel experts will craft the perfect private cab itinerary
              based on your preferred dates &amp; budget.
            </p>

            <a
              className="BlogDetails__callButton"
              href={`tel:+${phoneNumber}`}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.11L8.1 9.9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.58 2.8.7A2 2 0 0 1 22 16.92Z" />
              </svg>
              CALL +91 637 254 5244
            </a>

            <button
              className="BlogDetails__callbackButton"
              type="button"
              onClick={() => setShowCallback(true)}
            >
              SEND CALLBACK REQUEST
            </button>
          </div>

          {/* RELATED ARTICLES SCROLL NORMALLY */}
          <div className="BlogDetails__related">
            <h3>RELATED ARTICLES</h3>

            {relatedArticles.map((article) => (
              <a
                className="BlogDetails__relatedCard"
                href={article.link}
                key={article.id}
              >
                <img src={article.image} alt="Taj Mahal travel destination" />

                <div className="BlogDetails__relatedInfo">
                  <span>{article.category}</span>
                  <h4>{article.title}</h4>
                  <p>{article.time}</p>
                </div>
              </a>
            ))}

            <a className="BlogDetails__browseButton" href="/blog">
              <span>→</span> BROWSE ALL ARTICLES
            </a>
          </div>
        </aside>
      </div>  
    </section>
  );
};

export default BlogDetails;


import React, { useMemo, useState } from "react";
import "./HotelMain.css";

const hotelImages = {
  resort:
    "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=900&q=85",
  luxury:
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=85",
  pool:
    "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?auto=format&fit=crop&w=900&q=85",
  room:
    "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=900&q=85",
  bedroom:
    "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=900&q=85",
  beach:
    "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=900&q=85",
  modern:
    "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=900&q=85",
  nature:
    "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=900&q=85",
  ocean:
    "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=900&q=85",
  cottage:
    "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=900&q=85",
  hotel:
    "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?auto=format&fit=crop&w=900&q=85",
  interior:
    "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=900&q=85",
};

const hotels = [
  {
    id: 1, name: "Trident, Bhubaneswar", location: "Bhubaneswar",
    price: 9500, rating: 5, category: "Luxury", image: hotelImages.luxury,
    description: "Luxury business hotel with a beautiful pool, spa, fine dining and elegant rooms.",
    amenities: ["WiFi", "Pool", "Spa", "Restaurant", "Gym", "Parking"],
  },
  {
    id: 2, name: "MAYFAIR Convention", location: "Bhubaneswar",
    price: 8500, rating: 5, category: "Luxury", image: hotelImages.resort,
    description: "Premium hospitality with spacious rooms, landscaped grounds and exceptional dining.",
    amenities: ["WiFi", "Pool", "Gym", "Restaurant", "Parking"],
  },
  {
    id: 3, name: "Welcomhotel by ITC Hotels", location: "Bhubaneswar",
    price: 8900, rating: 5, category: "Luxury", image: hotelImages.pool,
    description: "Upscale rooms and refined hospitality for business and leisure travellers.",
    amenities: ["WiFi", "Pool", "Gym", "Restaurant", "Parking", "Spa"],
  },
  {
    id: 4, name: "Vivanta Bhubaneswar, DN Square", location: "Bhubaneswar",
    price: 9200, rating: 5, category: "Luxury", image: hotelImages.cottage,
    description: "Contemporary luxury with stylish rooms, dining and excellent city connectivity.",
    amenities: ["WiFi", "Pool", "Gym", "Restaurant", "Parking", "Spa"],
  },
  {
    id: 5, name: "Swosti Premium", location: "Bhubaneswar",
    price: 7500, rating: 5, category: "Luxury", image: hotelImages.modern,
    description: "A popular upscale stay with banquet facilities, a pool and premium services.",
    amenities: ["WiFi", "Pool", "Gym", "Restaurant", "Parking"],
  },
  {
    id: 6, name: "The Crown - IHCL SeleQtions", location: "Bhubaneswar",
    price: 5800, rating: 4, category: "Premium", image: hotelImages.luxury,
    description: "Comfortable boutique-style hospitality with excellent dining and modern rooms.",
    amenities: ["WiFi", "Pool", "Restaurant", "Parking", "Gym"],
  },
  {
    id: 7, name: "Lemon Tree Premier", location: "Bhubaneswar",
    price: 5200, rating: 4, category: "Premium", image: hotelImages.bedroom,
    description: "Modern business accommodation with stylish rooms, fitness facilities and dining.",
    amenities: ["WiFi", "Pool", "Gym", "Restaurant", "Parking"],
  },
  {
    id: 8, name: "Empires Hotel", location: "Bhubaneswar",
    price: 4100, rating: 4, category: "Premium", image: hotelImages.cottage,
    description: "A comfortable city stay with well-appointed rooms and multiple dining options.",
    amenities: ["WiFi", "Pool", "Gym", "Restaurant", "Parking"],
  },
  {
    id: 9, name: "IRA by Orchid", location: "Bhubaneswar",
    price: 3900, rating: 4, category: "Premium", image: hotelImages.beach,
    description: "Contemporary accommodation for business travellers and families.",
    amenities: ["WiFi", "Restaurant", "Parking"],
  },
  {
    id: 10, name: "Hotel New Marrion", location: "Bhubaneswar",
    price: 4400, rating: 4, category: "Premium", image: hotelImages.room,
    description: "Business-friendly rooms, convenient city access and attentive hospitality.",
    amenities: ["WiFi", "Pool", "Gym", "Restaurant", "Parking"],
  },
  {
    id: 11, name: "Swosti Grand", location: "Bhubaneswar",
    price: 4200, rating: 4, category: "Premium", image: hotelImages.nature,
    description: "Convenient accommodation for visitors exploring the city and nearby attractions.",
    amenities: ["WiFi", "Restaurant", "Parking"],
  },
  {
    id: 12, name: "LYFE Hotels", location: "Bhubaneswar",
    price: 9800, rating: 5, category: "Luxury", image: hotelImages.interior,
    description: "An upscale contemporary stay with premium rooms, spa facilities and fine dining.",
    amenities: ["WiFi", "Pool", "Spa", "Gym", "Restaurant", "Parking"],
  },
  {
    id: 13, name: "Ginger Bhubaneswar", location: "Bhubaneswar",
    price: 2600, rating: 3, category: "Budget", image: hotelImages.beach,
    description: "Smart, practical accommodation with clean rooms and essential modern comforts.",
    amenities: ["WiFi", "Parking", "Restaurant"],
  },
  {
    id: 14, name: "Hotel Crystal Crown", location: "Bhubaneswar",
    price: 2200, rating: 3, category: "Standard", image: hotelImages.interior,
    description: "An affordable city hotel offering comfortable rooms and welcoming service.",
    amenities: ["WiFi", "Parking", "Restaurant"],
  },
  {
    id: 15, name: "Corporate Habitat", location: "Bhubaneswar",
    price: 1900, rating: 2, category: "Budget", image: hotelImages.ocean,
    description: "A practical guest-house style stay for business trips and short visits.",
    amenities: ["WiFi", "Parking"],
  },
  {
    id: 16, name: "MAYFAIR Heritage", location: "Puri",
    price: 9500, rating: 5, category: "Luxury", image: hotelImages.cottage,
    description: "An elegant coastal resort for relaxed beach holidays and memorable family stays.",
    amenities: ["WiFi", "Pool", "Spa", "Restaurant", "Gym", "Parking"],
  },
  {
    id: 17, name: "Sterling Puri", location: "Puri",
    price: 9800, rating: 5, category: "Luxury", image: hotelImages.resort,
    description: "A relaxing resort experience with modern comforts and coastal holiday appeal.",
    amenities: ["WiFi", "Pool", "Restaurant", "Parking", "Spa"],
  },
  {
    id: 18, name: "Toshali Sands", location: "Puri",
    price: 9000, rating: 4, category: "Luxury", image: hotelImages.bedroom,
    description: "A resort-style escape with leisure facilities and spacious guest accommodation.",
    amenities: ["WiFi", "Pool", "Gym", "Restaurant", "Parking"],
  },
  {
    id: 19, name: "Hotel Sonar Bangla", location: "Puri",
    price: 6200, rating: 4, category: "Premium", image: hotelImages.ocean,
    description: "A coastal stay suited to travellers seeking convenient beach access.",
    amenities: ["WiFi", "Restaurant", "Parking"],
  },
  {
    id: 20, name: "Hotel Holiday Resort", location: "Puri",
    price: 5400, rating: 4, category: "Premium", image: hotelImages.pool,
    description: "Comfortable holiday accommodation with leisure facilities for families.",
    amenities: ["WiFi", "Pool", "Restaurant", "Parking"],
  },
  {
    id: 21, name: "Hotel Golden Tree", location: "Puri",
    price: 3500, rating: 3, category: "Standard", image: hotelImages.room,
    description: "A convenient option for pilgrims and travellers visiting Puri.",
    amenities: ["WiFi", "Restaurant", "Parking"],
  },
  {
    id: 22, name: "OTDC Yatri Nivas", location: "Konark",
    price: 1900, rating: 3, category: "Standard", image: hotelImages.bedroom,
    description: "A simple base for discovering Konark and the nearby coastal attractions.",
    amenities: ["WiFi", "Restaurant", "Parking"],
  },
  {
    id: 23, name: "Lotus Eco Beach Resort", location: "Konark",
    price: 5800, rating: 4, category: "Premium", image: hotelImages.beach,
    description: "A relaxed beachside escape with nature-inspired surroundings.",
    amenities: ["WiFi", "Pool", "Restaurant", "Parking"],
  },
  {
    id: 24, name: "Eco Retreat Konark", location: "Konark",
    price: 8500, rating: 5, category: "Luxury", image: hotelImages.cottage,
    description: "A seasonal-style glamping experience inspired by coastal Odisha.",
    amenities: ["WiFi", "Restaurant", "Parking"],
  },
  {
    id: 25, name: "Swosti Chilika Resort", location: "Chilika Lake",
    price: 7200, rating: 4, category: "Premium", image: hotelImages.nature,
    description: "A peaceful retreat for exploring Chilika Lake and its natural beauty.",
    amenities: ["WiFi", "Pool", "Restaurant", "Parking"],
  },
  {
    id: 26, name: "OTDC Panthanivas Barkul", location: "Chilika Lake",
    price: 2800, rating: 3, category: "Standard", image: hotelImages.ocean,
    description: "A practical lakeside base for nature trips and birdwatching excursions.",
    amenities: ["WiFi", "Restaurant", "Parking"],
  },
  {
    id: 27, name: "Daringbadi Nature Retreat", location: "Daringbadi Hills",
    price: 4200, rating: 4, category: "Premium", image: hotelImages.nature,
    description: "A nature-inspired stay for enjoying the hills, forests and cool climate.",
    amenities: ["WiFi", "Restaurant", "Parking"],
  },
  {
    id: 28, name: "Hill View Resort", location: "Daringbadi Hills",
    price: 2500, rating: 3, category: "Budget", image: hotelImages.cottage,
    description: "A relaxed and affordable base for exploring the Daringbadi region.",
    amenities: ["WiFi", "Restaurant", "Parking"],
  },
  {
    id: 29, name: "Gopalpur Palm Resort", location: "Gopalpur Beach",
    price: 6100, rating: 4, category: "Premium", image: hotelImages.beach,
    description: "A coastal resort for beach walks, restful evenings and family holidays.",
    amenities: ["WiFi", "Pool", "Restaurant", "Parking"],
  },
  {
    id: 30, name: "Mayfair Palm Beach Resort", location: "Gopalpur Beach",
    price: 9200, rating: 5, category: "Luxury", image: hotelImages.resort,
    description: "Upscale beachside hospitality with relaxing surroundings and premium services.",
    amenities: ["WiFi", "Pool", "Spa", "Restaurant", "Parking"],
  },
  {
    id: 31, name: "Hotel M N International", location: "Rourkela",
    price: 2400, rating: 3, category: "Standard", image: hotelImages.interior,
    description: "Convenient mid-range accommodation near commercial areas and business hubs.",
    amenities: ["WiFi", "Restaurant", "Parking"],
  },
  {
    id: 32, name: "Hotel Dipti", location: "Rourkela",
    price: 1900, rating: 3, category: "Standard", image: hotelImages.nature,
    description: "An affordable stay with essential facilities for business and leisure visits.",
    amenities: ["WiFi", "Restaurant", "Parking"],
  },
];

const locations = [
  "All Locations",
  "Puri",
  "Bhubaneswar",
  "Konark",
  "Chilika Lake",
  "Daringbadi Hills",
  "Gopalpur Beach",
  "Rourkela",
];

const categories = [
  "All Stays",
  "Budget Stays",
  "Standard Stays",
  "Premium Stays",
  "Luxury Stays",
];

const categoryValue = {
  "All Stays": "All",
  "Budget Stays": "Budget",
  "Standard Stays": "Standard",
  "Premium Stays": "Premium",
  "Luxury Stays": "Luxury",
};

const amenityIcons = {
  WiFi: "⌁",
  Pool: "🏊",
  Spa: "♨",
  Restaurant: "☕",
  Gym: "🏋",
  Parking: "🚘",
};

const formatPrice = (price) =>
  `₹${Number(price).toLocaleString("en-IN")}`;

function StarRating({ rating }) {
  return (
    <div
      className="hm-stars"
      aria-label={`${rating} out of 5 stars`}
      title={`${rating} star rating`}
    >
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star} className={star <= rating ? "is-filled" : ""}>
          ★
        </span>
      ))}
    </div>
  );
}

const HotelMain = () => {
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [maxPrice, setMaxPrice] = useState(10000);
  const [minRating, setMinRating] = useState(0);
  const [activeCategory, setActiveCategory] = useState("All Stays");
  const [visibleCount, setVisibleCount] = useState(12);
  const [bookingHotel, setBookingHotel] = useState(null);
  const [booking, setBooking] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: "2",
  });
  const [bookingMessage, setBookingMessage] = useState("");

  const filteredHotels = useMemo(() => {
    return hotels.filter((hotel) => {
      const matchesLocation =
        selectedLocation === "All Locations" ||
        hotel.location === selectedLocation;

      const matchesPrice = hotel.price <= maxPrice;
      const matchesRating = hotel.rating >= minRating;
      const matchesCategory =
        activeCategory === "All Stays" ||
        hotel.category === categoryValue[activeCategory];

      return (
        matchesLocation &&
        matchesPrice &&
        matchesRating &&
        matchesCategory
      );
    });
  }, [selectedLocation, maxPrice, minRating, activeCategory]);

  const visibleHotels = filteredHotels.slice(0, visibleCount);

  const resetFilters = () => {
    setSelectedLocation("All Locations");
    setMaxPrice(10000);
    setMinRating(0);
    setActiveCategory("All Stays");
    setVisibleCount(12);
  };

  const changeLocation = (event) => {
    setSelectedLocation(event.target.value);
    setVisibleCount(12);
  };

  const changePrice = (event) => {
    setMaxPrice(Number(event.target.value));
    setVisibleCount(12);
  };

  const changeRating = (event) => {
    setMinRating(Number(event.target.value));
    setVisibleCount(12);
  };

  const changeCategory = (category) => {
    setActiveCategory(category);
    setVisibleCount(12);
  };

  const openBooking = (hotel) => {
    setBookingHotel(hotel);
    setBookingMessage("");
    setBooking({
      name: "",
      email: "",
      phone: "",
      checkIn: "",
      checkOut: "",
      guests: "2",
    });
  };

  const closeBooking = () => {
    setBookingHotel(null);
    setBookingMessage("");
  };

  const handleBookingSubmit = (event) => {
    event.preventDefault();

    if (booking.checkOut <= booking.checkIn) {
      setBookingMessage("Check-out must be after the check-in date.");
      return;
    }

    const bookingDetails = {
      ...booking,
      hotel: bookingHotel.name,
      location: bookingHotel.location,
      pricePerNight: bookingHotel.price,
    };

    // Demo behaviour: displays the booking request.
    // Connect your backend/API here to save real reservations.
    console.log("Hotel booking request:", bookingDetails);
    setBookingMessage(
      "Your booking request is ready! Connect the booking API to confirm your reservation."
    );
  };

  const today = new Date();
  const todayString = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0"),
  ].join("-");

  const minimumCheckout = booking.checkIn
    ? booking.checkIn
    : todayString;

  return (
    <main className="hm-page">
      <section className="hm-container">
        <header className="hm-heading">
          <span className="hm-eyebrow">
            <span className="hm-eyebrow-line" />
            COMFORTABLE STAYS
          </span>

          <h1>Hotels &amp; Resorts in Odisha</h1>

          <p>
            We partner with handpicked standard, premium, and luxury
            properties across Odisha to deliver comfortable stays at
            guaranteed best rates.
          </p>

          <div className="hm-heading-accent" />
        </header>

        <section className="hm-filter-panel" aria-label="Hotel filters">
          <div className="hm-filter-heading">
            <span className="hm-filter-icon" aria-hidden="true">⌕</span>
            <h2>FILTER STAYS</h2>
            <span className="hm-result-count">
              {filteredHotels.length} properties
            </span>
          </div>

          <div className="hm-filter-grid">
            <div className="hm-filter-field">
              <label htmlFor="hm-location">SELECT LOCATION</label>
              <div className="hm-select-wrap">
                <span className="hm-location-icon" aria-hidden="true">⌖</span>
                <select
                  id="hm-location"
                  value={selectedLocation}
                  onChange={changeLocation}
                >
                  {locations.map((location) => (
                    <option key={location} value={location}>
                      {location}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="hm-filter-field hm-price-field">
              <div className="hm-label-row">
                <label htmlFor="hm-price">MAX PRICE/NIGHT</label>
                <output htmlFor="hm-price" className="hm-price-value">
                  {formatPrice(maxPrice)}
                </output>
              </div>

              <input
                id="hm-price"
                className="hm-price-range"
                type="range"
                min="1000"
                max="10000"
                step="100"
                value={maxPrice}
                onChange={changePrice}
                style={{
                  "--hm-range-progress": `${((maxPrice - 1000) / 9000) * 100}%`,
                }}
              />

              <div className="hm-range-labels">
                <span>₹1,000</span>
                <span>₹10,000</span>
              </div>
            </div>

            <div className="hm-filter-field">
              <label htmlFor="hm-rating">MINIMUM RATING</label>
              <div className="hm-select-wrap">
                <select
                  id="hm-rating"
                  value={minRating}
                  onChange={changeRating}
                >
                  <option value={0}>All Star Ratings</option>
                  <option value={5}>5 Star Luxury only</option>
                  <option value={4}>4 Star &amp; Above</option>
                  <option value={3}>3 Star &amp; Above</option>
                  <option value={2}>2 Star &amp; Above</option>
                </select>
              </div>
            </div>

            <button
              className="hm-reset-button"
              type="button"
              onClick={resetFilters}
            >
              <span aria-hidden="true">↻</span> RESET FILTERS
            </button>
          </div>
        </section>

        <nav className="hm-category-tabs" aria-label="Stay categories">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`hm-category-tab ${
                activeCategory === category ? "active" : ""
              }`}
              onClick={() => changeCategory(category)}
              aria-pressed={activeCategory === category}
            >
              {category}
            </button>
          ))}
        </nav>

        {filteredHotels.length > 0 ? (
          <>
            <section className="hm-hotel-grid" aria-label="Available hotels">
              {visibleHotels.map((hotel) => (
                <article className="hm-hotel-card" key={hotel.id}>
                  <div className="hm-card-image-wrap">
                    <img
                      className="hm-card-image"
                      src={hotel.image}
                      alt={hotel.name}
                      loading="lazy"
                    />

                    <span className="hm-category-badge">
                      {hotel.category}
                    </span>

                    <span className="hm-price-badge">
                      {formatPrice(hotel.price)}
                      <small>/night</small>
                    </span>

                    <div className="hm-image-overlay" />
                  </div>

                  <div className="hm-card-content">
                    <h3 className="hm-hotel-name" title={hotel.name}>
                      {hotel.name}
                    </h3>

                    <p className="hm-hotel-location">
                      <span aria-hidden="true">⌖</span>
                      {hotel.location}
                    </p>

                    <StarRating rating={hotel.rating} />

                    <p className="hm-hotel-description">
                      {hotel.description}
                    </p>

                    <div
                      className="hm-amenities"
                      aria-label="Hotel amenities"
                    >
                      {hotel.amenities.map((amenity) => (
                        <span className="hm-amenity" key={amenity}>
                          <span aria-hidden="true">
                            {amenityIcons[amenity]}
                          </span>
                          {amenity}
                        </span>
                      ))}
                    </div>

                    <button
                      className="hm-book-button"
                      type="button"
                      onClick={() => openBooking(hotel)}
                    >
                      BOOK ROOM
                      <span aria-hidden="true">↗</span>
                    </button>
                  </div>
                </article>
              ))}
            </section>

            {visibleCount < filteredHotels.length && (
              <div className="hm-load-more-wrap">
                <button
                  type="button"
                  className="hm-load-more"
                  onClick={() =>
                    setVisibleCount((count) => count + 8)
                  }
                >
                  LOAD MORE HOTELS
                  <span aria-hidden="true"> ↓</span>
                </button>
                <p>
                  Showing {visibleHotels.length} of {filteredHotels.length} stays
                </p>
              </div>
            )}

            {visibleCount >= filteredHotels.length && (
              <p className="hm-showing-all">
                Showing all {filteredHotels.length} available stays
              </p>
            )}
          </>
        ) : (
          <div className="hm-empty-state">
            <span className="hm-empty-icon" aria-hidden="true">⌕</span>
            <h3>No stays match your filters</h3>
            <p>
              Try increasing your maximum price or choosing a different
              location, rating, or category.
            </p>
            <button
              className="hm-reset-button hm-empty-reset"
              type="button"
              onClick={resetFilters}
            >
              RESET ALL FILTERS
            </button>
          </div>
        )}

      </section>

      {bookingHotel && (
        <div
          className="hm-modal-backdrop"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeBooking();
          }}
        >
          <section
            className="hm-booking-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="hm-booking-title"
          >
            <div className="hm-modal-header">
              <div>
                <span className="hm-modal-eyebrow">PLAN YOUR STAY</span>
                <h2 id="hm-booking-title">Book your room</h2>
              </div>
              <button
                type="button"
                className="hm-modal-close"
                aria-label="Close booking form"
                onClick={closeBooking}
              >
                ×
              </button>
            </div>

            <div className="hm-modal-hotel">
              <img src={bookingHotel.image} alt="" />
              <div>
                <h3>{bookingHotel.name}</h3>
                <p>⌖ {bookingHotel.location}</p>
                <strong>
                  {formatPrice(bookingHotel.price)}
                  <small> / night</small>
                </strong>
              </div>
            </div>

            <form className="hm-booking-form" onSubmit={handleBookingSubmit}>
              <div className="hm-form-field">
                <label htmlFor="hm-book-name">Full name</label>
                <input
                  id="hm-book-name"
                  type="text"
                  placeholder="Enter your full name"
                  autoComplete="name"
                  value={booking.name}
                  onChange={(event) =>
                    setBooking({ ...booking, name: event.target.value })
                  }
                  required
                />
              </div>

              <div className="hm-form-row">
                <div className="hm-form-field">
                  <label htmlFor="hm-book-email">Email address</label>
                  <input
                    id="hm-book-email"
                    type="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    value={booking.email}
                    onChange={(event) =>
                      setBooking({ ...booking, email: event.target.value })
                    }
                    required
                  />
                </div>

                <div className="hm-form-field">
                  <label htmlFor="hm-book-phone">Phone number</label>
                  <input
                    id="hm-book-phone"
                    type="tel"
                    placeholder="10-digit mobile"
                    autoComplete="tel"
                    pattern="[0-9]{10}"
                    maxLength={10}
                    value={booking.phone}
                    onChange={(event) =>
                      setBooking({
                        ...booking,
                        phone: event.target.value.replace(/\D/g, "").slice(0, 10),
                      })
                    }
                    required
                  />
                </div>
              </div>

              <div className="hm-form-row">
                <div className="hm-form-field">
                  <label htmlFor="hm-check-in">Check-in</label>
                  <input
                    id="hm-check-in"
                    type="date"
                    min={todayString}
                    value={booking.checkIn}
                    onChange={(event) =>
                      setBooking({
                        ...booking,
                        checkIn: event.target.value,
                        checkOut:
                          booking.checkOut <= event.target.value
                            ? ""
                            : booking.checkOut,
                      })
                    }
                    required
                  />
                </div>

                <div className="hm-form-field">
                  <label htmlFor="hm-check-out">Check-out</label>
                  <input
                    id="hm-check-out"
                    type="date"
                    min={minimumCheckout}
                    value={booking.checkOut}
                    onChange={(event) =>
                      setBooking({ ...booking, checkOut: event.target.value })
                    }
                    required
                  />
                </div>
              </div>

              <div className="hm-form-field">
                <label htmlFor="hm-guests">Number of guests</label>
                <select
                  id="hm-guests"
                  value={booking.guests}
                  onChange={(event) =>
                    setBooking({ ...booking, guests: event.target.value })
                  }
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5+">5+ Guests</option>
                </select>
              </div>

              {bookingMessage && (
                <p
                  className={`hm-booking-message ${
                    bookingMessage.startsWith("Your booking")
                      ? "success"
                      : "error"
                  }`}
                  role="status"
                >
                  {bookingMessage}
                </p>
              )}

              <button type="submit" className="hm-booking-submit">
                SUBMIT BOOKING REQUEST <span aria-hidden="true">→</span>
              </button>
              <p className="hm-booking-note">
                This demo collects a request locally. A connected booking API
                is needed to confirm and save reservations.
              </p>
            </form>
          </section>
        </div>
      )}
    </main>
  );
};

export default HotelMain;

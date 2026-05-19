import React, { useRef, useState } from "react";

import {
  FaBullhorn,
  FaPlay,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

function Advertisement() {
  // NAVIGATE
  const navigate = useNavigate();

  // SELECTED SERVICE
  const [selectedService, setSelectedService] =
    useState("");

  // FILE STATE
  const [selectedFile, setSelectedFile] =
    useState(null);

  // PAYMENT STATES
  const [showPaymentModal, setShowPaymentModal] =
    useState(false);

  const [paymentMethod, setPaymentMethod] =
    useState("");

  const [phoneNumber, setPhoneNumber] =
    useState("");

  const [cardNumber, setCardNumber] =
    useState("");

  // FILE INPUT REF
  const fileInputRef = useRef();

  const services = [
    "Social Media Ads",
    "Video Marketing",
    "Brand Promotion",
    "Website Advertising",
  ];

  // START BUTTON
  const handleStartAdvertisement = () => {
    if (!selectedService) {
      alert(
        "Please select advertisement service first."
      );

      return;
    }

    // OPEN PAYMENT MODAL
    setShowPaymentModal(true);
  };

  // PAYMENT
  const handlePayment = () => {
    if (
      paymentMethod === "phone" &&
      !phoneNumber
    ) {
      alert("Enter phone number");

      return;
    }

    if (
      paymentMethod === "card" &&
      !cardNumber
    ) {
      alert("Enter card number");

      return;
    }

    alert("Payment Successful");

    setShowPaymentModal(false);

    // OPEN FILE PROMPT
    fileInputRef.current.click();
  };

  // LOGOUT
  const handleLogout = () => {
    localStorage.removeItem("token");

    navigate("/");
  };

  // FILE CHANGE
  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setSelectedFile(file);

      alert(
        `File uploaded successfully: ${file.name}`
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#071028] text-white overflow-hidden">
      {/* PAYMENT MODAL */}
      {showPaymentModal && (
        <div
          className="
            fixed inset-0 z-50
            bg-black/70
            backdrop-blur-sm
            flex items-center justify-center
            px-5
          "
        >
          <div
            className="
              relative
              bg-[#101c38]
              w-full max-w-xl
              rounded-[40px]
              overflow-hidden
              shadow-2xl
              border border-white/10
            "
          >
            {/* ENVELOPE DESIGN */}
            <div
              className="
                absolute top-0 left-0
                w-full h-32
                bg-gradient-to-r
                from-blue-600
                to-pink-600
              "
              style={{
                clipPath:
                  "polygon(0 0, 100% 0, 50% 100%)",
              }}
            />

            <div className="relative p-10 pt-24">
              <h2 className="text-4xl font-black text-center mb-3">
                Pay $1
              </h2>

              <p className="text-gray-400 text-center mb-10">
                Complete payment to upload
                advertisement file
              </p>

              {/* OPTIONS */}
              <div className="grid md:grid-cols-2 gap-5 mb-8">
                {/* CARD */}
                <div
                  onClick={() =>
                    setPaymentMethod("card")
                  }
                  className={`
                    p-6 rounded-3xl
                    border cursor-pointer
                    transition-all duration-300

                    ${
                      paymentMethod === "card"
                        ? "border-blue-500 bg-blue-500/10"
                        : "border-white/10 bg-white/5"
                    }
                  `}
                >
                  <h3 className="text-2xl font-bold mb-2">
                    Credit Card
                  </h3>

                  <p className="text-gray-400">
                    Mastercard / Visa
                  </p>
                </div>

                {/* PHONE */}
                <div
                  onClick={() =>
                    setPaymentMethod("phone")
                  }
                  className={`
                    p-6 rounded-3xl
                    border cursor-pointer
                    transition-all duration-300

                    ${
                      paymentMethod === "phone"
                        ? "border-pink-500 bg-pink-500/10"
                        : "border-white/10 bg-white/5"
                    }
                  `}
                >
                  <h3 className="text-2xl font-bold mb-2">
                    Mobile Number
                  </h3>

                  <p className="text-gray-400">
                    MTN / Airtel
                  </p>
                </div>
              </div>

              {/* CARD INPUT */}
              {paymentMethod === "card" && (
                <input
                  type="text"
                  placeholder="Enter Card Number"
                  value={cardNumber}
                  onChange={(e) =>
                    setCardNumber(
                      e.target.value
                    )
                  }
                  className="
                    w-full
                    bg-white/5
                    border border-white/10
                    px-5 py-4
                    rounded-2xl
                    outline-none
                    mb-6
                  "
                />
              )}

              {/* PHONE INPUT */}
              {paymentMethod === "phone" && (
                <input
                  type="text"
                  placeholder="Enter Phone Number"
                  value={phoneNumber}
                  onChange={(e) =>
                    setPhoneNumber(
                      e.target.value
                    )
                  }
                  className="
                    w-full
                    bg-white/5
                    border border-white/10
                    px-5 py-4
                    rounded-2xl
                    outline-none
                    mb-6
                  "
                />
              )}

              {/* BUTTONS */}
              <div className="flex gap-4">
                <button
                  onClick={() =>
                    setShowPaymentModal(false)
                  }
                  className="
                    flex-1
                    bg-white/10
                    hover:bg-white/20
                    py-4 rounded-2xl
                    font-bold
                  "
                >
                  Cancel
                </button>

                <button
                  onClick={handlePayment}
                  className="
                    flex-1
                    bg-gradient-to-r
                    from-blue-600
                    to-pink-600
                    py-4 rounded-2xl
                    font-bold
                    hover:scale-105
                    transition-all
                  "
                >
                  Select Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* HIDDEN FILE INPUT */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
      />

      {/* HERO SECTION */}
      <section className="relative px-6 lg:px-20 py-20">
        {/* LOGOUT BUTTON */}
        <button
          onClick={handleLogout}
          className="
            absolute
            top-8
            right-8
            z-50
            bg-red-600
            hover:bg-red-700
            border border-white/10
            px-6 py-3
            rounded-2xl
            font-bold
            transition-all duration-300
            shadow-xl
          "
        >
          Logout
        </button>

        {/* BACKGROUND GLOW */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-pink-500/30 blur-[120px]" />

        <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/30 blur-[120px]" />

        <div className="relative z-10 grid lg:grid-cols-2 gap-14 items-center">
          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-3 bg-pink-500/20 border border-pink-500/30 px-5 py-3 rounded-full mb-8">
              <FaBullhorn className="text-pink-400" />

              <span className="text-pink-300 font-semibold">
                Modern Advertisement
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-8">
              Smart
              <span className="text-blue-400">
                {" "}
                Web
              </span>
              <br />
              Rwanda
            </h1>

            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl">
              Create powerful digital
              advertisements that attract
              customers, increase sales and
              make your brand look modern
              and professional.
            </p>

            {/* SELECTED SERVICE */}
            {selectedService && (
              <div
                className="
                  mb-8
                  bg-green-500/10
                  border border-green-500/30
                  px-5 py-4
                  rounded-2xl
                "
              >
                <p className="text-green-400 font-bold">
                  Selected Service:
                </p>

                <h3 className="text-2xl font-black mt-1">
                  {selectedService}
                </h3>

                {selectedFile && (
                  <p className="text-gray-300 mt-3">
                    Uploaded File:{" "}
                    <span className="text-blue-400 font-bold">
                      {selectedFile.name}
                    </span>
                  </p>
                )}
              </div>
            )}

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-5">
              <button
                onClick={
                  handleStartAdvertisement
                }
                className="
                  flex items-center gap-3
                  bg-blue-600 hover:bg-blue-700
                  px-8 py-4 rounded-2xl
                  font-bold text-lg
                  transition-all duration-300
                  shadow-2xl hover:scale-105
                "
              >
                Start Advertising

                <FaArrowRight />
              </button>

              <button
                className="
                  flex items-center gap-3
                  bg-white/10 hover:bg-white/20
                  border border-white/10
                  px-8 py-4 rounded-2xl
                  font-bold text-lg
                  transition-all duration-300
                "
              >
                <FaPlay />

                Watch Video
              </button>
            </div>

            {/* STATS */}
            <div className="flex flex-wrap gap-8 mt-14">
              <div>
                <h2 className="text-4xl font-black text-blue-400">
                  25K+
                </h2>

                <p className="text-gray-400 mt-2">
                  Active Clients
                </p>
              </div>

              <div>
                <h2 className="text-4xl font-black text-pink-400">
                  98%
                </h2>

                <p className="text-gray-400 mt-2">
                  Success Rate
                </p>
              </div>

              <div>
                <h2 className="text-4xl font-black text-green-400">
                  120+
                </h2>

                <p className="text-gray-400 mt-2">
                  Global Brands
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative overflow-hidden">
            <div
              className="
                absolute inset-0
                bg-gradient-to-r
                from-blue-500/20
                to-pink-500/20
                blur-3xl
              "
            />

            <div
              className="
                bg-gradient-to-br
                from-blue-600
                to-pink-600
                p-[2px]
                rounded-[40px]
                shadow-2xl
              "
            >
              <div className="bg-[#0d1730] rounded-[40px] overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1800&auto=format&fit=crop"
                  alt="advertisement"
                  className="
                    w-full
                    h-[650px]
                    object-cover
                  "
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/30" />

                {/* CARD 1 */}
                <div
                  className="
                    absolute top-8 left-8
                    bg-[#18253d]/90
                    backdrop-blur-xl
                    p-5 rounded-3xl
                    border border-white/10
                    shadow-2xl
                    w-[250px]
                  "
                >
                  <h3 className="text-xl font-bold mb-2">
                    Social Media Ads
                  </h3>

                  <p className="text-gray-400 text-sm">
                    Modern campaigns for
                    Instagram, TikTok and
                    Facebook.
                  </p>
                </div>

                {/* CARD 2 */}
                <div
                  className="
                    absolute bottom-10 right-8
                    bg-[#18253d]/90
                    backdrop-blur-xl
                    p-5 rounded-3xl
                    border border-white/10
                    shadow-2xl
                    w-[250px]
                  "
                >
                  <h3 className="text-xl font-bold mb-2">
                    Video Marketing
                  </h3>

                  <p className="text-gray-400 text-sm">
                    High quality videos that
                    increase engagement and
                    sales.
                  </p>
                </div>

                {/* CENTER CARD */}
                <div
                  className="
                    absolute top-1/2 left-1/2
                    -translate-x-1/2 -translate-y-1/2
                    bg-[#18253d]/90
                    backdrop-blur-xl
                    p-6 rounded-3xl
                    border border-white/10
                    shadow-2xl
                    w-[280px]
                  "
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-green-500/20 p-4 rounded-2xl">
                      <FaCheckCircle className="text-green-400 text-2xl" />
                    </div>

                    <div>
                      <h3 className="font-bold text-xl">
                        Brand Promotion
                      </h3>

                      <p className="text-gray-400">
                        Smart ads growing your
                        business.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-6 lg:px-20 pb-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-5">
            Our Services
          </h2>

          <p className="text-gray-400 text-lg">
            Everything you need to grow
            your brand online.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() =>
                setSelectedService(service)
              }
              className={`
                bg-[#18253d]
                p-8 rounded-3xl
                shadow-2xl
                hover:scale-105
                transition-all duration-500
                border cursor-pointer

                ${
                  selectedService === service
                    ? "border-blue-500 bg-blue-500/10 scale-105"
                    : "border-white/5"
                }
              `}
            >
              <div
                className="
                  w-16 h-16
                  bg-blue-500/20
                  rounded-2xl
                  flex items-center justify-center
                  text-3xl text-blue-400
                  mb-6
                "
              >
                <FaBullhorn />
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {service}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                Professional advertising
                solutions designed for
                modern businesses and
                startups.
              </p>

              {selectedService === service && (
                <div className="mt-6">
                  <button
                    className="
                      bg-blue-600
                      px-5 py-3
                      rounded-xl
                      font-bold
                      w-full
                    "
                  >
                    Selected
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Advertisement;
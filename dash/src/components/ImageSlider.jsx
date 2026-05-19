import React, {
  useEffect,
  useState,
} from "react";

function ImageSlider({
  darkMode,
  images,
}) {
  const [currentImage, setCurrentImage] =
    useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === images.length - 1
          ? 0
          : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className={`xl:col-span-2 overflow-hidden rounded-2xl shadow-2xl relative ${
        darkMode
          ? "bg-[#18253d]"
          : "bg-white"
      }`}
    >
      <div
        className="flex transition-transform duration-1000"
        style={{
          transform: `translateX(-${
            currentImage * 100
          }%)`,
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="min-w-full relative"
          >
            <img
              src={image}
              alt="shop"
              className="w-full h-[370px] object-cover"
            />

            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h1 className="text-5xl text-white font-bold">
                    Smart Web Rwanda
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
import { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1632254901361-5402c9232614?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "The beauty of nature is hidden in details.",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
    title: "Style that speaks louder than words.",
  },
  {
    id: 3,
    image: "https://i.pinimg.com/1200x/ac/c6/4c/acc64c361d32110a887361bf99f57085.jpg",
    title: "Discover your fashion today.",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  // auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative w-full h-[250px] md:h-[500px] ">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute w-full h-full transition-opacity duration-700 ${index === current
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
            }`}
        >
          <img
            src={slide.image}
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white text-center">
            <h1 className="text-3xl md:text-5xl font-light max-w-xl">
              {slide.title}
            </h1>
            <button className="mt-4 border px-6 py-2 hover:bg-white hover:text-black transition"
              onClick={() =>
                document
                  .getElementById("trendy")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Shop Now
            </button>
          </div>
        </div>
      ))}

      {/* Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 px-3 py-1"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 px-3 py-1"
      >
        ›
      </button>
      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition ${current === index ? "bg-white" : "bg-white/50"
              }`}
          />
        ))}
      </div>
    </div>
  );
}
import React, { useEffect, useState } from "react";

function FilterBar({ categories = [], setCategory, category }) {
  const [show, setShow] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      if (current > lastScroll && current > 80) {
        setShow(false); // scroll down → hide
      } else {
        setShow(true); // scroll up → show
      }

      setLastScroll(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <div
      className={`
        fixed top-[73px] left-0 w-full  bg-white shadow z-[9998]
        transition-all duration-300 flex justify-center items-center   
        ${show ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}

      `}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 overflow-x-auto no-scrollbar ">
        <div className="flex gap-3 w-max">
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => setCategory(cat)}
              className={`
                  px-4 py-2 border transition-all duration-200
                  ${category === cat
                  ? "bg-black text-white"
                  : "hover:bg-black hover:text-white"
                }
      `}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FilterBar;
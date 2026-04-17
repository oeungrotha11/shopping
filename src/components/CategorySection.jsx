import { Link } from "react-router-dom";

export function CategorySection() {
  const categories = [
    {
      id: 1,
      name: "Shoes",
      image: "https://i.pinimg.com/1200x/ae/06/e1/ae06e17d4367a51aa88ee5331a34b5b6.jpg",
      link: "/#trendy-shoe", // Link to shoes section on home
    },
    {
      id: 2,
      name: "Women stylish",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b",
      link: "/women_product", // Link to women product page
    },
    {
      id: 3,
      name: "Men stylish",
      image: "https://i.pinimg.com/1200x/e6/2e/64/e62e6427f58a8b80c727c7076af2570a.jpg",
      link: "/men_product", // Link to men product page
    },
  ];

  return (
    <div className="py-12 px-6">
      <h2 className="text-center text-sm tracking-widest text-gray-500 mb-6">
        PRODUCT CATEGORY
      </h2>

      <div className="grid md:grid-cols-3 gap-4">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={cat.link}
            className="relative group overflow-hidden cursor-pointer"
          >
            <img
              src={cat.image}
              className="w-full h-[250px] object-cover group-hover:scale-110 transition duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <h3 className="text-white text-xl font-semibold">
                {cat.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
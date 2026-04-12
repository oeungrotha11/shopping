export function CategorySection() {
  const categories = [
    {
      id: 1,
      name: "Shoes ",
      image: "https://i.pinimg.com/1200x/ae/06/e1/ae06e17d4367a51aa88ee5331a34b5b6.jpg",
    },
    {
      id: 2,
      name: "Women stylish",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b",
    },
    {
      id: 3,
      name: "Men stylish",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552",
    },
  ];

  return (
    <div className="py-12 px-6 ">
      <h2 className="text-center text-sm tracking-widest text-gray-500 mb-6">
        PRODUCT CATEGORY
      </h2>

      <div className="grid md:grid-cols-3 gap-4">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="relative group overflow-hidden"
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
          </div>
        ))}
      </div>
    </div>
  );
}
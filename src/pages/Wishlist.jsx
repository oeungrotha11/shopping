import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Wishlist() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(data);
  }, []);

  const removeItem = (id) => {
    const updated = wishlist.filter(item => item.id !== id);
    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  if (wishlist.length === 0) {
    return (
      <div className="text-center mt-32">
        <h1 className="text-2xl font-semibold">Your Wishlist is Empty ❤️</h1>
        <Link to="/" className="mt-4 inline-block underline">Go Shopping</Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 mt-20">

      <h1 className="text-2xl font-semibold mb-6">My Wishlist</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

        {wishlist.map(item => (
          <div key={item.id} className="group">

            <Link to={`/product/${item.id}`}>
              <div className="bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={item.image}
                  className="w-full h-[250px] object-cover group-hover:scale-105 transition"
                />
              </div>
            </Link>

            <div className="mt-2">
              <h3 className="text-sm font-medium">{item.name}</h3>
              <p className="text-gray-500 text-sm">${item.price}</p>
            </div>

            <button
              onClick={() => removeItem(item.id)}
              className="mt-2 text-red-500 text-sm"
            >
              Remove
            </button>

          </div>
        ))}

      </div>
    </div>
  );
}

export default Wishlist;
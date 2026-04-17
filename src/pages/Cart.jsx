import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(data);
  }, []);

  const updateQty = (id, change) => {
    const updated = cart.map(item =>
      item.id === id
        ? { ...item, qty: Math.max(1, item.qty + change) }
        : item
    );

    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const removeItem = (id) => {
    const updated = cart.filter(item => item.id !== id);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  if (cart.length === 0) {
    return (
      <div className="text-center mt-32">
        <h1 className="text-2xl font-semibold">Your Cart is Empty 🛒</h1>
        <Link to="/" className="mt-4 inline-block underline">Go Shopping</Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 mt-20">

      <h1 className="text-2xl font-semibold mb-6">Shopping Cart</h1>

      <div className="grid md:grid-cols-3 gap-8">

        {/* LEFT - ITEMS */}
        <div className="md:col-span-2 space-y-4">

          {cart.map(item => (
            <div key={item.id} className="flex gap-4 border p-4 rounded-lg">

              <img
                src={item.image}
                className="w-24 h-24 object-cover rounded"
                alt={item.name}
              />

              <div className="flex-1">
                <h3 className="font-medium">{item.name}</h3>
                <p className="text-gray-500 text-sm">Size: {item.size || 'N/A'}</p>
                <p className="mt-1 font-semibold">${item.price}</p>

                {/* Quantity */}
                <div className="flex items-center gap-2 mt-2">
                  <button onClick={() => updateQty(item.id, -1)} className="px-2 border">−</button>
                  <span>{item.qty}</span>
                  <button onClick={() => updateQty(item.id, 1)} className="px-2 border">+</button>
                </div>
              </div>

              {/* Remove */}
              <button
                onClick={() => removeItem(item.id)}
                className="text-red-500"
              >
                ✕
              </button>

            </div>
          ))}

        </div>

        {/* RIGHT - SUMMARY */}
        <div className="border p-6 rounded-lg h-fit">

          <h2 className="text-lg font-semibold mb-4">Summary</h2>

          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Shipping</span>
            <span>$6.00</span>
          </div>
          <div className="flex justify-between mb-4">
            <span>Tax</span>
            <span>$5.00</span>
          </div>

          <hr className="mb-4" />

          <div className="flex justify-between mb-4 font-semibold">
            <span>Total</span>
            <span>${(total + 6 + 5).toFixed(2)}</span>
          </div>

          {/* Link to Checkout */}
          <Link 
            to="/checkout" 
            className="block w-full bg-black text-white text-center py-3 rounded-lg hover:bg-gray-800"
          >
            Proceed to Checkout
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Cart;
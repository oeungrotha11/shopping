import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Men_Product } from "../data/men_product";
import { Women_Product } from "../data/women_product";
import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart, FaShippingFast } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import { ToastContainer, useToast } from "../components/Toast";

function ProductDetail() {
    const [wishlist, setWishlist] = useState(
        JSON.parse(localStorage.getItem("wishlist")) || []
    );
    const { toasts, addToast, removeToast } = useToast()

    const toggleWishlist = (product) => {
        let updated;
        const exists = wishlist.find(item => item.id === product.id);

        if (exists) {
            updated = wishlist.filter(item => item.id !== product.id);
            addToast(`${product.name} removed from wishlist!`, 'success')
        } else {
            updated = [...wishlist, product];
            addToast(`${product.name} added to wishlist! ❤️`, 'success')
        }

        setWishlist(updated);
        localStorage.setItem("wishlist", JSON.stringify(updated));
    };

    const addToCart = (product, qty, size) => {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        const existing = cart.find(
            item => item.id === product.id && item.size === size
        );

        if (existing) {
            existing.qty += qty;
        } else {
            cart.push({
                ...product,
                qty,
                size
            });
        }

        localStorage.setItem("cart", JSON.stringify(cart));
    };

    const { id } = useParams();

    const allProducts = [...Men_Product, ...Women_Product];
    const product = allProducts.find(p => p.id === parseInt(id));

    const [selectedSize, setSelectedSize] = useState("M");
    const [qty, setQty] = useState(1);
    const [mainImage, setMainImage] = useState(product?.image);

    if (!product) return <h1 className="text-center mt-20">Product not found</h1>;

    // similar items (same category, not same id)
    const similar = allProducts
        .filter(item => item.category === product.category && item.id !== product.id)
        .sort(() => 0.5 - Math.random())
        .slice(0, 4);

    useEffect(() => {
        setMainImage(product.image);
    }, [product]);

    return (
        <>
            <ToastContainer toasts={toasts} removeToast={removeToast} />
            <div className="max-w-7xl mx-auto px-6 py-10 mt-20">

                {/* MAIN */}
                <div className="grid md:grid-cols-2 gap-10">

                    {/* LEFT - IMAGE */}
                    <div className="flex gap-4">
                        {/* Thumbnails */}
                        <div className="flex flex-col gap-3">
                            {[product.image, product.image, product.image].map((img, i) => (
                                <img
                                    key={i}
                                    src={img}
                                    onClick={() => setMainImage(img)}
                                    className={`w-16 h-16 object-cover border cursor-pointer 
                                    ${mainImage === img ? "border-black" : ""}`}
                                />
                            ))}
                        </div>

                        {/* Main Image with Zoom */}
                        <div className="flex-1 overflow-hidden rounded-lg">
                            <img
                                src={mainImage}
                                className="w-full transition-transform duration-300 hover:scale-125 cursor-zoom-in"
                            />
                        </div>
                    </div>

                    {/* RIGHT - INFO */}
                    <div>
                        <h1 className="text-2xl font-semibold">{product.name}</h1>
                        <p className="text-gray-500 mt-2">{product.category}</p>
                        <p className="text-xl font-bold mt-4">${product.price}</p>

                        {/* SIZE */}
                        <div className="mt-6">
                            <h3 className="font-medium mb-2">Size</h3>
                            <div className="flex gap-3">
                                {["S", "M", "L", "XL"].map(size => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`px-4 py-2 border rounded 
                                        ${selectedSize === size ? "bg-black text-white" : ""}`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* QUANTITY */}
                        <div className="mt-6">
                            <h3 className="font-medium mb-2">Quantity</h3>
                            <div className="flex items-center gap-3">
                                <button
                                    onClick={() => setQty(qty > 1 ? qty - 1 : 1)}
                                    className="px-3 py-1 border"
                                >−</button>
                                <span>{qty}</span>
                                <button
                                    onClick={() => setQty(qty + 1)}
                                    className="px-3 py-1 border"
                                >+</button>
                            </div>
                        </div>

                        {/* ADD TO CART */}
                        <div className="flex gap-2">
                            <button
                                onClick={() => {
                                    addToCart(product, qty, selectedSize);
                                    addToast(`${product.name} (Size: ${selectedSize}, Qty: ${qty}) added to bag! 🛒`, 'success');
                                }}
                                className="mt-6 w-full bg-black text-white py-3 rounded-lg"
                            >
                                Add to bag
                            </button>
                            <button
                                onClick={() => toggleWishlist(product)}
                                className="mt-6 px-4 py-2 text-2xl border rounded-lg"
                            >
                                {wishlist.find(item => item.id === product.id)
                                    ? <FaHeart className="text-red-500" />
                                    : <FaRegHeart />
                                }
                            </button>
                        </div>

                        {/* EXTRA INFO */}
                        <div className="mt-6 text-lg text-gray-600 space-y-2">
                            <p className="flex items-center gap-2"><FaShippingFast /> Fast delivery (1–3 days)</p>
                            <p className="flex items-center gap-2"><MdOutlinePayment /> Easy payment</p>
                        </div>
                    </div>
                </div>

                {/* SIMILAR ITEMS */}
                <div className="mt-16">
                    <h2 className="text-xl font-semibold mb-6">SIMILAR ITEMS</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {similar.map(item => (
                            <Link
                                key={item.id}
                                to={`/product/${item.id}`}
                                className="group"
                            >
                                <div className="bg-gray-100 rounded-lg overflow-hidden">
                                    <img
                                        src={item.image}
                                        className="w-full h-[250px] object-cover group-hover:scale-105 transition"
                                    />
                                </div>
                                <div className="mt-2">
                                    <h3 className="text-sm font-medium">{item.name}</h3>
                                    <p className="text-gray-500 text-sm">${item.price}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductDetail;
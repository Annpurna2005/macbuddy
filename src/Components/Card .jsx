import { useCart } from "./CartContext";

const Card = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="border p-4 rounded-lg shadow-md text-center">
      <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-lg" />
      <p className="text-sm text-gray-500 mt-2">{product.category}</p>
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-xl font-bold text-orange-500">${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-2 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Card;

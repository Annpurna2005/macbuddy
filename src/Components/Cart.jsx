import { useCart } from "./CartContext";

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  const totalPrice = (cartItems || []).reduce((total, item) => total + (Number(item.price) || 0), 0); // Ensure it's a number


  return (
    <div className="p-6 bg-white rounded-lg shadow-lg w-full md:w-3/4 lg:w-2/3 mx-auto">
      <table className="w-full border-collapse border border-orange-500">
        <thead>
          <tr className="bg-orange-500 text-white">
            <th className="p-2">Product</th>
            <th className="p-2">Description</th>
            <th className="p-2">Price</th>
            <th className="p-2">Quantity</th>
            <th className="p-2">Total</th>
            <th className="p-2">Remove</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item, index) => (
            <tr key={index} className="text-center border-b">
              <td className="p-2">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg" />
              </td>
              <td className="p-2">{item.name}</td>
              <td className="p-2 text-orange-500">${item.price}</td>
              <td className="p-2">1</td>
              <td className="p-2 text-orange-500">${item.price}</td>
              <td className="p-2">
                <button
                  onClick={() => removeFromCart(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  ❌
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between items-center mt-4">
        <p className="text-lg font-semibold">Total: <span className="text-orange-500">${totalPrice.toFixed(2)}</span></p>
        <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;

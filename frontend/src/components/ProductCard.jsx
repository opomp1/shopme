import toast from "react-hot-toast";
import { ShoppingCart } from "lucide-react";
import { useUserStore } from "../stores/useUserStore";
import { useCartStore } from "../stores/useCartStore";

const ProductCard = ({ product }) => {
  const { user } = useUserStore();
  const { addToCart } = useCartStore();

  const handleAddToCart = () => {
    if (!user) {
      toast.error("Please login to add products to cart", { id: "login" });
      return;
    } else {
      // add to cart
      addToCart(product);
    }
  };

  return (
    <div className="flex justify-between w-full relative flex-col overflow-hidden rounded-lg border border-gray-700 shadow-lg">
      <div>
        <div className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl">
          <img
            className="object-cover w-full"
            src={product.image.replace(
              "/upload/",
              "/upload/w_800,h_800,c_fill,q_auto,f_auto/"
            )}
            alt="product image"
            loading="lazy"
          />

          {/* <div className="absolute inset-0 bg-black/200" /> */}
        </div>
        <div className="mt-4 px-5">
          <h5 className="text-xl font-semibold tracking-tight ">
            {product.name}
          </h5>
          <div className="mt-2 mb-5 flex items-center justify-between">
            <p>
              <span className="text-3xl font-bold text-gray-700">
                ${product.price}
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="mt-4 px-5 pb-5">
        <button
          className="flex items-center justify-center rounded-lg bg-black px-5 py-2.5 text-center text-sm font-medium
					 text-white hover:bg-gray-700 focus:outline-none focus:ring-4  cursor-pointer"
          onClick={handleAddToCart}
        >
          <ShoppingCart size={22} className="mr-2" />
          Add to cart
        </button>
      </div>
    </div>
  );
};
export default ProductCard;

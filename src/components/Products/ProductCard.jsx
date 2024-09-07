import { CartContext } from "../../context/CartProvider";
import { useContext } from "react";

const ProductCard = ({ id, title, desc, price, image }) => {
  const { addItem } = useContext(CartContext);

  return (
    <div className=" text-[1.8rem] basis-1/3 max-w-[33.3%] flex justify-center mb-24">
      <div className=" flex flex-col border p-4 max-w-[27rem] rounded-2xl">
        <img
          className="h-[25rem] w-[25rem] mb-8 rounded-2xl overflow-hidden object-contain"
          src={image}
          alt=""
        />
        <div className="max-w-[25rem] mb-4">
          <div className="font-semibold mb-2">{title.length > 50 ? `${title.substring(0, 50)}...` : title}</div>
          <div className="flex justify-between">
            <span className="font-bold">€{price}</span>
            <span>
              <s className="text-[#ABABAB] font-medium">€{price + 100}</s>
            </span>
            <span className="font-semibold text-[#B92E2E]">30% OFF</span>
          </div>
          <p className="text-[1.4rem] mt-4">
            {desc.length > 50 ? `${desc.substring(0, 120)}...` : desc}
          </p>
        </div>
        <div
          onClick={() => addItem({ id, title, price, image })}
          className="flex-grow flex items-end"
        >
          <button className="w-full button button-cart">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

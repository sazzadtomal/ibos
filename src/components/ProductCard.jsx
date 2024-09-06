import image from "../assets/image.png"

const ProductCard = () => {
  return (
    <div className=" text-[1.8rem] basis-1/3 max-w-[33.3%] flex justify-center mb-6" >
                    <div className="border p-4 max-w-[27rem] rounded-2xl">
                        <img className="h-[25rem] w-[25rem] mb-2 rounded-2xl overflow-hidden" src={image} alt="" />
                        <div className="max-w-[25rem] mb-4">
                            <div className="font-semibold">Recliner Chair Wood</div>
                            <div className="flex justify-between">
                                <span className="font-bold">€299.00</span>
                                <span><s className="text-[#ABABAB] font-medium">€350.00</s></span>
                                <span className="font-semibold text-[#B92E2E]">30% OFF</span>
                            </div>
                            <p className="text-[1.4rem] text-wrap">It has a backrest that can be tilted back, and often a footrest extended</p>
                        </div>
                        <button className="w-full button button-cart">Add to Cart</button>
                    </div>
                </div>
  )
}

export default ProductCard
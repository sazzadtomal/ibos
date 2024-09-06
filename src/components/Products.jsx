import ProductCard from "./ProductCard"



const aside=["Rocking chair","Side chair","Lounge chair"]


const Products = () => {
  return (
    <section className="flex mt-48 ">
        <aside className="font-medium text-[2.2rem] text-[#717171] border-r pr-16 min-h-[70vh] shrink-0">
            <ul className="[&>*]:px-8 [&>*]:py-2  [&>*]:m-8 ">
                <li>Rocking chair</li>
                <li>Side chair</li>
                <li>Lounge chair</li>
            </ul>
        </aside>
        <main className="mx-48">
            <section className="flex flex-wrap flex-grow items-start mb-8">
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
            </section>
            <section>
                <div className="w-full flex justify-center text-[1.4rem] font-bold mt-24">
                    <span>1</span><span>2</span>3<span>4</span><span>5</span><span>6</span>
                </div>
            </section>
        </main>
    </section>
  )
}

export default Products
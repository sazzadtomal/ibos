import ProductCard from "../components/Products/ProductCard";
import { useState, useEffect } from "react";
import Pagination from "../components/Products/Pagination";
import useProducts from "../hooks/useProducts";

const aside = ["Rocking chair", "Side chair", "Lounge chair"];

const Products = () => {
  const { products } = useProducts();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  useEffect(
    () => window.scrollTo({ top: 0, behavior: "smooth" }),
    [currentPage]
  );

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentProducts = products.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section className="flex mt-48 ">
      <aside className="hidden lg:block font-medium text-[2.2rem] muted border-r pr-8 2xl:pr-24 min-h-[70vh] shrink-0">
        <ul className="[&>*]:px-8 [&>*]:py-2  [&>*]:m-8 ">
          {aside.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </aside>
      <main className="mx-4 md:mx-16 2xl:mx-48 flex-grow">
        <section className="flex flex-wrap flex-grow mb-8">
          {currentProducts.map((product) => (
            <ProductCard
              key={product.title}
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              desc={product.description}
            />
          ))}
        </section>
        <section>
          <div className="w-full flex justify-center text-[1.4rem] font-bold mt-24">
            <Pagination
              currentPage={currentPage}
              postsPerPage={postsPerPage}
              totalPosts={products.length}
              paginate={paginate}
            />
          </div>
        </section>
      </main>
    </section>
  );
};

export default Products;

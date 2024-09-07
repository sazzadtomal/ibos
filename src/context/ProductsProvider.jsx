import { createContext,useState, useEffect} from "react";
import axios from "axios";



export const ProductContext = createContext([]);

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get("https://fakestoreapi.com/products");
             setProducts(response.data)
          } catch (error) {
            alert("An error happend while fetching Products");
          }
        };
    
        fetchData()
    
      }, []);

    return (
        <ProductContext.Provider value={{ products }}>
            {children}
        </ProductContext.Provider>
    )
}

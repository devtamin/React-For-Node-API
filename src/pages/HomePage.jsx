import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Product from "../components/product";
// import Product from "../components/product";

const HomePage = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const getProducts = async() => {
    try {
      setIsLoading(true);
      const response = await axios.get('http://localhost:3000/products');
      setProducts(response.data);
      setIsLoading(false);
    } catch (error) {
      toast.error(error.message);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <div>
        <Link
          to="/create"
          className="inline-block mt-4 shadow-md bg-blue-700 text-white rounded-sm px-4 py-2 font-bold hover:bg-blue-600 hover:cursor-pointer"
        >
          Create a Product
        </Link>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-5">

         
              {products.map((product, index) => 
                <Product key={product._id} product={product} />
              )}
       

          
      

      </div>
    </div>
  );
};

export default HomePage;

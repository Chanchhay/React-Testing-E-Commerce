import { useEffect, useState } from "react";
import HeroSection from "./HeroSection";
import ProductListing from "./ProductListing";
import Loading from "./Loading";
import FooterSection from "./FooterSection";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const BASE_URL = "https://fakestoreapi.com/";
  useEffect(() => {
    setLoading(true);
    fetch(`${BASE_URL}products`)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <HeroSection />
      <div className="bg-gray-900 py-16">
        <div className="mx-auto px-4">
          <h2 className="text-center text-3xl font-bold text-white mb-8">
            Introducing Our Latest Product
          </h2>
          {loading && products.length === 0 ? (
            <Loading />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {products.map((product) => (
                <ProductListing
                  image={product.image}
                  title={product.title}
                  description={product.description}
                  key={product.id}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      <FooterSection />
    </div>
  );
}

export default App;

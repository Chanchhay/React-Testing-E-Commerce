import { useEffect, useState } from "react";
import HeroSection from "./HeroSection";
import ProductListing from "./ProductListing";
import Loading from "./Loading";
import FooterSection from "./FooterSection";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const BASE_URL = "https://api.escuelajs.co/api/v1/products?offset=0&limit=15";
  useEffect(() => {
    setLoading(true);
    fetch(`${BASE_URL}`)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <HeroSection />
      <div class="bg-gray-900 py-16">
        <div class="mx-auto px-4">
          <h2 class="text-center text-3xl font-bold text-white mb-8">
            Introducing Our Latest Product
          </h2>
          {loading && products.length === 0 ? (
            <Loading />
          ) : (
            <div class="grid grid-cols-3 gap-5">
              {products.map((product) => (
                <ProductListing
                  image={product.images}
                  title={product.title}
                  description={product.description}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      <FooterSection/>
    </div>
  );
}

export default App;

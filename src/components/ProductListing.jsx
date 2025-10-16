const ProductListing = ({ image, title }) => {
  return (
    <>
      <div class="bg-white rounded-lg shadow-lg p-8">
        <div className="relative overflow-hidden">
          <img
            className="object-cover w-full h-full"
            src={image?.[0]}
            alt="Product"
          />
          <div className="absolute inset-0 bg-black opacity-40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-white text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300">
              View Product
            </button>
          </div>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mt-4">{title}</h3>
        <p className="text-gray-500 text-sm mt-2">
            {}
        </p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-gray-900 font-bold text-lg">$29.99</span>
          <button className="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductListing;

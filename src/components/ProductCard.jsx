export const ProductCard = ({ items }) => {
  return (
    <div className="w-full  py-8">
      <div className="max-w-7xl  md:mx-auto ">
        <div className="   grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {items.map((product) => {
            const off = +product.higher_price > +product.price
              ? Math.round(((+product.higher_price - +product.price) / +product.higher_price) * 100)
              : 0;

            return (
              <div
                key={product.id}
                className=" bg-white rounded-lg shadow hover:shadow-md transition-shadow duration-200 overflow-hidden flex flex-col"
              >
                <div className="aspect-auto  sm:aspect-[4/5] overflow-hidden relative">
                  {off > 0 && (
                    <div className="absolute z-10 rotate-[-45deg] top-4 left-[-35px] pl-3 text-center text-sm text-slate-900 bg-transparent backdrop-blur-xl shadow-md w-28 py-1">
                      {off}% Off
                    </div>
                  )}
                  <img
                    src={product.product_thumbnail}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                  />
                </div>

                <div className="px-4 py-2 flex flex-col flex-grow">
                  <h3 className="text-md font-semibold font-playfair  md:mb-1 line-clamp-2 flex-grow">
                    {product.name}
                  </h3>
                  <div className="flex flex-row  items-baseline mb-2 md:mb-4">
                    <p className="text-green-700 font-semibold text-lg">
                      ₹{product.price}
                    </p>
                    {off > 0 && (
                      <p className="ml-2 line-through text-sm text-red-500">
                        ₹{product.higher_price}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row  gap-2 mt-auto">
                    <button className="flex-1 text-sm bg-[#6A994E] text-white px-4 py-2 rounded-full hover:bg-[#386641] transition-colors duration-200 whitespace-nowrap">
                      View Product
                    </button>
                    <button className="flex-1 text-sm bg-[#F2E8CF] text-slate-800 px-4 py-2 rounded-full hover:bg-[#BC4749] hover:text-white transition-colors duration-200 whitespace-nowrap">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

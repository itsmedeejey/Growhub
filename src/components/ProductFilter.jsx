import React, { useState } from 'react';
import { ProductCard } from './ProductCard';
const ProductFilter = ({ products }) => {
  const [maxPrice, setMaxPrice] = useState(15000);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('');

  const filteredProducts = products
    .filter(product => 
      product.price <= maxPrice &&
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === 'lowToHigh') return a.price - b.price;
      if (sortOrder === 'highToLow') return b.price - a.price;
      return 0;
    });

  return (
     
    <div className="p-4 max-w-7xl mx-auto">
      <div className="flex flex-wrap gap-4 items-center mb-6">
      

        {/* Sort Filter */}
        <select
          value={sortOrder}
          onChange={e => setSortOrder(e.target.value)}
          className="border rounded-xl px-4 py-2"
        >
          <option value="">Sort by</option>
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
        </select>

        <input
          type="text"
          placeholder="Search product..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="border  focus:outline-slate-500 rounded-xl p-2 w-72"
        />
      </div>

      

      <ProductCard items={filteredProducts}></ProductCard>
        {filteredProducts.length === 0 && (
          <p className="text-center text-gray-500 mt-6">No products found.</p>
        )}
    </div>
  );
};

export default ProductFilter;

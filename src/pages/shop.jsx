import React, { useEffect, useState } from 'react';
import { IoMdSearch } from "react-icons/io";
import { Link } from 'react-router-dom';
import { allCategory, products } from '../components/lists';

const Shop = () => {
  const [counts, setCounts] = useState({});
  const [categories, setCategories] = useState(allCategory);
  const handleCategoryClick = (index) => {
    const updatedCategories = categories.map((cat, i) => ({
      ...cat,
      active: i === index,
    }));
    setCategories(updatedCategories);
  };
  useEffect(() => {
    const storedCounts = sessionStorage.getItem('basketCounts');
    if (storedCounts) {
      setCounts(JSON.parse(storedCounts));
    }
  }, []);
  useEffect(() => {
    sessionStorage.setItem('basketCounts', JSON.stringify(counts));
  }, [counts]);
  const handleAdd = (product) => {
    setCounts(prev => {
      const existing = prev[product.id];
      return {
        ...prev,
        [product.id]: {
          ...product,
          count: existing ? existing.count + 1 : 1,
        }
      };
    });
  };

  const handleRemove = (productId) => {
    setCounts(prev => {
      const updated = { ...prev };
      if (updated[productId].count > 1) {
        updated[productId].count -= 1;
      } else {
        delete updated[productId];
      }
      return updated;
    });
  };

  return (
    <div className="px-2 mb-16 xl:px-10">
      <div className="flex items-center md:max-w-lg border justify-between p-2 rounded-xl px-5">
        <input
          type="text"
          placeholder="Qidiruv..."
          className="text-lg w-full outline-none"
        />
        <IoMdSearch className="text-2xl" />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">Kategoriyalar</h2>
          <Link to={'/categories'} className="text-sm text-blue-600 hover:underline">
            Barchasini ko‘rish
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:grid-cols-6">
          {categories.slice(0, 6).map((cat, index) => (
            <div
              key={index}
              onClick={() => handleCategoryClick(index)}
              className={`cursor-pointer flex flex-col items-center justify-center text-center transition-all duration-300 ${cat.active ? "text-[rgb(22,113,98)]" : "text-gray-800"}`} >
              <div className={`w-24 h-24 rounded-full flex items-center justify-center mb-2 shadow-md ${cat.active ? "bg-[rgb(22,113,98)]" : "bg-gray-100"}`}>
                <img src={cat.image} alt={cat.title} className="w-14 h-14 object-contain" />
              </div>
              <p className="text-sm font-medium">{cat.title}</p>
            </div>
          ))}
        </div>
        <div className='my-5'>
          <h2 className='font-bold text-2xl my-5'>Mahsulotlar</h2>
          <div className='grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4'>
            {products.map((product) => {
              const productInCart = counts[product.id];

              return (
                <div key={product.id}>
                  <Link to='/detail' className='bg-slate-300 rounded-t-lg flex justify-center'>
                    <img src={product.image} alt={product.title} className="sm:w-44 sm:h-44 lg:w-48 lg:h-48 object-cover" />
                  </Link>
                  <div className='p-2'>
                    <h3 className='text-lg font-semibold'>{product.title}</h3>
                    <p className='text-lg font-bold'>${product.price}</p>

                    {productInCart ? (
                      <div className='flex justify-between items-center bg-[rgb(22,113,98)] text-white py-1 rounded mt-1 w-full text-xl'>
                        <button onClick={() => handleRemove(product.id)} className="px-3">−</button>
                        <span>{productInCart.count}</span>
                        <button onClick={() => handleAdd(product)} className="px-3">+</button>
                      </div>
                    ) : (
                      <button
                        onClick={() => handleAdd(product)}
                        className='bg-[rgb(22,113,98)] text-white py-2 rounded mt-1 w-full flex justify-center text-2xl'
                      >
                        {product.basket}
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;

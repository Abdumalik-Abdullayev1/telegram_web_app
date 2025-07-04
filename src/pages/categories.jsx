import React, { useState } from 'react';
import { allCategory as categoryList } from '../components/lists';

const Categories = () => {
    // Kategoriyalarni active flag bilan boshlang‘ich holatga keltiramiz
    const [categories, setCategories] = useState(
        categoryList.map((cat, index) => ({
            ...cat,
            active: index === 0, // ixtiyoriy birini aktiv qilishingiz mumkin yoki false
        }))
    );

    const handleCategoryClick = (index) => {
        const updatedCategories = categories.map((cat, i) => ({
            ...cat,
            active: i === index,
        }));
        setCategories(updatedCategories);
    };

    return (
        <div className='px-2 mb-40'>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {categories.map((cat, index) => (
                    <div
                        key={index}
                        onClick={() => handleCategoryClick(index)}
                        className={`cursor-pointer flex flex-col items-center justify-center text-center transition-all ${cat.active ? "text-[rgb(22,113,98)]" : "text-gray-800"}`}>
                        <div className={`w-24 h-24 rounded-full flex items-center justify-center mb-2 shadow-md ${cat.active ? "bg-[rgb(22,113,98)]" : "bg-gray-100"}`}>
                            <img src={cat.image} alt={cat.title} className="w-14 h-14 object-contain" />
                        </div>
                        <p className="text-sm font-medium">{cat.title}</p>
                    </div>
                ))}
            </div>
            <button className='bg-[rgb(22,113,98)] w-full py-2 text-white rounded-md fixed bottom-0 right-0 left-0'>
                Tanlash
            </button>
        </div>
    );
};

export default Categories;

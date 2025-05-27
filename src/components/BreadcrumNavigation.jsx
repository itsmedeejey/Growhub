import React from "react";
import { Link } from "react-router-dom";

export const BreadcrumbNav = ({ categoryName, subCategoryName, productName }) => {
  return (
    <nav
      className="absolute w-fit bottom-1 md:bottom-3 left-1 md:left-5 px-3 py-1 border rounded-full backdrop-blur-lg"
    >
      <div className="flex gap-1 sm:gap-3 text-[8px] sm:text-lg text-white items-center whitespace-nowrap">
        
    
        <Link to="/categories" className="hover:underline">
          Categories
        </Link>

        {categoryName && (
          <>
            <span>•</span>
            <span className="">{categoryName}</span>
          </>
        )}

        {subCategoryName && (
          <>
            <span>•</span>
            <span className="">{subCategoryName}</span>
          </>
        )}

        
      </div>
    </nav>
  );
};

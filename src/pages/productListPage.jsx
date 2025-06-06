import ProductFilter from "../components/ProductFilter"

import { ProductCard } from "../components/ProductCard"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"

import { ProductList } from "../testingdata/productListData"
import { BreadcrumbNav } from "../components/BreadcrumNavigation"

export const ProductPage = ()=>{
    return(
        <div className="bg-slate-50">
            <Navbar></Navbar>
             <div className="relative">
        <div className=" aspect-video md:h-[400px]  w-full border  overflow-hidden  flex items-end justify-center">
          <img
            src="/banner/table.jpg"
            alt=""
            className="w-full justify-center items-center object-contain"
          />
        </div>

        <div className="">

       <BreadcrumbNav categoryName="Furnitures" subCategoryName="Tables"></BreadcrumbNav>
        </div>

      </div>

            <div className="mx-4 mt-4 bg-[#fff] shadow-xl rounded-2xl">
                <ProductFilter products={ProductList}></ProductFilter>
            </div>
            <Footer></Footer>
        </div>
    )
}
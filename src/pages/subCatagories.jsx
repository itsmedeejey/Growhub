import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { subcatData } from "../testingdata/subcatData";
import { SubCatagoryCard } from "../components/SubcatagoryCard";
import { BreadcrumbNav } from "../components/BreadcrumNavigation";
export const SubCategoryPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="relative">
        <div className=" aspect-video md:h-[400px]  w-full border  overflow-hidden  flex items-center justify-center">
          <img
            src="/banner/furniture.jpg"
            alt=""
            className="w-full justify-center items-center object-contain"
          />
        </div>

       <BreadcrumbNav categoryName="furnitures"></BreadcrumbNav>

      </div>

      <div className="m-8">
        <SubCatagoryCard categories={subcatData}></SubCatagoryCard>
      </div>
      <Footer></Footer>
    </div>
  );
};

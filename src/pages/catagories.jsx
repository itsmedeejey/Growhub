import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import { Catagories } from "../testingdata/catagoryData"
import { CategoryCard } from "../components/categoryCard"
export const CatagoriesPage = ()=>{

    return(
        <div>
            <Navbar></Navbar>     
            <div className="m-8">
            <div className="flex justify-center ">
                <h1 className="text-gbrown  text-2xl md:text-4xl font-semibold font-playfair">Categories</h1>
            </div>   
             <CategoryCard categories={Catagories}></CategoryCard>
            </div>



           <Footer></Footer>
        </div>
    )
}
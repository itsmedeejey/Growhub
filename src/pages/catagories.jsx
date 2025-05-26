import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import { Catagories } from "../testingdata/catagoryData"
import { CatagoryCard } from "../components/catagoryCard"
export const CatagoriesPage = ()=>{

    return(
        <div>
            <Navbar></Navbar>        
            <div className="m-8">
             <CatagoryCard catagories={Catagories}></CatagoryCard>
            </div>



           <Footer></Footer>
        </div>
    )
}
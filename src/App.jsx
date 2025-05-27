import { Aboutus } from "./pages/AboutUs"
import {BrowserRouter,Route,Routes} from "react-router-dom";
import { ContactUs } from "./pages/Contacus";
import { Product } from "./pages/Product";
import { CatagoriesPage } from "./pages/catagories";
import { SubCategoryPage } from "./pages/subCatagories";
import { ProductPage } from "./pages/productListPage";
function App() {

  return (
    <>  <BrowserRouter>
      <Routes>
          <Route path='/' element={<Aboutus/>}></Route>
          <Route path='/contact-us' element={<ContactUs/>}></Route>
          <Route path='/product' element={<Product/>}></Route>
          <Route path='/categories' element={<CatagoriesPage/>}></Route>
          
          <Route path='/sub/:id' element={<SubCategoryPage/>}></Route>
          
          <Route path='/subproduct/:id' element={<ProductPage/>}></Route>
      </Routes>
    
    </BrowserRouter>
       
    </>
  )
}

export default App

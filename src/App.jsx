import { Aboutus } from "./pages/AboutUs"
import {BrowserRouter,Route,Routes} from "react-router-dom";
import { ContactUs } from "./pages/Contacus";
import { Product } from "./pages/Product";
import { CatagoriesPage } from "./pages/catagories";

function App() {

  return (
    <>  <BrowserRouter>
      <Routes>
          <Route path='/' element={<Aboutus/>}></Route>
          <Route path='/contact-us' element={<ContactUs/>}></Route>
          <Route path='product' element={<Product/>}></Route>
          <Route path='catagories' element={<CatagoriesPage/>}></Route>
          
      </Routes>
    
    </BrowserRouter>
       
    </>
  )
}

export default App

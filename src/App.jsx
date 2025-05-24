import { Aboutus } from "./pages/AboutUs"
import {BrowserRouter,Route,Routes} from "react-router-dom";
import { ContactUs } from "./pages/Contacus";
import { Product } from "./pages/Product";

function App() {

  return (
    <>  <BrowserRouter>
      <Routes>
          <Route path='/' element={<Aboutus/>}></Route>
          <Route path='/contact-us' element={<ContactUs/>}></Route>
          <Route path='product' element={<Product/>}></Route>
          
      </Routes>
    
    </BrowserRouter>
       
    </>
  )
}

export default App

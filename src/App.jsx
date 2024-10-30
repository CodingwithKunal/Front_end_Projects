import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { Home } from './Home/Home'
import { Header} from './Header/Header'
import { Footer } from './Footer/Footer'
import { About } from './About/About'
import { Contact } from './Contact/Contact'
import { Productdetails } from './Productdetails/Productdetails'
import Addtocart from './Addtocart/Addtocart'


function App() {
  return (
<>
  <BrowserRouter>
 <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='product-details/:id' element={<Productdetails/>}/>
      <Route path='cart' element={<Addtocart/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
    </Routes>
    <Footer/>
  </BrowserRouter>
</>  
  )
}

export default App

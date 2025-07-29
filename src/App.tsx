import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Home from "./Components/Home/Home";
import './index.css'
import Footer from "./Components/Footer/Footer";
import AboutPage from "./Components/AboutPage/AboutPage";
import Contacts from "./Components/Contacts/Contacts";
import Products from "./Components/Products/Products";

export default function App() {

 
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/'>
          <Route path='/' element={<Navigate to="/home" replace />}/>
          <Route path="home" element={<Home />} />
          <Route path="about-us" element={<AboutPage />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="products" element={<Products />} />
        </Route>
      </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

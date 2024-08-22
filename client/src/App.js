import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import Footer from "./Components/Footer";
import ProductModal from '../src/Components/ProductModal/index';
import Listing from "./Pages/Listing";
import ProductDetails from "./Pages/ProductDetails";
import Cart from "./Pages/Cart";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";

const MyContext = createContext();

function App() {

  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setselectedCountry] = useState('');
  const [isOpenProductModal, setisOpenProductModal] = useState(false);
  const [isHeaderFooterShow, setisHeaderFooterShow] = useState(true);
  const [isLogin,setIsLogin] = useState(false);

  useEffect(() => {
    getCountry('https://countriesnow.space/api/v0.1/countries/');
  }, [])

  const getCountry = async (url) => {
    const responsive = await axios.get(url).then((res) => {
      setCountryList(res.data.data);
      console.log(res.data.data);
    });
  }

  const values = {
    countryList,
    selectedCountry,
    setselectedCountry,
    setisOpenProductModal,
    isOpenProductModal,
    isHeaderFooterShow,
    setisHeaderFooterShow,
    isLogin,
    setIsLogin
  }

  return (
    <>
      <BrowserRouter>

        <MyContext.Provider value={values}>
          {
            isHeaderFooterShow === true && <Header />
          }
          <Routes>
            <Route path='/' element={<Home />} exact={true} />
            <Route path='/cat/:id' element={<Listing />} exact={true} />
            <Route path='/product/:id' element={<ProductDetails />} exact={true} />
            <Route path='/cart' element={<Cart />} exact={true} />
            <Route path='/signIn' element={<SignIn />} exact={true} />
            <Route path='/signUp' element={<SignUp />} exact={true} />
          </Routes>
          {
            isHeaderFooterShow === true && <Footer />
          }


          {
            isOpenProductModal === true && <ProductModal />
          }
        </MyContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;

export { MyContext };

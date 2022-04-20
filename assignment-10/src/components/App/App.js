import "./App.css";
import React, { createContext } from "react";
import {  Route, Routes} from "react-router-dom";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import Services from "../Services/Services";
import Blogs from "../Blogs/Blogs";
import AboutMe from "../AboutMe/AboutMe";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import CheckOut from "../CheckOut/CheckOut";
import Thankyou from "../Thankyou/Thankyou";
import useBlogs from "../hooks/useBlogs";
import useServices from "../hooks/useServices";
import NotFound from "../NotFound/NotFound";
import useReviews from "../hooks/useReviews";
import Header from "../Header/Header"
import RequireAuth from "../RequireAuth/RequireAuth";
import { Toaster } from "react-hot-toast";
import Schedule from "../Schedule/Schedule";



export const AllContext = createContext();



function App() {

  const blogs = useBlogs();
  const services = useServices();
  const reviews = useReviews();

  return (
    <AllContext.Provider value={{blogs, services, reviews}}>
      <Header></Header>
      <Toaster></Toaster>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/services" element={<Services></Services>}></Route>
          <Route path="/blogs" element={<Blogs></Blogs>}></Route>
          <Route path="/about-me" element={<AboutMe></AboutMe>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/sign-up" element={<SignUp></SignUp>}></Route>
          <Route path="/checkout" element={
            <RequireAuth>
              <CheckOut></CheckOut>
            </RequireAuth>
          }></Route>
          <Route path="/checkout/:service" element={
            <RequireAuth>
              <CheckOut></CheckOut>
            </RequireAuth>
          }></Route>
          <Route path="/schedule" element={
            <RequireAuth>
              <Schedule></Schedule>
            </RequireAuth>
          }></Route>
          <Route path="/thankyou" element={<Thankyou></Thankyou>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
      <Footer></Footer>
    </AllContext.Provider>
  );
}

export default App;

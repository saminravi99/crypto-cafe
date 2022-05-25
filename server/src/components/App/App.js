import "./App.css";
import React, { createContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import RequireAuth from "../RequireAuth/RequireAuth";
import { Toaster } from "react-hot-toast";
import auth from "../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import useToken from "../hooks/useToken";
import Payment from "../Payment/Payment";
import Home from "../Home/Home";
import Header from "../Header/Header";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import Blogs from "../Blogs/Blogs";
import Footer from "../Footer/Footer";
import NotFound from "../NotFound/NotFound";
import Dashboard from "../Dashboard/Dashboard";
import AddProduct from "../AddProduct/AddProduct";
import Portfolio from "../Portfolio/Portfolio";
import ManageOrders from "../ManageOrders/ManageOrders";
import ManageProduct from "../ManageProduct/ManageProduct";
import AllProducts from "../AllProducts/AllProducts";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import MyProfile from "../MyProfile/MyProfile";
import AddReview from "../AddReview/AddReview";
import ContactUs from "../ContactUs/ContactUs";
import MyOrders from "../MyOrders/MyOrders";
import UpdateProfile from "../UpdateProfile/UpdateProfile";
import RequireAdmin from "../RequireAdmin/RequireAdmin";
import ConfirmPurchase from "../ConfirmPurchase/ConfirmPurchase";
import axiosPrivate from "../../api/axiosPrivate";

export const AllContext = createContext();

function App() {
  //React Firebase Hook
  const [authUser] = useAuthState(auth);
  console.log(authUser);

  useEffect(() => {
    if (authUser) {
      axiosPrivate
        .put(
          `http://localhost:5000/user/${authUser?.email}`,
          { email: authUser?.email, role: "user" },
          {
            headers: {
              email: authUser.email,
            },
          }
        )
        .then((response) => {
          const { data } = response;
          if (data.insertedId) {
            console.log("User added to database");
          }
        });
    }
  }, [authUser]);

  //Custom Hook For creating JWT Token For Social Login, Email Password Login And SignUp
  const [token] = useToken(authUser);
  console.log(token);

  // Custom Hook For Fetching All Books From The Server API
  // const [books] = useBooks();

  return (
    <AllContext.Provider value={{}}>
      <div>
        <div>
          <Header></Header>
        </div>
        <Toaster></Toaster>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/payment/:id"
            element={
              <RequireAuth>
                <Payment />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/confirm-purchase/:id"
            element={
              <RequireAuth>
                <ConfirmPurchase />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/dashboard"
            element={
              <RequireAuth>
                <Dashboard></Dashboard>
              </RequireAuth>
            }
          >
            <Route
              path="manage-product"
              element={
                <RequireAdmin>
                  <ManageProduct></ManageProduct>
                </RequireAdmin>
              }
            ></Route>
            <Route
              path="my-orders"
              index
              element={
                <RequireAuth>
                  <MyOrders></MyOrders>
                </RequireAuth>
              }
            ></Route>
            <Route
              path="make-admin"
              element={
                <RequireAdmin>
                  <MakeAdmin></MakeAdmin>
                </RequireAdmin>
              }
            ></Route>
            <Route
              path="my-profile"
              element={
                <RequireAuth>
                  <MyProfile></MyProfile>
                </RequireAuth>
              }
            ></Route>
            <Route
              path="add-review"
              element={
                <RequireAuth>
                  <AddReview></AddReview>
                </RequireAuth>
              }
            ></Route>

            <Route
              path="add-product"
              element={
                <RequireAdmin>
                  <AddProduct />
                </RequireAdmin>
              }
            ></Route>
            <Route
              path="manage-orders"
              element={
                <RequireAdmin>
                  <ManageOrders></ManageOrders>
                </RequireAdmin>
              }
            ></Route>
          </Route>

          <Route path="/blogs" element={<Blogs />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path="/all-products" element={<AllProducts />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/sign-up" element={<SignUp />}></Route>
          <Route path="/contact" element={<ContactUs />}></Route>
          <Route
            path="/edit-profile"
            element={
              <RequireAuth>
                <UpdateProfile></UpdateProfile>
              </RequireAuth>
            }
          ></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </AllContext.Provider>
  );
}

export default App;

import React, { createContext, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Toaster } from "react-hot-toast";
import {
  QueryClient,
  QueryClientProvider
} from "react-query";
import { Route, Routes } from "react-router-dom";
import axiosPrivate from "../../api/axiosPrivate";
import AddProduct from "../AddProduct/AddProduct";
import AddReview from "../AddReview/AddReview";
import AllProducts from "../AllProducts/AllProducts";
import Blogs from "../Blogs/Blogs";
import ConfirmPurchase from "../ConfirmPurchase/ConfirmPurchase";
import ContactUs from "../ContactUs/ContactUs";
import Dashboard from "../Dashboard/Dashboard";
import auth from "../firebase.init";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Home from "../Home/Home";
import useToken from "../hooks/useToken";
import Login from "../Login/Login";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ManageOrders from "../ManageOrders/ManageOrders";
import ManageProduct from "../ManageProduct/ManageProduct";
import MyOrders from "../MyOrders/MyOrders";
import MyProfile from "../MyProfile/MyProfile";
import NotFound from "../NotFound/NotFound";
import Payment from "../Payment/Payment";
import Portfolio from "../Portfolio/Portfolio";
import RequireAdmin from "../RequireAdmin/RequireAdmin";
import RequireAuth from "../RequireAuth/RequireAuth";
import RequireNormalUser from "../RequireNormalUser/RequireNormalUser";
import SignUp from "../SignUp/SignUp";
import UpdateProfile from "../UpdateProfile/UpdateProfile";
import "./App.css";

export const AllContext = createContext();
const queryClient = new QueryClient();

function App() {
  //React Firebase Hook
  const [authUser] = useAuthState(auth);
  console.log(authUser);

  useEffect(() => {
    if (authUser) {
      axiosPrivate
        .put(
          `https://manufacturer-xpart.herokuapp.com/user/${authUser?.email}`,
          { email: authUser?.email, role: "user" },
          {
            headers: {
              email: `${authUser?.email}`,
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
    <QueryClientProvider client={queryClient}>
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
                  <RequireNormalUser>
                    <Payment />
                  </RequireNormalUser>
                </RequireAuth>
              }
            ></Route>
            <Route
              path="/confirm-purchase/:id"
              element={
                <RequireAuth>
                  <RequireNormalUser>
                    <ConfirmPurchase />
                  </RequireNormalUser>
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
                    <RequireNormalUser>
                      <MyOrders></MyOrders>
                    </RequireNormalUser>
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
                    <RequireNormalUser>
                      <AddReview></AddReview>
                    </RequireNormalUser>
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
    </QueryClientProvider>
  );
}

export default App;

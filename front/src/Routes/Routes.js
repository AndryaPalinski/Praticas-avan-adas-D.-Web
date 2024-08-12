import React from "react";
import {Routes, Route, BrowserRouter} from 'react-router-dom';

// Importações da pages
import Login from "../pages/login";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import FollowerProfile from "../pages/FollowerProfile";
import Community from "../pages/Community";
import AddBook from "../pages/AddBooks";
import PersonalLibrary from "../pages/PersonalLibrary"
import Footer from "../components/Footer";
import Header from "../components/Header";
import DecorativeBar from "../components/Perfumaria";

function Router () {
    return(
        <BrowserRouter>
        <Routes>

             <Route element={<Home/>} path="/Home" exact Component={Home}></Route>
            <Route element={<Login/>} path="/" exact Component={Login}></Route>
        
            <Route element={<Profile/>} path="/Profile" exact Component={Profile}></Route>
            <Route element={<FollowerProfile/>} path="/follower/:id" exact component={FollowerProfile} />
            <Route element={<PersonalLibrary/>} path="/personal-library" exact component={PersonalLibrary} />
         
            <Route element={<Community/>} path="/Community" exact Component={Community}></Route>
            <Route element={<AddBook/>} path="/AddBook" exact Component={AddBook}></Route>

        </Routes>
        </BrowserRouter>
        
    )
}
export default Router;
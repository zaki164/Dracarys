import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { CompLoader } from '../components';

const Home = React.lazy(() => import("../Pages/Home/Home"));
const BlackFriday = React.lazy(() => import("../Pages/BlackFriday/BlackFriday"));
const About = React.lazy(() => import("../Pages/About/About"));
const Blog = React.lazy(() => import("../Pages/Blog/Blog"));
const Chart = React.lazy(() => import("../Pages/Chart/Chart"));
const Contact = React.lazy(() => import("../Pages/Contact/Contact"));
const Favourite = React.lazy(() => import("../Pages/Favourite/Favourite"));
const Login = React.lazy(() => import("../Pages/Login/Login"));
const SignUp = React.lazy(() => import("../Pages/SignUp/SignUp"));
const Products = React.lazy(() => import("../Pages/Products/Products"));
const Product = React.lazy(() => import("../Pages/Product/Product"));

const Router = () => {
  return (
    <Suspense fallback={<CompLoader />}>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/BlackFriday' element={<BlackFriday />} />
        <Route path='/About' element={<About />} />
        <Route path='/Blog' element={<Blog />} />
        <Route path='/Chart' element={<Chart />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Favourite' element={<Favourite />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/Products' element={<Products />} />
        <Route path='/Products/:id' element={<Product />} />
      </Routes>
    </Suspense>
  )
}

export default Router
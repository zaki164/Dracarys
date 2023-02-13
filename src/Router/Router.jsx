import React, { Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { CompLoader } from '../components';

const Home = React.lazy(() => import("../Pages/Home/Home"));
const BlackFriday = React.lazy(() => import("../Pages/BlackFriday/BlackFriday"));
const About = React.lazy(() => import("../Pages/About/About"));
const Blog = React.lazy(() => import("../Pages/Blog/Blog"));
const Chart = React.lazy(() => import("../Pages/Chart/Chart"));
const Contact = React.lazy(() => import("../Pages/Contact/Contact"));
const Favourite = React.lazy(() => import("../Pages/Favourite/Favourite"));
const Profile = React.lazy(() => import("../Pages/Profile/Profile"));
const Products = React.lazy(() => import("../Pages/Products/Products"));
const Product = React.lazy(() => import("../Pages/Product/Product"));

const Router = () => {
  const { isLoading, error, user } = useAuth0();
  error && <h1>error...something went wrong... </h1>
  !error && isLoading && <CompLoader />
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
        <Route path='/Profile' element={!user ? <Navigate replace to={"/"} /> : <Profile /> } />
        <Route path='/Products' element={<Products />} />
        <Route path='/Products/:id' element={<Product />} />
      </Routes>
    </Suspense>
  )
}

export default Router
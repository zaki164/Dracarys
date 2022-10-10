import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'aos/dist/aos.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import { About, BlackFriday, Blog, Chart, Contact, Favourite, Home, Login, Product, Products, SignUp } from './Pages';
import { Footer, Navbar, Summary } from './components';

import './App.css';

import AOS from 'aos';
AOS.init({
  once: true,
});

const App = () => (
  <Router>
    <Summary />
    <Navbar />
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
    <Footer />
  </Router>
);

export default App;

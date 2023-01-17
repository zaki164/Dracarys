import "bootstrap/dist/css/bootstrap.min.css";
import 'aos/dist/aos.css';
import './sass/App.scss';
import { HashRouter as Router } from 'react-router-dom';
import AOS from 'aos';
import Layout from "./Layout/Layout";
AOS.init({
  once: true,
});

const App = () => (
  <Router>
    <Layout />
  </Router>
);

export default App;

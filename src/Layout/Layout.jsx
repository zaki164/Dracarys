import { Footer, Navbar, Summary } from '../components';
import Router from "../Router/Router";

const Layout = () => {
  return (
    <>
      <Summary />
      <Navbar />
      <Router />
      <Footer />
    </>
  )
}

export default Layout
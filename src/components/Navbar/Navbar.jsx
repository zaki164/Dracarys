import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { faMagnifyingGlass, faUser, faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { useRef, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './Navbar.scss';

const Navbar = () => {
  const { loginWithPopup, user } = useAuth0();
  const favItemsLength = useSelector(state => state.fav.length);
  const chartItemsLength = useSelector(state => state.chart.length);
  const headerref = useRef();
  const toggleref = useRef();
  const navref = useRef();
  const searchref = useRef();
  const inputref = useRef();
  const stopPropa = (e) => {
    e.stopPropagation();
  }
  const handleclassopen = (...ele) => {
    ele.forEach((element) => {
      element.current.classList.toggle('open');
    })
  }
  const handlesearch = (e) => {
    stopPropa(e);
    handleclassopen(searchref);
    if (searchref.current.classList.contains('open')) {
      inputref.current.focus();
      if (navref.current.classList.contains('open')) {
        handleclassopen(toggleref, navref);
      }
    } else {
      inputref.current.value = '';
    }
  }
  const handlenav = (e) => {
    stopPropa(e);
    handleclassopen(toggleref, navref);
    if (searchref.current.classList.contains('open')) {
      handleclassopen(searchref);
      inputref.current.value = '';
    }
  }
  useEffect(() => {
    document.addEventListener('click', (e) => {
      if (e.target !== toggleref) {
        if (navref.current.classList.contains('open')) {
          handleclassopen(toggleref, navref);
        }
      }
    })
    document.addEventListener('click', (e) => {
      if (e.target !== searchref && e.target !== inputref) {
        if (searchref.current.classList.contains('open')) {
          handleclassopen(searchref);
          inputref.current.value = '';
        }
      }
    })
    window.onscroll = () => {
      if (window.scrollY >= 50) {
        headerref.current.classList.add('scroll')
      } else {
        headerref.current.classList.remove('scroll')
      }
    }
  })
  return (
    <header ref={headerref}>
      <Container className='d-flex align-items-center position-relative'>
        <NavLink exact="true" to='/' className="logo">Dracarys</NavLink>
        <nav className='d-flex justify-content-evenly align-items-center flex-grow-1'>
          <div className="pages mt-2" ref={navref}>
            <NavLink exact="true" to='/'>Home</NavLink>
            <NavLink exact="true" to='/Products'>Products</NavLink>
            <NavLink exact="true" to='/BlackFriday' className="sale">BlackFriday</NavLink>
            <NavLink exact="true" to='/Blog'>Blog</NavLink>
            <NavLink exact="true" to='/About'>About</NavLink>
            <NavLink exact="true" to='/Contact'>Contact</NavLink>
            {!user && (
              <div className='auth d-inline-block'>
                <button className='custom_button log me-2 ms-3 ms-lg-1' onClick={() => loginWithPopup()}>Log in</button>
                <button className='custom_button sign' onClick={() => loginWithPopup({
                  authorizationParams: {
                    screen_hint: "signup",
                  },
                })}>Sign up</button>
              </div>
            )}
          </div>
          <div className="info d-flex mt-2">
            <div className='search' ref={searchref} onClick={handlesearch}>
              <input type="text" placeholder='Search...' name='search' ref={inputref} onClick={stopPropa} />
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
            <NavLink exact="true" to='/Favourite'>
              <span className='number'>{favItemsLength}</span>
              <FontAwesomeIcon icon={faHeart} />
            </NavLink>
            <NavLink exact="true" to='/Chart'>
              <span className='number'>{chartItemsLength}</span>
              <FontAwesomeIcon icon={faCartShopping} />
            </NavLink>
            {user && <NavLink exact="true" to='/Profile' className="profile"><img src={user.picture} alt="profile img" /></NavLink>}
            <div className="toggle d-lg-none" ref={toggleref} onClick={handlenav}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </nav>
      </Container>
    </header>
  )
}
export default Navbar;

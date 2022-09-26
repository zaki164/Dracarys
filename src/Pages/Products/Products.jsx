import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef, useEffect } from 'react';
import mixitup from 'mixitup';
import { Data } from '../../constants';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import './Products.css';
import { useDispatch, useSelector } from 'react-redux';
import {addItemtochart, addItemtofav, deleteFavItem } from '../../redux/action';
import AOS from 'aos';
AOS.init({
  once: false,
});

const Products = () => {
  const favItems = useSelector(state => state.fav)
  const dispatch = useDispatch();
  const catsref = useRef();
  const route = useNavigate();
  const handlepropa = (e) => {
    e.stopPropagation();
  }
  const handlefav = (ele) => {
    if (favItems.some(el => el.id === ele.id)) {
      dispatch(deleteFavItem(ele))
    } else {
      dispatch(addItemtofav(ele));
    }
  }
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
    mixitup(".row", {
      selectors: {
        target: ".mix",
      },
      animation: {
        duration: 600
      }
    });
    let catfilter = window.location.hash && `.${[...window.location.hash].slice(1).join("").toLocaleLowerCase()}`
    let lis = [...catsref.current.children];
    lis.forEach(li => {
      li.addEventListener('click', () => {
        lis.forEach(li => li.classList.remove('active'));
        li.classList.add('active');
      })
      window.location.hash && li.dataset.filter === catfilter && li.click()
    })
  }, [])
  return (
    <section className='products section_padding'>
      <h2 className='main_heading'>Our Products</h2>
      <ul className='products_categories flex_center' ref={catsref}>
        <li className='active' data-filter="all">All</li>
        <li data-filter=".men">Men</li>
        <li data-filter=".women">Women</li>
        <li data-filter=".accessories">Accessories</li>
        <li data-filter=".shoes">Shoes</li>
        <li data-filter=".watches">Watches</li>
        <li data-filter=".onsale">OnSale</li>
      </ul>
      <Container className="my-5">
        <Row>
          {
            Data.map(ele => (
              <Col xs={12} sm={6} md={4} lg={3} key={ele.id} className={`mb-4 ${ele.category.toLowerCase()} mix`}>
                <div className="product" onClick={() => route(`/Products/${ele.id}`)} data-aos="fade-up">
                  <div className="image_hold">
                    <img src={ele.img} alt="product" className='mw-100' />
                    <ul className="product_option" onClick={handlepropa}>
                      <li onClick={() => handlefav(ele)} className={ favItems.map(el => el.id === ele.id ? 'favicon': '').join("")}></li>
                      <li onClick={() => dispatch(addItemtochart(ele))}><FontAwesomeIcon icon={faCartShopping} /></li>
                    </ul>
                  </div>
                  <div className="product_info">
                    <p className='image_desc'>{ele.name}</p>
                    <div className='price'><span className='currentPrice'>${ele.price}</span>{ele.oldprice && (<span className='oldprice'>${ele.oldprice}</span>)}</div>
                  </div>
                </div>
              </Col>
            ))
          }
        </Row>
      </Container>
    </section>
  )
}

export default Products
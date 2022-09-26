import { faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regfaHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { Data } from '../../constants';
import { addItemtofav, addItemtochart, deleteFavItem } from '../../redux/action';
import './Product.css';
import { useEffect } from 'react';

const Product = () => {
  const favItems =  useSelector(state => state.fav);
  const dispatch = useDispatch();
  const { id } = useParams();
  const svgicon = useRef()
  let myp = Data.find(ele => {
    return ele.id === parseInt(id)
  })
  const [togglefav, settogglefav] = useState(false)
  let handlefav = () => {
    settogglefav(!togglefav);
    if (!togglefav) {
      dispatch(addItemtofav(myp))
    } else {
      dispatch(deleteFavItem(myp))
    }
  }
  useEffect(() => {
    favItems.some(ele => ele.id === myp.id) && settogglefav(true) 
  }, [])
  return (
    <section className='Product section_padding'>
      <Container>
        {
          <Row>
            <Col xs={12} md={6} className="flex_center">
              <div className="Product_image_holder">
                <img src={myp.img} alt="product" />
              </div>
            </Col>
            <Col xs={12} md={6} className="flex_center mt-sm-4">
              <div className="product_info flex_center flex-column gap-2">
                <p className='cat'>{myp.category}</p>
                <p className='name'>{myp.name}</p>
                <p className='rating'>Rating <span>4.9</span> <FontAwesomeIcon icon={faStar} /></p>
                <div className='price'><span className='currentPrice'>${myp.price}</span>{myp.oldprice && (<span className='oldprice'>${myp.oldprice}</span>)}</div>
                <p className='text text-center'>This Product is Great to choose, You Will be A Special, And You should Follow Us Because our Amazing Next Products</p>
                <span className='fav' ref={svgicon} onClick={handlefav}>{ togglefav ? <FontAwesomeIcon icon={faHeart} /> : <FontAwesomeIcon icon={regfaHeart} />}</span>
                <div className="linkstochart d-flex gap-2">
                  <button className='addtochart' onClick={() => dispatch(addItemtochart(myp))}>Add To Chart</button>
                  <Link className='gotochart custom_button' to='/Chart'>Go To Chart</Link>
                </div>
                <Link className='backtopro' to="/Products">Back To Products</Link>
              </div>
            </Col>
          </Row>
        }
      </Container>
    </section>
  )
}

export default Product
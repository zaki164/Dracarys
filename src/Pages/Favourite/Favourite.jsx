import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addItemtochart, deleteFavItem } from '../../redux/action';
import './Favourite.css';

const Favourite = () => {
  const favItems = useSelector(state => state.fav);
  const dispatch = useDispatch();
  return (
    <section className="Favourite section_padding">
      <h2 className='main_heading'>Favourits</h2>
      <Container>
        <Row>
          {
            favItems.length > 0 ? favItems.map(ele => (
              <Col xs={12} className="mb-5" key={ele.id}>
                <div className="favItem">
                  <div className="favItem_remove" onClick={() => dispatch(deleteFavItem(ele))}>
                    <FontAwesomeIcon icon={faXmark} />
                  </div>
                  <div className="favItem_image text-center">
                    <img src={ele.img} alt="favitem img" />
                  </div>
                  <div className="favItem_info flex_center flex-column">
                    <p className='name'>{ele.name}</p>
                    <div className='price'><span className='currentPrice'>${ele.price}</span>{ele.oldprice && (<span className='oldprice'>${ele.oldprice}</span>)}</div>
                    <div className='favItem_options flex_center'>
                      <ul className='colors'>
                        <li></li>
                        <li></li>
                        <li></li>
                      </ul>
                      <select name="size" className='form-select' defaultValue="sm">
                        <option value="xs">xs</option>
                        <option value="sm">sm</option>
                        <option value="md">md</option>
                        <option value="lg">lg</option>
                        <option value="xlg">xlg</option>
                        <option value="2xlg">2xlg</option>
                        <option value="3xlg">3xlg</option>
                      </select>
                    </div>
                    <div className="linkstochart d-flex gap-2">
                      <button className='addtochart' onClick={() => dispatch(addItemtochart(ele))}>Add To Cart</button>
                      <Link className='gotochart custom_button' to='/Chart'>Go To Cart</Link>
                    </div>
                  </div>
                </div>
              </Col>
            )) : <p className='noItems'>No Items yet</p>
          }
        </Row>
      </Container>
    </section>
  )
}

export default Favourite
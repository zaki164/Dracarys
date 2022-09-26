import { Col, Container, Row } from 'react-bootstrap';
import './Category.css';
import { images } from '../../constants';
import { Link, useNavigate } from 'react-router-dom';
import AOS from 'aos';
AOS.init();
const Category = () => {
  const route = useNavigate();
  return (
    <section className='Category section_padding' data-aos={"fade-up"}>
      <Container>
        <Row className='flex_center'>
          <Col xs={12} md={6} lg={4} className="mb-4 mb-lg-0" onClick={() => route('/Products#Men')}>
            <div className="image_holder">
              <img src={images.cat1} alt="Category" />
              <div className="cat">
                <p>Men's Fashion</p>
                <Link to='/Products'>Shop Now</Link>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} lg={4} className="mb-4 mb-lg-0" onClick={() => route('/Products#Accessories')}>
            <div className="image_holder">
              <img src={images.cat2} alt="Category" />
              <div className="cat">
                <p>Accessories</p>
                <Link to='/Products'>Shop Now</Link>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} lg={4} className="mb-4 mb-lg-0" onClick={() => route('/Products#Women')}>
            <div className="image_holder">
              <img src={images.cat3} alt="Category" />
              <div className="cat">
                <p>Women's Fashion</p>
                <Link to='/Products'>Shop Now</Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Category
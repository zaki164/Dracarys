import { Col, Container, Row } from 'react-bootstrap';
import './OurAdvantages.css';
import { images } from '../../constants';

const OurAdvantages = () => {
  return (
    <section className='OurAdvantages section_padding' data-aos={"fade-up"}>
      <h2 className='main_heading'>Our Services</h2>
      <Container>
        <Row>
          <Col xs={12} sm={6} lg={3} className="flex_center flex-column mb-4 mb-lg-0 text-center col">
            <img src={images.services1} alt="OurAdvantage" />
            <p className='adv_title'>Fast & Free Delivery</p>
            <p className='adv_text'>Free delivery on all orders</p>
          </Col>
          <Col xs={12} sm={6} lg={3} className="flex_center flex-column mb-4 mb-lg-0 text-center col">
            <img src={images.services2} alt="OurAdvantage" />
            <p className='adv_title'>Secure Payment</p>
            <p className='adv_text'>Free delivery on all orders</p>
          </Col>
          <Col xs={12} sm={6} lg={3} className="flex_center flex-column mb-4 mb-lg-0 text-center col">
            <img src={images.services3} alt="OurAdvantage" />
            <p className='adv_title'>Money Back Guarantee</p>
            <p className='adv_text'>Free delivery on all orders</p>
          </Col>
          <Col xs={12} sm={6} lg={3} className="flex_center flex-column mb-4 mb-lg-0 text-center col">
            <img src={images.services4} alt="OurAdvantage" />
            <p className='adv_title'>Online Support</p>
            <p className='adv_text'>Free delivery on all orders</p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default OurAdvantages;
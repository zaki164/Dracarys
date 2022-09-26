import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import './Contact.css';
import AOS from 'aos';
AOS.init({
  once: true,
});

const Contact = () => {
  const route = useNavigate();
  return (
    <section className='contact'>
      <section className='contact_img'></section>
      <main>
        <Container>
          <Row>
            <Col xs={12} md={6} className="pe-0 col" data-aos="fade-up">
              <div className="contact_message">
                <h4>Send Us A Message</h4>
                <form action="#">
                  <input type="text" placeholder='Your Email Address' />
                  <textarea name="Help" cols="30" rows="10" placeholder='How Can We Help ?'></textarea>
                  <button className='custom_button w-100' onClick={() => route('/')}>Submit</button>
                </form>
              </div>
            </Col>
            <Col xs={12} md={6} className="ps-0 col flex_center" data-aos="fade-up">
              <div className="contact_address">
                <div className='address'>
                  <FontAwesomeIcon icon={faLocationDot} />
                  <div>
                    <p>Address</p>
                    <p className='address_text'>Dracarys Center 8th floor, 379 Hudson St, New York, NY 10018 US</p>
                  </div>
                </div>
                <div>
                  <FontAwesomeIcon icon={faPhone} />
                  <div>
                    <p>Lets Talk</p>
                    <p>+1 800 1236879</p>
                  </div>
                </div>
                <div>
                  <FontAwesomeIcon icon={faEnvelope} />
                  <div>
                    <p>Sale Support</p>
                    <p>contact@example.com</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </main>
    </section>
  )
}

export default Contact
import './FollowInsta.css';
import { images } from '../../constants';
import { Row } from 'react-bootstrap';
import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
AOS.init();

const FollowInsta = () => {
  const galleryref = useRef();
  const scroll = (direction) => {
    if (direction === 'left') {
      galleryref.current.scrollLeft -= 500;
    } else {
      galleryref.current.scrollLeft += 500;
    }
  }
  const imgarray = [images.insta10, images.insta2, images.insta3, images.insta4, images.insta5, images.insta6, images.insta7, images.insta8, images.insta9, images.insta1, images.insta11, images.insta12];
  return (
    <section className='FollowInsta section_padding' data-aos={"fade-up"}>
      <h2 className='main_heading'>Follow Us On Instagram</h2>
      <Row ref={galleryref}>
        {
          imgarray.map((ele, i) => (
            <div className="image_holder col-6 col-md-4 col-lg-3 col-xl-2 col-6 col-sm-4 col-md-3 col-lg-2 col" key={i + 1}>
              <img src={images.testimonial1} alt="instagram"/>
            </div>
          ))
        }
        <div className="scroll_button_right" onClick={() => scroll('right')} >
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
        <div className="scroll_button_left" onClick={() => scroll('left')}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </div>
      </Row>
    </section>
  )
}

export default FollowInsta
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { images } from '../../constants';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import './LatestBlogs.css';

const LatestBlogs = () => {
  return (
    <section className='LatestBlogs section_padding' data-aos={"fade-up"}>
      <h2 className='main_heading'>Latest Blogs</h2>
      <Container>
        <Row className='flex_center'>
          <Col xs={12} md={6} lg={4} className="px-3 mb-4 mb-lg-0 position-relative">
            <LazyLoadImage src={images.xblog1} alt="blog" effect="blur"/>
            <div className="blogs_info">
              <p className='blogs_info_title'>Here are the trends I see coming this fall</p>
              <p className='blogs_info_text'>BY Admin | DEC 01, 2017</p>
              <Link to="/Blog">Read more</Link>
            </div>
          </Col>
          <Col xs={12} md={6} lg={4} className="px-3 mb-4 mb-lg-0 position-relative">
            <LazyLoadImage src={images.xblog2} alt="blog" effect="blur"/>
            <div className="blogs_info">
              <p className='blogs_info_title'>Here are the trends I see coming this fall</p>
              <p className='blogs_info_text'>BY Admin | DEC 01, 2017</p>
              <Link to="/Blog">Read more</Link>
            </div>
          </Col>
          <Col xs={12} md={6} lg={4} className="px-3 mb-4 mb-lg-0 position-relative">
            <LazyLoadImage src={images.xblog3} alt="blog" effect="blur"/>
            <div className="blogs_info">
              <p className='blogs_info_title'>Here are the trends I see coming this fall</p>
              <p className='blogs_info_text'>BY Admin | DEC 01, 2017</p>
              <Link to="/Blog">Read more</Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default LatestBlogs
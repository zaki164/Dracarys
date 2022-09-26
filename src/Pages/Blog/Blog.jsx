import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { images } from '../../constants';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './Blog.css';

const Blog = () => {
  return (
    <section className='blog'>
      <section className='blog_img'></section>
      <main >
        <Container>
          <Row >
            <Col xs={12} md={8}>
              <div className="blog_figures">
                <figure>
                  <div className="date"><span>22</span>Jan 2018</div>
                  <img src={images.blog2} alt="blog" />
                  <figcaption>
                    <p className='title'>8 Inspiring Ways to Wear Dresses in the Winter</p>
                    <p className='text'>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius</p>
                    <div className="info">
                      <p>By <span>Admin</span><span className='info_text'> StreetStyle, Fashion, Couple </span><span>8 Comments</span></p>
                      <Link to="/Blog" className='continue'><span> Continue Reading </span><FontAwesomeIcon icon={faArrowRight} /> </Link>
                    </div>
                  </figcaption>
                </figure>
                <figure>
                  <div className="date"><span>18</span>Jan 2018</div>
                  <img src={images.blog3} alt="blog" />
                  <figcaption >
                    <p className='title'>The Great Big List of Men's Gifts for the Holidays</p>
                    <p className='text'>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius</p>
                    <div className="info">
                      <p>By <span>Admin</span><span className='info_text'> StreetStyle, Fashion, Couple </span><span>5 Comments</span></p>
                      <Link to="/Blog" className='continue'><span> Continue Reading </span><FontAwesomeIcon icon={faArrowRight} /> </Link>
                    </div>
                  </figcaption>
                </figure>
                <figure>
                  <div className="date"><span>14</span>Jan 2018</div>
                  <img src={images.blog4} alt="blog" />
                  <figcaption>
                    <p className='title'>5 Winter-to-Spring Fashion Trends to Try Now</p>
                    <p className='text'>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius</p>
                    <div className="info">
                      <p>By <span>Admin</span><span className='info_text'> StreetStyle, Fashion, Couple </span><span>12 Comments</span></p>
                      <Link to="/Blog" className='continue'><span> Continue Reading </span><FontAwesomeIcon icon={faArrowRight} /> </Link>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </Col>
            <Col xs={12} md={4} className="mt-4 mt-md-0">
              <div className="blog_features">
                <form action="#">
                  <input type="text" placeholder='Search'/>
                </form>
                <p className='blog_features_title'>Categories</p>
                <ul className='cat'>
                  <li><Link to="/products">Fashion</Link></li>
                  <li><Link to="/Products">Beauty</Link></li>
                  <li><Link to="/Products">Street Style</Link></li>
                  <li><Link to="/Products">Life Style</Link></li>
                  <li><Link to="/Products">DIY & Crafts</Link></li>
                </ul>
                <p className='blog_archive_title'>Archive</p>
                <ul className='arch'>
                  <li><Link to="/Blog"><span>July 2018</span><span>(9)</span></Link></li>
                  <li><Link to="/Blog"><span>June 2018</span><span>(39)</span></Link></li>
                  <li><Link to="/Blog"><span>May 2018</span><span>(29)</span></Link></li>
                  <li><Link to="/Blog"><span>April 2018</span><span>(35)</span></Link></li>
                  <li><Link to="/Blog"><span>March 2018</span><span>(22)</span></Link></li>
                  <li><Link to="/Blog"><span>February 2018</span><span>(32)</span></Link></li>
                  <li><Link to="/Blog"><span>Jan 2018</span><span>(21)</span></Link></li>
                  <li><Link to="/Blog"><span>Dec 2017</span><span>(62)</span></Link></li>
                </ul>
                <p className='blog_tags_title'>Tags</p>
                <ul className='tags'>
                  <li><Link to="/products">Fashion</Link></li>
                  <li><Link to="/Products">Lifestyle</Link></li>
                  <li><Link to="/Products">Denim</Link></li>
                  <li><Link to="/Products">Streetstyle</Link></li>
                  <li><Link to="/Products">Crafts</Link></li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </main>
    </section>
  )
}

export default Blog
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Autoplay } from "swiper";

import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addItemtochart, addItemtofav, deleteFavItem } from '../../redux/action';
import { Data } from '../../constants';
import './Trending.css';

const trendarr = Data.filter(ele => ele.id >= 38 && ele.id <= 41)

const Trending = () => {
  const route = useNavigate();
  const favItems = useSelector(state => state.fav);
  const dispatch = useDispatch();
  let oldprice = true;
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
  return (
    <section className='Trending section_padding' data-aos={"fade-up"}>
      <h2 className='main_heading'>Tending This Week</h2>
      <Container>
        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          slidesPerGroup={1}
          initialSlide={2}
          loop={true}
          autoplay={{
            delay: 2000,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
          loopFillGroupWithBlank={true}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
          breakpoints={{
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            992: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
        >
          {
            trendarr.map((ele, i) => (
              <SwiperSlide key={i + 1}>
                <figure onClick={() => route('Products')}>
                  <div className="trend_image_hold">
                    <img src={ele.img} alt="trending" />
                    <ul className="trend_image_option" onClick={handlepropa}>
                      <li onClick={() => handlefav(ele)} className={favItems.map(el => el.id === ele.id ? 'favicon' : '').join("")}></li>
                      <li onClick={() => dispatch(addItemtochart(ele))}><FontAwesomeIcon icon={faCartShopping} /></li>
                    </ul>
                  </div>
                  <figcaption>
                    <p className='image_desc'>{ele.name}</p>
                    <div className='price'><span className='currentPrice'>${ele.price}</span>{oldprice && (<span className='oldprice'>${ele.oldprice}</span>)}</div>
                  </figcaption>
                </figure>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </Container>
    </section>
  )
}

export default Trending
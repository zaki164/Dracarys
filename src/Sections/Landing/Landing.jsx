import { images } from '../../constants';
import './Landing.css';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper';

import 'swiper/css/bundle';
import 'swiper/css';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const route = useNavigate();
  return (
    <section>
      <Swiper
        modules={[Navigation, Scrollbar, A11y, EffectFade, Autoplay]}
        navigation
        effect="fade"
        loop="true"
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <div className='text'>
            <p className='heading'>Men Collection 2022</p>
            <p className='title'>New Arrival</p>
            <button className='custom_button' onClick={() => route('/products')}>Shop Now</button>
          </div>
          <img src={images.slide3} alt="slide1" />
        </SwiperSlide>
        <SwiperSlide>
          <div className='text'>
            <p className='heading'>Women New Collection</p>
            <p className='title'>New Season</p>
            <button className='custom_button' onClick={() => route('/products')}>Shop Now</button>
          </div>
          <img src={images.slide1} alt="slide2" />
        </SwiperSlide>
        <SwiperSlide>
          <div className='text'>
            <p className='heading'>Men Season</p>
            <p className='title'>Jackets & Coats</p>
            <button className='custom_button' onClick={() => route('/products')}>Shop Now</button>
          </div>
          <img src={images.slide2} alt="slide3" />
        </SwiperSlide>
      </Swiper>
    </section>
  )

};

export default Landing;

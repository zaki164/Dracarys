import { images } from '../../constants';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

import './Testimonials.css';


const Testimonials = () => {
  return (
    <section className='Testimonials section_padding' data-aos={"fade-up"}>
      <h2 className='main_heading'>Testimonials</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper Testimonials_cont"
      >
        <SwiperSlide className="test text-center flex_center flex-column">
          <p className='test_text'>Everybody is different, which is why we offer styles for every body. Laborum fuga incidunt laboriosam voluptas iure, delectus dignissimos facilis neque nulla earum.</p>
          <div className="test_info">
            <img src={images.testimonial1} alt="testimonial" />
            <div className="test_info_name">
              <p>Petey Cruiser</p>
              <span>Designer</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="test text-center flex_center flex-column">
          <p className='test_text'>Everybody is different, which is why we offer styles for every body. Laborum fuga incidunt laboriosam voluptas iure, delectus dignissimos facilis neque nulla earum.</p>
          <div className="test_info">
            <img src={images.testimonial2} alt="testimonial" />
            <div className="test_info_name">
              <p>Ted Lasso</p>
              <span>Coach</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="test text-center flex_center flex-column">
          <p className='test_text'>Everybody is different, which is why we offer styles for every body. Laborum fuga incidunt laboriosam voluptas iure, delectus dignissimos facilis neque nulla earum.</p>
          <div className="test_info">
            <img src={images.testimonial3} alt="testimonial" />
            <div className="test_info_name">
              <p>Darwin Nunez</p>
              <span>Artist</span>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimonials
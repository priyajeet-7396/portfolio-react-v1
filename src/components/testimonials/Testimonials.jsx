import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import {  Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    avatar:AVTR1,
    name: 'Tina Snow',
    review : 'Lorem ipsum dolor sit amet, consectetur adipisiusmod tempor ifugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    avatar:AVTR2,
    name: 'Shatte Wale',
    review : 'Lorem ipsum dolor sit amet, consectetur adipisiusmod tempor ifugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    avatar:AVTR3,
    name: 'kwame Despite',
    review : 'Lorem ipsum dolor sit amet, consectetur adipisiusmod tempor ifugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    avatar:AVTR4,
    name: 'Nana Ama McBrown',
    review : 'Lorem ipsum dolor sit amet, consectetur adipisiusmod tempor ifugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },

]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>
        Review from client
      </h5>
      <h2>
        testimonials
      </h2>
      <Swiper className='container testimonials__container'
         // install Swiper modules
         modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
  
      >
      {
        data.map(({avatar,name,review},index)=>{
          return(
            <SwiperSlide key={index} className='testimonial'>
        <div className='client__avatar'>
          <img src={avatar}  />
        </div>
        <h5 className='client__name'>
           {name}
          </h5>
          <small className='Client__review'>
              {review}
          </small>
      </SwiperSlide>
          )
        })
      }
      </Swiper>
    </section>
  )
}

export default Testimonials


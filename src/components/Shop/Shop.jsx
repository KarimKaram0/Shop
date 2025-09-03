import pro1 from "../images/1.png"
import pro2 from "../images/2.png"
import pro3 from "../images/5.png"
import pro4 from "../images/3.png"
import pro5 from "../images/10.png"


import "../Shop/Shop.css"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState , useEffect } from "react"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useRef } from 'react';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';

import { Link } from "react-router-dom";


export default function Sum() {
const NextP = useRef(null);


    return(
        <>
        <div className="containere">



<div className=" animate__animated animate__backInLeft bg">
     <Swiper
  onSwiper={(swiper) => (NextP.current = swiper)}
  slidesPerView={3}
  centeredSlides={true}
  spaceBetween={30}
  breakpoints={{
    320: { 
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: { 
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: { 
      slidesPerView: 3,
      spaceBetween: 30,
    },
  }}
  navigation={false}
  modules={[Pagination, Navigation]}
  className="mySwiper"
>

        <SwiperSlide><div className="card my-card">
    <div className="images" >
        <div className="image">
        <img src={pro1} className="card-img-top" alt="..."/>
        </div>
        </div>
        <div> 
  <div className="card-body btnn">
    <Link to = "/ShopPage" className="btn btnnn btn-primary">Go To Shop</Link>
  </div>
</div>
</div></SwiperSlide>
        <SwiperSlide><div className="card my-card">
    <div className="images" >
        <div className="image">
        <img src={pro2} className="card-img-top" alt="..."/>
        </div>
        </div>
        <div>
  <div className="card-body btnn">
    <Link to = "/ShopPage" className="btn btnnn btn-primary">Go To Shop</Link>
  </div>
</div>
</div></SwiperSlide>
        <SwiperSlide><div className="card my-card">
    <div className="images" >
        <div className="image">
        <img src={pro3} className="card-img-top" alt="..."/>
        </div>
        </div>
        <div>
  <div className="card-body btnn">
    <Link to = "/ShopPage" className="btn btnnn btn-primary">Go To Shop</Link>
  </div>
</div>
</div></SwiperSlide>
        <SwiperSlide><div className="card my-card">
    <div className="images" >
        <div className="image">
        <img src={pro4} className="card-img-top" alt="..."/>
        </div>
        </div>
        <div>
  <div className="card-body btnn">
    <Link to = "/ShopPage" className="btn btnnn btn-primary">Go To Shop</Link>
  </div>
</div>
</div></SwiperSlide>

<SwiperSlide><div className="card my-card">
    <div className="images" >
        <div className="image">
        <img src={pro5} className="card-img-top" alt="..."/>
        </div>
        </div>
        <div>
  <div className="card-body btnn">
    <Link to = "/ShopPage" className="btn btnnn btn-primary">Go To Shop</Link>
  </div>
</div>
</div></SwiperSlide>
      </Swiper>
</div>


<div className="swipInfo animate__animated animate__backInRight">
    <h2>Featured Categories</h2>
    <p>discover the most trending products in Pixio.</p>
    <div className="next">
        <button onClick={() =>NextP.current.slidePrev() } className="btn  btn-primary"><i className="fas fa-angle-left"> </i></button>
        <button onClick={() =>NextP.current.slideNext() } className="btn right btn-primary"><i className="fas fa-angle-right"> </i></button>

    </div>
</div>



        </div>
        </>
    )
}
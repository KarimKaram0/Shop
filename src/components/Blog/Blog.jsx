import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import CardBtn from "../buttons/button";
import image from "../images/product.jpg";
import produc1 from "../images/banner-media4.png"
import produc2 from "../images/banner-media5.png"
import produc3 from "../images/banner-media2.png"
import produc4 from "../images/banner-media.png"

import "../Blog/Blog.css"
import { useRef } from 'react';
import 'animate.css';
import { Form, Link } from 'react-router-dom';




export default function Blog() {
  const next = useRef(null);
  

  return(
    <>


<h1>Our Products</h1>
    <div className="imgCard ">
    <div className="info animate__animated  animate__backInLeft" >
    <h1 className="h1">Jeans</h1>
    <p className="fs-3 det ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur aut consequatur assumenda eligendi esse minima nihil voluptas praesentium doloremque nemo.</p>
    <p className="fs-2 fund">750$</p>

    <Link to="/ShopPage" className="btn btn2 btn-primary"><p className="fs-3">buy now</p> <i className="fab fa-paypal "> </i></Link>
    </div>
<div className="swiping animate__animated   animate__backInUp ">
    <button onClick={() =>next.current.slidePrev() } className="btn btn-primary"><i className="fas fa-angle-right"> </i></button>
    <button onClick={() =>next.current.slideNext() } className="btn btn-primary"><i className="fas fa-angle-left"> </i></button>

</div>

 

    <div className=" pro animate__animated   animate__backInRight">
      <Swiper 
      onSwiper={(swiper) => (next.current = swiper)}
    slidesPerView={1}
        spaceBetween={600}>
      
     
      <SwiperSlide><div className="card imgSwiper" >
  <img src={produc1} className="card-img-top" alt="..."/>
 
</div></SwiperSlide>
      <SwiperSlide><div className="card imgSwiper" >
  <img src={produc2} className="card-img-top dz-media" alt="..."/>
 
</div></SwiperSlide>
      <SwiperSlide><div className="card imgSwiper " >
  <img src={produc4} className="card-img-top " alt="..."/>
 
</div></SwiperSlide>

<SwiperSlide><div className="card imgSwiper " >
  <img src={produc3} className="card-img-top " alt="..."/>
 
</div></SwiperSlide>
<SwiperSlide><div className="card imgSwiper " >
  <img src={produc4} className="card-img-top " alt="..."/>
 
</div></SwiperSlide>

      </Swiper>
    </div>
    </div>

    </>)
  
}


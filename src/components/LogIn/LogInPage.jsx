import "../LogIn/LogInPage.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


import { useRef } from 'react';
import 'animate.css';
import { Form, Link } from 'react-router-dom';

export default function LogInPage() {
    const next = useRef(null);

  return (
   <>
   <Swiper
    onSwiper={(Swiper) => (next.current = Swiper)}
slidesPerView={1}
        spaceBetween={600}>
   

   <SwiperSlide>

    <div className="container d-flex justify-content-center align-items-center vh-100">
  <div className="card shadow p-4" style={{ maxWidth: "400px", width: "100%" }}>
    <h2 className="text-center mb-4">Login</h2>
    <form>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email address</label>
        <input type="email" className="form-control" id="email" />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input type="password" className="form-control" id="password" />
      </div>
      <div className="text-center">
        <button type="submit" className="btn btn-primary w-100">Login</button>
        <button onClick={() =>next.current.slideNext()} type="button" className="btn btn-dark mt-2 w-100">Sign Up</button>
      </div>
    </form>
  </div>
</div>

   </SwiperSlide>

   <SwiperSlide>


    <div className="container d-flex justify-content-center align-items-center vh-100">
  <div className="card shadow p-4" style={{ maxWidth: "400px", width: "100%" }}>
    <h2 className="text-center mb-4">Sign Up</h2>
    <form>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Full Name</label>
        <input type="text" className="form-control" id="name" />
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email address</label>
        <input type="email" className="form-control" id="email" />
      </div>

      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input type="password" className="form-control" id="password" />
      </div>

      <div className="mb-3">
        <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
        <input type="password" className="form-control" id="confirmPassword" />
      </div>

      <div className="text-center">
        <button type="submit" className="btn btn-success w-100">Sign Up</button>
        <button type="button" onClick={() =>next.current.slidePrev()} className="btn btn-secondary mt-2 w-100"> Login</button>
      </div>
    </form>
  </div>
</div>

   </SwiperSlide>


   </Swiper>
    

    
   </>
  );
}

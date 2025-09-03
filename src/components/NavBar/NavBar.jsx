import logo from "../images/logo.avif"
import "../NavBar/Nav.css"
import { Link } from "react-router-dom";

import ShopPage from "../Shop/ShopPage"

export default function NavBar() {
    return(
        <>
         <nav className="navbar navbar-expand-lg navbar-light bg-light ">
  <div className="container naaav ">
    <img src={logo} alt="" />
    <button className="navbar-toggler  "  type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse fs-5 ho" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 m-auto " >
        <li className="nav-item">
          <Link className="nav-link active text-dark" aria-current="page" to="/">Home</Link >
        </li>
        <li className="nav-item ">
          <Link className="nav-link text-dark" to="/ShopPage">Shop</Link >
          
        </li>
        <li className="nav-item">
          <Link className="nav-link text-dark" href="#">About Us</Link >
        </li>
         <li className="nav-item">
          <Link className="nav-link text-dark" href="#">Contact Us</Link >
        </li>
         <li className="nav-item">
          <Link className="nav-link text-dark" href="#">Blog</Link >
        </li>   
      </ul>

      <ul className="d-flex gap-2 align-items-center js ">
        <li><Link href=""><i className="fab fa-searchengin text-dark"></i></Link ></li>
        <li><Link href=""><i className="fas fa-heart text-dark"></i></Link ></li>
        <li><Link href=""><i className="fas fa-cart-shopping text-dark"></i></Link ></li>
        <li><Link to="/LogInPage"><i className="fas fa-user text-dark"></i></Link ></li>
      </ul>
    </div>
  </div>
</nav>
        </>
    )
}
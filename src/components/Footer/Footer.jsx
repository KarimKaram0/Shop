import "../Footer/Footer.css"
import photo from "../images/logo.avif"

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Footer() {
  return (
    <footer className="bg-light py-5" style={{height:"350px"}}>
      <div className="container">
        <div className="row">

          <div className="col-md-3 mb-4">
            <h4 className="fw-bold">
              <span style={{ color: "#f4b400", fontSize: "1.8rem" }}>P</span>ixio
            </h4>
            <p>Address : 451 Wall Street, UK, London</p>
            <p>E-mail : example@info.com</p>
            <p>Phone : (064) 332-1233</p>
            <h6 className="mt-4">Subscribe To Our Newsletter</h6>
            <div className="input-group">
              <input type="email" className="form-control" placeholder="Your Email Address" />
              <button className="btn btn-warning" type="button">→</button>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">Recent Posts</h5>
            <div className="d-flex mb-3">
              <img src={photo} alt="post" className="rounded me-2" style={{width:"50px " , height:"50px"}} />
              <div>
                <p className="mb-1 fw-semibold">Cozy Knit Cardigan Sweater</p>
                <small>July 23, 2024</small>
              </div>
            </div>
            <div className="d-flex mb-3">
              <img src={photo} alt="post" style={{width:"50px " , height:"50px"}} className="rounded me-2" />
              <div>
                <p className="mb-1 fw-semibold">Sophisticated Swagger Suit</p>
                <small>July 23, 2024</small>
              </div>
            </div>
            <div className="d-flex">
              <img src={photo} alt="post" style={{width:"50px " , height:"50px"}} className="rounded me-2" />
              <div>
                <p className="mb-1 fw-semibold">Athletic Mesh Sports Leggings</p>
                <small>July 23, 2024</small>
              </div>
            </div>
          </div>

          <div className="col-md-2 mb-4">
            <h5 className="fw-bold">Our Stores</h5>
            <ul className="list-unstyled">
              <li>New York</li>
              <li>London SF</li>
              <li>Edinburgh</li>
              <li>Los Angeles</li>
              <li>Chicago</li>
              <li>Las Vegas</li>
            </ul>
          </div>

          <div className="col-md-2 mb-4">
            <h5 className="fw-bold">Useful Links</h5>
            <ul className="list-unstyled">
              <li>Privacy Policy</li>
              <li>Returns</li>
              <li>Terms & Conditions</li>
              <li>Contact Us</li>
              <li>Latest News</li>
              <li>Our Sitemap</li>
            </ul>
          </div>

          <div className="col-md-2 mb-4">
            <h5 className="fw-bold">Footer Menu</h5>
            <ul className="list-unstyled">
              <li>Instagram Profile</li>
              <li>New Collection</li>
              <li>Woman Dress</li>
              <li>Contact Us</li>
              <li>Latest News</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

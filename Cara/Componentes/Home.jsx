import React from "react";
import Header from "./Header";
import Footer from "./Footer";


const Home = () => {
  return (
 <>
       <Header />

      <section id="hero">
        <h4>Trade-in-offer</h4>
        <h2>Super value deals</h2>
        <h1>On all products</h1>
        <p>Save more with coupons & up to 70% off</p>
        <button>Shop now</button>
      </section>

      <section id="feature" className="section-p1">
        <div className="fe-box">
          <img src="../src/assets/img/features/f1.png" alt="" />
          <h6>Free Shipping</h6>
        </div>
        <div className="fe-box">
          <img src="../src/assets/img/features/f2.png" alt="" />
          <h6>Online Order</h6>
        </div>
        <div className="fe-box">
          <img src="../src/assets/img/features/f3.png" alt="" />
          <h6>Save Money</h6>
        </div>
        <div className="fe-box">
          <img src="../src/assets/img/features/f4.png" alt="" />
          <h6>Promotions</h6>
        </div>
        <div className="fe-box">
          <img src="../src/assets/img/features/f5.png" alt="" />
          <h6>Happy Sell</h6>
        </div>
        <div className="fe-box">
          <img src="../src/assets/img/features/f6.png" alt="" />
          <h6>Support</h6>
        </div>
      </section>

      <section id="product1" className="section-p1">
        <h2>Feature Products</h2>
        <p>Summer Collection New Morden Design</p>
        <div className="pro-container">
          <div className="pro">
            <img src="../src/assets/img/products/f1.jpg" alt="" />
            <div className="des">
              <span>Adidas</span>
              <h5>Cartoon Astronaut T-Shirts</h5>
              <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <h4>S/.78</h4>
            </div>
            <a href="#"><i className="fa-solid fa-cart-shopping cart"></i></a>
          </div>

          <div className="pro">
            <img src="../src/assets/img/products/f2.jpg" alt="" />
            <div className="des">
              <span>Adidas</span>
              <h5>Tropical Breeze Short Sleeve</h5>
              <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <h4>S/.54</h4>
            </div>
            <a href="#"><i className="fa-solid fa-cart-shopping cart"></i></a>
          </div>

          <div className="pro">
            <img src="../src/assets/img/products/f3.jpg" alt="" />
            <div className="des">
              <span>Adidas</span>
              <h5>Retro Blossom Print Shirt</h5>
              <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <h4>S/.75</h4>
            </div>
            <a href="#"><i className="fa-solid fa-cart-shopping cart"></i></a>
          </div>

          <div className="pro">
            <img src="../src/assets/img/products/f4.jpg" alt="" />
            <div className="des">
              <span>Adidas</span>
              <h5>Cherry Blossom Summer Shirt</h5>
              <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <h4>S/.69.90</h4>
            </div>
            <a href="#"><i className="fa-solid fa-cart-shopping cart"></i></a>
          </div>

          <div className="pro">
            <img src="../src/assets/img/products/f5.jpg" alt="" />
            <div className="des">
              <span>Adidas</span>
              <h5>Night Bloom Hawaiian Shirt</h5>
              <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <h4>S/.67</h4>
            </div>
            <a href="#"><i className="fa-solid fa-cart-shopping cart"></i></a>
          </div>

          <div className="pro">
            <img src="../src/assets/img/products/f6.jpg" alt="" />
            <div className="des">
              <span>Adidas</span>
              <h5>Boho Patchwork Cotton Shirt</h5>
              <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <h4>S/.71</h4>
            </div>
            <a href="#"><i className="fa-solid fa-cart-shopping cart"></i></a>
          </div>

          <div className="pro">
            <img src="../src/assets/img/products/f7.jpg" alt="" />
            <div className="des">
              <span>Adidas</span>
              <h5>Linen Casual Wide-Leg Pants</h5>
              <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <h4>S/.108</h4>
            </div>
            <a href="#"><i className="fa-solid fa-cart-shopping cart"></i></a>
          </div>

          <div className="pro">
            <img src="../src/assets/img/products/f8.jpg" alt="" />
            <div className="des">
              <span>Adidas</span>
              <h5>Mystic Art Oversized Blouse</h5>
              <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <h4>S/.99.90</h4>
            </div>
            <a href="#"><i className="fa-solid fa-cart-shopping cart"></i></a>
          </div>
        </div>
      </section>

      <section id="banner" className="section-m1">
        <h4>Repair Services</h4>
        <h2>Up to <span>70% Off</span> - All t-Shirts & Accesories</h2>
        <button className="normal">Explore More</button>
      </section>

      <section id="sm-banner" className="section-p1">
        <div className="banner-box">
          <h4>Crazy deals</h4>
          <h2>Buy 1 get 1 free</h2>
          <span>The best classic dess is on sale at cara</span>
          <button className="white">Learn More</button>
        </div>
        <div className="banner-box banner-box2">
          <h4>Spring/Summer</h4>
          <h2>Upcomming season</h2>
          <span>The best classic dess is on sale at cara</span>
          <button className="white">Collection</button>
        </div>
      </section>

      <section id="banner3">
        <div className="banner-box">
          <h2>SEASONAL SALE</h2>
          <h3>Winter Collection -50% OFF</h3>
        </div>
        <div className="banner-box">
          <h2>SEASONAL SALE</h2>
          <h3>Winter Collection -50% OFF</h3>
        </div>
        <div className="banner-box">
          <h2>SEASONAL SALE</h2>
          <h3>Winter Collection -50% OFF</h3>
        </div>
      </section>

      <section id="newsletters" className="section-p1 section-m1">
        <div className="newstext">
          <h4>Sign up for Newsletters</h4>
          <p>Get E-mail updates about our lastest shop and <span>special offers</span></p>
        </div>
        <div className="form">
          <input type="text" placeholder="Your email address" />
          <button className="normal">Sign UP</button>
        </div>
      </section>

      <Footer /></>
  );
};

export default Home;

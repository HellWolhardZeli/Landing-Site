import React, { Component } from "react";
import Magazine from "../components/magazine.component";
import Screenshot from "../components/screenshot.component";

export default class Home extends Component {
  render() {
    return (
      <main>
        {/* <!-- Slider Area Start--> */}
        <div class="slider-area ">
          <div class="slider-active">
            <div class="single-slider slider-height slider-padding sky-blue d-flex align-items-center">
              <div class="container">
                <div class="row d-flex align-items-center">
                  <div class="col-lg-6 col-md-9 ">
                    <div class="hero__caption">
                      <span data-animation="fadeInUp" data-delay=".4s">
                        Let Positivity Engulf You
                      </span>
                      <h1 data-animation="fadeInUp" data-delay=".6s">
                        Spark joy
                        <br />
                        with Dopamine
                      </h1>
                      <p data-animation="fadeInUp" data-delay=".8s">
                        We have some positivity initiatives that might interest
                        you.
                      </p>
                      {/* <!-- Slider btn --> */}
                      <div class="slider-btns">
                        {/* <!-- Hero-btn --> */}
                        <a
                          data-animation="fadeInLeft"
                          data-delay="1.0s"
                          href="/"
                          class="btn radius-btn"
                        >
                          Coming Soon!
                        </a>
                        {/* <!-- Video Btn --> */}
                        <a
                          data-animation="fadeInRight"
                          data-delay="1.0s"
                          class="popup-video video-btn ani-btn"
                          href="https://www.youtube.com/watch?v=1aP-TXUpNoU"
                        >
                          <i class="fas fa-play"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div
                      class="hero__img d-none d-lg-block f-right"
                      data-animation="fadeInRight"
                      data-delay="1s"
                    >
                      <img
                        src={require("../static/img/hero/hero_right.png")}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="single-slider slider-height slider-padding sky-blue d-flex align-items-center">
              <div class="container">
                <div class="row d-flex align-items-center">
                  <div class="col-lg-6 col-md-9 ">
                    <div class="hero__caption">
                      <span data-animation="fadeInUp" data-delay=".4s">
                        Let Positivity Engulf You
                      </span>
                      <h1 data-animation="fadeInUp" data-delay=".6s">
                        Get things done with Dopamine
                      </h1>
                      <p data-animation="fadeInUp" data-delay=".8s">
                        We have some positivity initiatives that might interest
                        you.
                      </p>
                      {/* <!-- Slider btn --> */}
                      <div class="slider-btns">
                        {/* <!-- Hero-btn --> */}
                        <a
                          data-animation="fadeInLeft"
                          data-delay="1.0s"
                          href="/"
                          class="btn radius-btn"
                        >
                          Coming Soon!
                        </a>
                        {/* <!-- Video Btn --> */}
                        <a
                          data-animation="fadeInRight"
                          data-delay="1.0s"
                          class="popup-video video-btn ani-btn"
                          href="https://www.youtube.com/watch?v=1aP-TXUpNoU"
                        >
                          <i class="fas fa-play"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div
                      class="hero__img d-none d-lg-block f-right"
                      data-animation="fadeInRight"
                      data-delay="1s"
                    >
                      <img
                        src={require("../static/img/hero/hero_right.png")}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Slider Area End --> */}
        {/* <!-- Best Features Start --> */}
        <section class="best-features-area section-padd4">
          <div class="container">
            <div class="row justify-content-end">
              <div class="col-xl-8 col-lg-10">
                {/* <!-- Section Tittle --> */}
                <div class="row">
                  <div class="col-lg-10 col-md-10">
                    <div class="section-tittle">
                      <h2>Some of the best features Of Our WebApp!</h2>
                    </div>
                  </div>
                </div>
                {/* <!-- Section caption --> */}
                <div class="row">
                  <div class="col-xl-6 col-lg-6 col-md-6">
                    <div class="single-features mb-70">
                      <div class="features-icon">
                        <span>
                          <img
                            class="img-fluid"
                            src={require("../static/img/new/hand.svg")}
                            alt=""
                          />
                        </span>
                      </div>
                      <div class="features-caption">
                        <h3>Daily tasks</h3>
                        <p>
                          Make optimism a habit, give happiness a chance by
                          engaging in the daily tasks we give to make your day
                          better!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6">
                    <div class="single-features mb-70">
                      <div class="features-icon">
                        <span>
                          <img
                            class="img-fluid"
                            src={require("../static/img/new/calm.svg")}
                            alt=""
                          />
                        </span>
                      </div>
                      <div class="features-caption">
                        <h3>Positive content</h3>
                        <p>
                          Easy-to-consume positive content in the form of
                          magazine articles and personalized review
                          recommendations of everything from music to movies or
                          podcasts and books. There’s something for everyone!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6">
                    <div class="single-features mb-70">
                      <div class="features-icon">
                        <span>
                          <img
                            class="img-fluid"
                            src={require("../static/img/new/love-and-romance.svg")}
                            alt=""
                          />
                        </span>
                      </div>
                      <div class="features-caption">
                        <h3>Gratitude List</h3>
                        <p>
                          Let’s build a routine that increases positive
                          emotions. Realize how blessed you really are!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6">
                    <div class="single-features mb-70">
                      <div class="features-icon">
                        <span>
                          <img
                            class="img-fluid"
                            src={require("../static/img/new/love-and-romance.svg")}
                            alt=""
                          />
                        </span>
                      </div>
                      <div class="features-caption">
                        <h3>Creative Design</h3>
                        <p>
                          Aorem psum olorsit amet ectetur adipiscing elit, sed
                          dov.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Shpe --> */}
          <div class="features-shpae d-none d-lg-block">
            <img
              src={require("../static/img/shape/best-features.png")}
              alt=""
            />
          </div>
        </section>
        {/* <!-- Best Features End --> */}
        {/* <!-- Services Area Start --> */}
        <section class="service-area sky-blue section-padding2">
          <div class="container">
            {/* <!-- Section Tittle --> */}
            <div class="row d-flex justify-content-center">
              <div class="col-lg-6">
                <div class="section-tittle text-center">
                  <h2>
                    How We Can Help You
                    <br />
                    with Dopamine
                  </h2>
                </div>
              </div>
            </div>
            {/* <!-- Section caption --> */}
            <div class="row">
              <div class="col-xl-4 col-lg-4 col-md-6">
                <div class="services-caption text-center mb-30">
                  <div class="service-icon">
                    <span class="flaticon-businessman"></span>
                  </div>
                  <div class="service-cap">
                    <h4>
                      <a href="#">Lead a more positive life</a>
                    </h4>
                    <p>
                      Daily meaningful activites will help keep you cheerful.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6">
                <div class="services-caption active text-center mb-30">
                  <div class="service-icon">
                    <span class="flaticon-pay"></span>
                  </div>
                  <div class="service-cap">
                    <h4>
                      <a href="#">Consume quality positive content</a>
                    </h4>
                    <p>
                      This will energize your mind and take your negative
                      thoughts away.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6">
                <div class="services-caption text-center mb-30">
                  <div class="service-icon">
                    <span class="flaticon-plane"></span>
                  </div>
                  <div class="service-cap">
                    <h4>
                      <a href="#">Build Gratitude</a>
                    </h4>
                    <p>
                      It's important to say thanks and acknowledge how blessed
                      you really are.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Services Area End --> */}
        <Screenshot/>
        {/* <!-- Best Pricing Start --> */}
        <section
          class="best-pricing pricing-padding"
          data-background={require("../static/img/gallery/best_pricingbg.jpg")}
        >
          <div class="container">
            {/* <!-- Section Tittle --> */}
            <div class="row d-flex justify-content-center">
              <div class="col-lg-6 col-md-8">
                <div class="section-tittle section-tittle2 text-center">
                  <h2>Our Recent Events</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Best Pricing End --> */}
        {/* <!-- Pricing Card Start --> */}
        <div class="pricing-card-area">
          <div class="container">
            <div class="row">
              <div class="col-xl-4 col-lg-4 col-md-6">
                <div class="single-card text-center mb-30">
                  <div class="card-top">
                    <span>25 April - 03 May</span>
                    <h4>
                      Pastels
                      <span>Being positive through my days in quarantine</span>
                    </h4>
                  </div>
                  <div class="card-bottom">
                    <ul>
                      <li>HUES OF THE MIND</li>
                    </ul>
                    <a
                      href="https://www.instagram.com/p/B_XTNKKHQIZ/"
                      class="btn card-btn1"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6">
                <div class="single-card  text-center mb-30">
                  <div class="card-top">
                    <span>03 April - 10 April</span>
                    <h4>
                      Spade <span> Online Contest </span>
                    </h4>
                  </div>
                  <div class="card-bottom">
                    <ul>
                      <li>LOVELY PROFESSIONAL UNIVERSITY</li>
                      <li>Lovely Professional University, Phagwara, Punjab</li>
                    </ul>
                    <a
                      href="#"
                      class="btn card-btn1"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6">
                <div class="single-card text-center mb-30">
                  <div class="card-top">
                    <span>12 October</span>
                    <h4>
                      ASF <span>Awaaz Studio Festival</span>
                    </h4>
                  </div>
                  <div class="card-bottom">
                    <ul>
                      <li>AWAAZ STUDIOS</li>
                      <li>
                        Triangular Lawns, Birla Auditorium, Jaipur, Rajasthan
                        302001
                      </li>
                    </ul>
                    <a
                      href="https://www.townscript.com/e/awaaz-studio-festival-412132"
                      class="btn card-btn1"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Pricing Card End --> */}
        <Magazine />
        {/* <!-- Available App  Start--> */}
        <div class="available-app-area">
          <div class="container">
            <div class="row d-flex justify-content-between">
              <div class="col-xl-5 col-lg-6">
                <div class="app-caption">
                  <div class="section-tittle section-tittle3">
                    <h2>Our WebApp Available For Any Device Coming Soon</h2>
                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore fug.
                    </p>
                    <div class="app-btn">
                      <a href="#" class="app-btn1">
                        <img
                          src={require("../static/img/shape/app_btn1.png")}
                          alt=""
                        />
                      </a>
                      <a href="#" class="app-btn2">
                        <img
                          src={require("../static/img/shape/app_btn2.png")}
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-6 col-lg-6">
                <div class="app-img">
                  <img
                    src={require("../static/img/shape/available-app.png")}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Shape --> */}
          <div class="app-shape">
            <img
              src={require("../static/img/shape/app-shape-top.png")}
              alt=""
              class="app-shape-top heartbeat d-none d-lg-block"
            />
            <img
              src={require("../static/img/shape/app-shape-left.png")}
              alt=""
              class="app-shape-left d-none d-xl-block"
            />
            {/* <!-- <img src={require("../static/img/shape/app-shape-right.png")} alt="" class="app-shape-right bounce-animate "> --> */}
          </div>
        </div>
        {/* <!-- Available App End-->      */}
      </main>
    );
  }
}

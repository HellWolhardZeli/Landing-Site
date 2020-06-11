import React, { Component } from "react";

export default class Magazine extends Component {
  render() {
    return (
      <div class="our-customer section-padd-top30">
        <div class="container-fluid">
          <div class="our-customer-wrapper">
            {/* <!-- Section Tittle --> */}
            <div class="row d-flex justify-content-center">
              <div class="col-xl-8">
                <div class="section-tittle text-center">
                  <p>
                    We are trying to spread positivity through creativity
                    magazines. Checkout our recent issues below!
                  </p>
                  <h2>Our Magazines</h2>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="customar-active dot-style d-flex dot-style">
                  <div class="single-customer mb-100">
                    <a href="/magazines/issue-3">
                      <div class="what-img">
                        <img
                          src={require("../static/img/testmonial/3.jpg")}
                          alt=""
                        />
                      </div>
                      <div class="what-cap">
                        <h4>July '19 Issue</h4>
                        <p>
                          We hope this home of warm poetry and inspiring
                          articles flutters fireflies of comfort in your heart.
                          Don’t forget to share these with your friends, family,
                          colleagues, even strangers and make their day!
                        </p>
                      </div>
                    </a>
                  </div>
                  <div class="single-customer mb-100">
                    <a href="/magazines/issue-2">
                      <div class="what-img">
                        <img
                          src={require("../static/img/testmonial/2.jpg")}
                          alt=""
                        />
                      </div>
                      <div class="what-cap">
                        <h4>April '19 Issue</h4>
                        <p>
                          Happiness is real when it is shared, so here we are!
                          Bigger, brighter and better than the last time. We
                          took happiness submissions from all around, in various
                          forms and have squared it this time with our second
                          edition!
                        </p>
                      </div>
                    </a>
                  </div>
                  <div class="single-customer mb-100">
                    <a href="/magazines/issue-1">
                      <div class="what-img">
                        <img
                          src={require("../static/img/testmonial/1.jpg")}
                          alt=""
                        />
                      </div>
                      <div class="what-cap">
                        <h4>January '19 Issue</h4>
                        <p>
                          Unleashing colours of joy with the first issue of our
                          magazine! Check it out for a rush of Dopamine!
                        </p>
                      </div>
                    </a>
                  </div>
                  <div class="single-customer mb-100">
                    <a href="/magazines/issue-5">
                      <div class="what-img">
                        <img
                          src={require("../static/img/testmonial/5.png")}
                          alt=""
                        />
                      </div>
                      <div class="what-cap">
                        <h4>April '20 Issue</h4>
                        <p>
                          If you are feeling down about this sudden change and
                          uncertainty in the midst of whirlwind of quarantine,
                          do not worry. We are here with a breath of fresh air.
                          Unleashing a ray of optimism and joy through our 5th
                          edition.
                        </p>
                      </div>
                    </a>
                  </div>
                  <div class="single-customer mb-100">
                    <a href="/magazines/issue-4">
                      <div class="what-img">
                        <img
                          src={require("../static/img/testmonial/4.jpg")}
                          alt=""
                        />
                      </div>
                      <div class="what-cap">
                        <h4>November '19 Issue</h4>
                        <p>
                          Can you hear the drum roll?! Be ready to delve into an
                          amazing combination of beautifully synced words,
                          artworks, photographs and a lot more in this edition.
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

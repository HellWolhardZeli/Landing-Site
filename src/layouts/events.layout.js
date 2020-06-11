import React, { Component } from "react";
import SubFooter from "../components/sub-footer.component";
import { Helmet } from "react-helmet";
import EventList from "../static/db/events.js";
import Breadcrumb from "../components/breadcrumb.component";

export default class Events extends Component {
  render() {
    return (
      <main>
        <Helmet>
          <title>Our Events | Dopamine - Let Positivity Engulf You</title>
          <meta
            name="description"
            content="We organize various contests and photo booths. Organize One With Us. Contact us to know more."
          />
        </Helmet>
        {/* <!-- Best Pricing Start --> */}
        <section class="best-pricing best-pricing2 pricing-padding2">
          <Breadcrumb />
          <div class="container">
            {/* <!-- Section Tittle --> */}
            <div class="row d-flex justify-content-center">
              <div class="col-lg-6 col-md-8">
                <div class="section-tittle text-center">
                  <p>
                    If you feel that you’d like to support our cause or we could
                    mutually support our missions, let’s get talking.
                  </p>
                  <h2>Our Events</h2>
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
              {EventList.map((event, i) => (
                <div class="col-xl-4 col-lg-4 col-md-6" key={i}>
                  <div class="single-card text-center mb-30">
                    <div class="card-top">
                      <span>{event.date}</span>
                      <h4>
                        {event.title}
                        <span>{event.subtitle}</span>
                      </h4>
                    </div>
                    <div class="card-bottom">
                      <ul>
                        <li>{event.organizer}</li>
                        <li>{event.address}</li>
                      </ul>
                      <a
                        href={event.register}
                        class="btn card-btn1"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* <!-- Pricing Card End --> */}
        <SubFooter />
      </main>
    );
  }
}

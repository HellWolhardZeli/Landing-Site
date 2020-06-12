import React, { Component } from "react";
import SubFooter from "../components/sub-footer.component";
import { Redirect } from "react-router-dom";
import Magazine from "../components/magazine.component";
import { Helmet } from "react-helmet";
import Breadcrumb from "../components/breadcrumb.component";
import IssueList from "../static/db/magazines.js";

export default class Issue extends Component {
  state = {
    index: IssueList.findIndex(
      (magazine) => magazine.slug === this.props.match.params.issue
    ),
  };

  componentDidMount() {
    this.setState({ magazine: IssueList[this.state.index] });
  }

  render() {
    if (this.state.index === -1) return <Redirect to="/not-found" />;
    return (
      <>
        {this.state.magazine && (
          <main>
            <Helmet>
              <title>{`${this.state.magazine.title} | Dopamine - Let Positivity Engulf You`}</title>
              <meta name="description" content={this.state.magazine.excerpt} />
            </Helmet>
            {/* <!-- Slider Area Start--> */}
            <div class="services-area">
              <Breadcrumb />
              <div class="container">
                {/* <!-- Section-tittle --> */}
                <div class="row d-flex justify-content-center">
                  <div class="col-lg-8">
                    <div class="section-tittle text-center mb-80">
                      <p>{this.state.magazine.subtitle}</p>
                      <h2>{this.state.magazine.title}</h2>
                    </div>
                  </div>
                </div>
                <div class="row d-flex justify-content-center">
                  <div class="col-lg-9 text-center">
                    <div class="feature-img">
                      <img
                        class="img-fluid"
                        src={require("../static/img/blog/single_blog_1.png")}
                        alt=""
                      />
                      {/* <!-- <div class='embed-container' data-page-width='453' data-page-height='640' id='ypembedcontainer' ><iframe   src="https://www.yumpu.com/en/embed/view/Qp31WCOlLst45rPo" frameborder="0" allowfullscreen="true"  allowtransparency="true"></iframe></div> --> */}
                    </div>
                    <div class="section-tittle">
                      <h3>
                        <br />
                      </h3>
                    </div>
                    <div class="section-tittle">
                      <h3>Read it. Feel it. Absorb it. And share it!</h3>
                    </div>
                    <div class="section-tittle">
                      <h3>
                        <br />
                      </h3>
                    </div>

                    <div class="slider-btns">
                      {/* <!-- Hero-btn --> */}
                      <a
                        data-animation="fadeInLeft"
                        data-delay="1.0s"
                        href="#"
                        class="btn radius-btn"
                      >
                        GIVE FEEDBACK
                      </a>
                      {/* <!-- Hero-btn --> */}
                      <a
                        data-animation="fadeInLeft"
                        data-delay="1.0s"
                        href="#"
                        class="btn radius-btn card-btn1"
                      >
                        Get Featured
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Slider Area End--> */}

            {/* <!-- Best Features Start --> */}
            <section class="best-features-area mt-100 pt-100 sky-blue">
              <div class="container">
                {/* <!-- Section Tittle --> */}
                <div class="row d-flex justify-content-center">
                  <div class="col-lg-6">
                    <div class="section-tittle text-center">
                      <p>
                        You might not know how many people your work can help
                        feel better. Maybe someone will smile. Maybe you’ll make
                        someone’s day.
                      </p>
                      <h2>Contributors</h2>
                    </div>
                  </div>
                </div>
                {/* <!-- Section caption --> */}
                <div class="row">
                  <div class="col-lg-4 col-md-6">
                    <div class="single-features mb-70">
                      <div class="features-icon">
                        <span>
                          <img
                            class="img-fluid"
                            src={require("../static/img/contributors/writer.png")}
                            alt=""
                          />
                        </span>
                      </div>
                      <div class="features-caption">
                        <h3>Writers</h3>
                        <p>
                          {this.state.magazine.writers.map((writer, i) => (
                            <a
                              href={writer.profile}
                              rel="noreferrer noopener"
                              target="_blank"
                              key={i}
                            >
                              <span>{writer.name} |</span>
                            </a>
                          ))}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                    <div class="single-features mb-70">
                      <div class="features-icon">
                        <span>
                          <img
                            class="img-fluid"
                            src={require("../static/img/contributors/designers.png")}
                            alt=""
                          />
                        </span>
                      </div>
                      <div class="features-caption">
                        <h3>Designers</h3>
                        <p>
                          {this.state.magazine.designers.map((designer, i) => (
                            <a
                              href={designer.profile}
                              rel="noreferrer noopener"
                              target="_blank"
                              key={i}
                            >
                              <span>{designer.name} |</span>
                            </a>
                          ))}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                    <div class="single-features mb-70">
                      <div class="features-icon">
                        <span>
                          <img
                            class="img-fluid"
                            src={require("../static/img/contributors/photo.png")}
                            alt=""
                          />
                        </span>
                      </div>
                      <div class="features-caption">
                        <h3>Photography</h3>
                        <p>
                          {this.state.magazine.photographers.map(
                            (photographer, i) => (
                              <a
                                href={photographer.profile}
                                rel="noreferrer noopener"
                                target="_blank"
                                key={i}
                              >
                                <span>{photographer.name} |</span>
                              </a>
                            )
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                    <div class="single-features mb-70">
                      <div class="features-icon">
                        <span>
                          <img
                            class="img-fluid"
                            src={require("../static/img/contributors/art.png")}
                            alt=""
                          />
                        </span>
                      </div>
                      <div class="features-caption">
                        <h3>Artists and Illustrators</h3>
                        <p>
                          {this.state.magazine.artists.map((artist, i) => (
                            <a
                              href={artist.profile}
                              rel="noreferrer noopener"
                              target="_blank"
                              key={i}
                            >
                              <span>{artist.name} |</span>
                            </a>
                          ))}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                    <div class="single-features mb-70">
                      <div class="features-icon">
                        <span>
                          <img
                            class="img-fluid"
                            src={require("../static/img/contributors/review.png")}
                            alt=""
                          />
                        </span>
                      </div>
                      <div class="features-caption">
                        <h3>Reviewers</h3>
                        <p>
                          {this.state.magazine.reviewers.map((reviewer, i) => (
                            <a
                              href={reviewer.profile}
                              rel="noreferrer noopener"
                              target="_blank"
                              key={i}
                            >
                              <span>{reviewer.name} |</span>
                            </a>
                          ))}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                    <div class="single-features mb-70">
                      <div class="features-icon">
                        <span>
                          <img
                            class="img-fluid"
                            src={require("../static/img/contributors/editors.png")}
                            alt=""
                          />
                        </span>
                      </div>
                      <div class="features-caption">
                        <h3>Editors</h3>
                        <p>
                          {this.state.magazine.editors.map((editor, i) => (
                            <a
                              href={editor.profile}
                              rel="noreferrer noopener"
                              target="_blank"
                              key={i}
                            >
                              <span>{editor.name} |</span>
                            </a>
                          ))}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* <!-- Best Features End --> */}
            <Magazine />
            <SubFooter />
          </main>
        )}
      </>
    );
  }
}

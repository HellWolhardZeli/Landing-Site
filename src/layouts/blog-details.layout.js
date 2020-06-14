import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import SubFooter from "../components/sub-footer.component";
import { Helmet } from "react-helmet";
import Breadcrumb from "../components/breadcrumb.component";
import Sidebar from "../components/sidebar.component";
import Markdown from "markdown-to-jsx";
import firebase from "../config/database";

export default class BlogDetails extends Component {
  state = { blog: undefined };

  componentDidMount() {
    var firestore = firebase.firestore();
    firestore
      .collection("blog")
      .where("slug", "==", this.props.match.params.slug)
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs[0].data();
        data.id = querySnapshot.docs[0].id;
        this.setState({ blog: data });
      });
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onComment = (e) => {
    this.setState({ notif: "Loading..." });
    e.preventDefault();
    var firestore = firebase.firestore();
    firestore
      .collection("blog")
      .doc(this.state.blog.id)
      .update({
        comments: firebase.firestore.FieldValue.arrayUnion({
          name: this.state.name,
          phone: this.state.phone,
          email: this.state.email,
          text: this.state.text,
          date: new Date().toGMTString(),
        }),
      })
      .then((result) => {
        if (typeof result == "string") {
          this.setState({ notif: result });
        } else window.location.reload();
      })
      .catch(() => this.setState({ notif: "Some error occured!" }));
  };

  render() {
    return (
      <>
        {this.state.blog && (
          <main>
            <Helmet>
              <title>{`${this.state.blog.title}​ | Blog - Dopamine`}</title>
              <meta name="description" content={this.state.blog.excerpt} />
              <script
                src="https://players.yumpu.com/modules/embed/yp_r_iframe.js"
                async
              ></script>
            </Helmet>
            {/* <!-- Slider Area Start--> */}
            <div class="services-area">
              <Breadcrumb />
              <div class="container">
                {/* <!-- Section-tittle --> */}
                <div class="row d-flex justify-content-center">
                  <div class="col-lg-8">
                    <div class="section-tittle text-center mb-80">
                      <h2>{this.state.blog.title}</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Slider Area End--> */}
            {/* <!--================Blog Area =================--> */}
            <section class="blog_area single-post-area">
              <div class="container">
                <div class="row">
                  <div class="col-lg-8 posts-list">
                    <div class="single-post">
                      <div class="feature-img">
                        {/* <!-- <img class="img-fluid" src={require("../static/img/blog/single_blog_1.png")} alt=""> --> */}
                        <div
                          class="embed-container"
                          data-page-width="453"
                          data-page-height="640"
                          id="ypembedcontainer"
                        >
                          <iframe
                            src={this.state.blog.embed}
                            frameborder="0"
                            allowfullscreen="true"
                            title="Magazine"
                            allowtransparency="true"
                          ></iframe>
                        </div>
                      </div>
                      <div class="blog_details">
                        <h2>{this.state.blog.excerpt}</h2>
                        <ul class="blog-info-link mt-3 mb-4">
                          <li>
                            <a href="#">
                              <i class="fa fa-calendar"></i>{" "}
                              {this.state.blog.date}
                            </a>
                          </li>
                          <li>
                            {this.state.blog.tags.map((tag, i) => (
                              <a href="#" key={i}>
                                <i class="fa fa-tag"></i>
                                {tag + " "}
                              </a>
                            ))}
                          </li>
                        </ul>
                        {this.state.blog.description && (
                          <Markdown
                            options={{
                              overrides: {
                                ul: { props: { className: "unordered-list" } },
                              },
                              forceBlock: true,
                            }}
                          >
                            {this.state.blog.description}
                          </Markdown>
                        )}
                      </div>
                    </div>
                    <div class="navigation-top">
                      <div class="d-sm-flex justify-content-between text-center">
                        <p class="like-info">
                          <span class="align-middle">
                            <i class="fa fa-heart"></i>
                          </span>{" "}
                          Lily and 4 people like this
                        </p>
                        <div class="col-sm-4 text-center my-2 my-sm-0">
                          {/* <!-- <p class="comment-count"><span class="align-middle"><i class="fa fa-comment"></i></span> 06 Comments</p> --> */}
                        </div>
                        <ul class="social-icons">
                          <li>
                            <a
                              href="https://api.whatsapp.com/send?phone=&text=Dopamine Positivity Magazine Issue 3 - https://dopamineplanet.com/blog/self-love/"
                              target="_blank"
                              rel="noreferrer noopener"
                            >
                              <i class="fab fa-whatsapp"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.facebook.com/sharer/sharer.php?u=https://dopamineplanet.com/blog/self-love/"
                              target="_blank"
                              rel="noreferrer noopener"
                            >
                              <i class="fab fa-facebook-f"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.linkedin.com/shareArticle?mini=true&url=https://dopamineplanet.com/blog/self-love/&title=Self Love: The Key to a Happy Life&summary=Love yourself first and everything else falls into line! Go read these words of wisdom and more in this article by Srinidhi.&source=https://dopamineplanet.com"
                              target="_blank"
                              rel="noreferrer noopener"
                            >
                              <i class="fab fa-linkedin"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="whatsapp://send?text=Dopamine Positivity Magazine Issue 3 - https://dopamineplanet.com/blog/self-love/"
                              target="_blank"
                              rel="noreferrer noopener"
                            >
                              <i class="fab fa-twitter"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="mailto:?subject=Self%20Love%3A%20The%20Key%20to%20a%20Happy%20Life&body=Love%20yourself%20first%20and%20everything%20else%20falls%20into%20line!%20Go%20read%20these%20words%20of%20wisdom%20and%20more%20in%20this%20article%20by%20Srinidhi.%20https%3A//dopamineplanet.com/blog/self-love/"
                              target="_blank"
                              rel="noreferrer noopener"
                            >
                              <i class="fab fa-envelope"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div class="navigation-area">
                        <div class="row">
                          <div class="col-lg-6 col-md-6 col-12 nav-left flex-row d-flex justify-content-start align-items-center">
                            <div class="thumb">
                              <a href="#">
                                <img
                                  class="img-fluid"
                                  src={require("../static/img/post/preview.png")}
                                  alt=""
                                />
                              </a>
                            </div>
                            <div class="arrow">
                              <a href="#">
                                <span class="lnr text-white ti-arrow-left"></span>
                              </a>
                            </div>
                            <div class="detials">
                              <p>Prev Post</p>
                              <a href="#">
                                <h4>Space The Final Frontier</h4>
                              </a>
                            </div>
                          </div>
                          <div class="col-lg-6 col-md-6 col-12 nav-right flex-row d-flex justify-content-end align-items-center">
                            <div class="detials">
                              <p>Next Post</p>
                              <a href="#">
                                <h4>Telescopes 101</h4>
                              </a>
                            </div>
                            <div class="arrow">
                              <a href="#">
                                <span class="lnr text-white ti-arrow-right"></span>
                              </a>
                            </div>
                            <div class="thumb">
                              <a href="#">
                                <img
                                  class="img-fluid"
                                  src={require("../static/img/post/next.png")}
                                  alt=""
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="blog-author">
                      <div class="media align-items-center">
                        <img
                          src={require("../static/img/blog/author.png")}
                          alt=""
                        />
                        <div class="media-body">
                          <a href="#">
                            <h4>{this.state.blog.author}</h4>
                          </a>
                          <p>{this.state.blog.bio}</p>
                        </div>
                      </div>
                    </div>
                    <div class="comments-area">
                      <h4>{this.state.blog.comments.length} Comments</h4>
                      {this.state.blog.comments.map((comment, i) => (
                        <div class="comment-list">
                          <div class="single-comment justify-content-between d-flex">
                            <div class="user justify-content-between d-flex">
                              <div class="thumb">
                                <img
                                  src={require("../static/img/comment/comment_3.png")}
                                  alt=""
                                />
                              </div>
                              <div class="desc">
                                <p class="comment">{comment.text}</p>
                                <div class="d-flex justify-content-between">
                                  <div class="d-flex align-items-center">
                                    <h5>
                                      <a href="#">{comment.name}</a>
                                    </h5>
                                    <p class="date">{comment.date}</p>
                                  </div>
                                  <div class="reply-btn">
                                    <a
                                      href="#"
                                      class="btn-reply text-uppercase"
                                    >
                                      reply
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div class="comment-form">
                      <h4>Leave a Reply</h4>
                      <div class="genric-btn success circle mb-3">
                        {this.state.notif}
                      </div>
                      <form
                        class="form-contact comment_form"
                        onSubmit={this.onComment}
                        id="commentForm"
                      >
                        <div class="row">
                          <div class="col-12">
                            <div class="form-group">
                              <textarea
                                class="form-control w-100"
                                name="text"
                                id="text"
                                cols="30"
                                rows="9"
                                onChange={this.handleChange}
                                placeholder="Write Your Comment"
                              ></textarea>
                            </div>
                          </div>
                          <div class="col-sm-6">
                            <div class="form-group">
                              <input
                                class="form-control"
                                name="name"
                                id="name"
                                type="text"
                                onChange={this.handleChange}
                                placeholder="Name"
                              />
                            </div>
                          </div>
                          <div class="col-sm-6">
                            <div class="form-group">
                              <input
                                class="form-control"
                                name="email"
                                id="email"
                                type="email"
                                onChange={this.handleChange}
                                placeholder="Email"
                              />
                            </div>
                          </div>
                          <div class="col-12">
                            <div class="form-group">
                              <input
                                class="form-control"
                                name="phone"
                                id="phone"
                                type="number"
                                onChange={this.handleChange}
                                placeholder="Phone Number"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="form-group">
                          <button
                            type="submit"
                            class="button button-contactForm btn_1 boxed-btn"
                          >
                            Send Message
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="blog_right_sidebar">
                      <Sidebar />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* <!--================ Blog Area end =================--> */}
            <SubFooter />
          </main>
        )}
      </>
    );
  }
}

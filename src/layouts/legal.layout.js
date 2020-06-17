import React, { Component } from "react";
import SubFooter from "../components/sub-footer.component";
import Breadcrumb from "../components/breadcrumb.component";
import Sidebar from "../components/sidebar.component";
import Markdown from "markdown-to-jsx";
import firebase from "../config/database";

export default class Legal extends Component {
  state = { legal: undefined };

  componentDidMount() {
    var firestore = firebase.firestore();
    firestore
      .collection("legals")
      .where("slug", "==", this.props.match.params.slug)
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs[0].data();
        this.setState({ legal: data });
      });
  }

  render() {
    return (
      <>
        {this.state.legal && (
          <main>
            {/* <!-- Slider Area Start--> */}
            <div class="services-area">
              <Breadcrumb />
              <div class="container">
                {/* <!-- Section-tittle --> */}
                <div class="row d-flex justify-content-center">
                  <div class="col-lg-8">
                    <div class="section-tittle text-center mb-80">
                      <h2>{this.state.legal.title}</h2>
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
                      <div class="blog_details">
                        {this.state.legal.description && (
                          <Markdown
                            options={{
                              overrides: {
                                ul: { props: { className: "unordered-list" } },
                              },
                              forceBlock: true,
                            }}
                          >
                            {this.state.legal.description}
                          </Markdown>
                        )}
                      </div>
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

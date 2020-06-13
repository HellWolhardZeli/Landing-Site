import React, { Component } from "react";
import firebase from "../config/database";

export default class Magazine extends Component {
  state = { magazines: undefined };

  componentDidMount() {
    var firestore = firebase.firestore();
    firestore
      .collection("magazines")
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        this.setState({ magazines: data }); // array of cities objects
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div class="our-customer section-padd-top30" id="magazines">
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
                  {this.state.magazines &&
                    this.state.magazines.map((issue, i) => (
                      <div class="single-customer mb-100" key={i}>
                        <a href={`/magazines/${issue.slug}`}>
                          <div class="what-img">
                            <img
                              src={require(`../static/img/${issue.thumbnail}`)}
                              alt=""
                            />
                          </div>
                          <div class="what-cap">
                            <h4>{issue.title}</h4>
                            <p>{issue.excerpt}</p>
                          </div>
                        </a>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

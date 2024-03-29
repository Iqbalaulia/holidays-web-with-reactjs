/** @format */

import React, { Component } from "react";

import Fade from "react-reveal/Fade";

import Header from "parts/Header";
import PageDetailTitle from "parts/PageDetailTitle";
import FeaturedImages from "parts/FeaturedImages";
import PageDetailDescription from "parts/PageDetailDescription";
import BookingForm from "parts/BookingForm";
import Categories from "parts/Categories";
import Testimonial from "parts/Testimonial";
import Footer from "parts/Footer";

import ItemDetails from "json/itemDetails.json";

export default class DetailsPage extends Component {
  componentDidMount() {
    window.title = "Details Page";
    window.scrollTo(0, 0);
  }

  render() {
    const breadcrumbList = [
      {
        pageTitle: "Home",
        pageHref: "",
      },
      {
        pageTitle: "Details Page",
        pageHref: "",
      },
    ];

    return (
      <>
        <Header {...this.props}></Header>
        <PageDetailTitle
          data={ItemDetails}
          breadcrumb={breadcrumbList}
        ></PageDetailTitle>
        <FeaturedImages data={ItemDetails.imageUrls} />
        <section className="container">
          <div className="row">
            <div className="col-7 pr-5">
              <Fade bottom>
                <PageDetailDescription data={ItemDetails} />
              </Fade>
            </div>
            <div className="col-5">
              <Fade bottom>
                <BookingForm itemDetails={ItemDetails} />
              </Fade>
            </div>
          </div>
        </section>
        <Categories data={ItemDetails.categories} />
        <Testimonial data={ItemDetails.testimonial} />
        <Footer />
      </>
    );
  }
}

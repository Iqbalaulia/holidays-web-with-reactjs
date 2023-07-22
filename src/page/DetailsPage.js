/** @format */

import React, { Component } from "react";

import Header from "parts/Header";
import PageDetailTitle from "parts/PageDetailTitle";
import FeaturedImages from "parts/FeaturedImages";
import PageDetailDescription from "parts/PageDetailDescription";
import BookingForm from "parts/BookingForm";

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
					breadcrumb={breadcrumbList}></PageDetailTitle>
				<FeaturedImages data={ItemDetails.imageUrls} />
				<section className="container">
					<div className="row">
						<div className="col-7 pr-5">
							<PageDetailDescription data={ItemDetails} />
						</div>
						<div className="col-5">
							<BookingForm itemDetails={ItemDetails}/>
						</div>
					</div>
				</section>
			</>
		);
	}
}

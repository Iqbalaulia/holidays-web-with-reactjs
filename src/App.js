/** @format */

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import LandingPage from "page/LandingPage";
import DetailsPage from "page/DetailsPage";
import CheckoutPage from "page/Checkout";
import "assets/scss/style.scss";

function App() {
	return (
		<div className="App">
			<Router>
				<Route exact path="/" component={LandingPage}></Route>
				<Route exact path="/properties/:id" component={DetailsPage}></Route>
				<Route exact path="/checkout" component={CheckoutPage}/>
			</Router>
		</div>
	);
}

export default App;

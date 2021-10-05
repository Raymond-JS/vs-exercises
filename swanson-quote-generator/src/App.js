import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Quote from "./Quote";
import Video from "./Video";
import About from "./About";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="ui grid centered container ">
			<Header />
			<Switch>
				<Route path="/about">
					<About />
				</Route>
				<Route exact path="/">
					<Quote />
				</Route>
				<Route path="/video">
					<Video />
				</Route>
			</Switch>

			<Footer />
		</div>
	);
}

export default App;

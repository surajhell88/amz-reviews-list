import React, { Component } from 'react';

import StartRating from "./components/StarRating";
import ReviewList from "./components/ReviewList";

import { callApi } from "./utils";

import './App.css';

class App extends Component {
	state = {
		rating: 0,
		reviewList: []
	}
	onRateChange = (rating) => {
		this.setState({
			rating,
		});
	}
	componentDidMount() {
		callApi("/reviews/1").then(res => {
			console.log(res.data.reviews); // eslint-disable-line
			this.setState({
				reviewList: res.data.reviews,
			});
		});
	}
	render() {
		return (
			<div className="App">
				<div className="Container">
					<div className="Action-Bar">
						<div className="Action">
							<div className="Action-Input">
								<input type="text" className="Input Input-Text" placeholder="Search" />
							</div>
							</div>
						<div className="Action">
							<div className="Action-Input Action-Select Mr-10">
								<select name="group-by" className="Input Input-Select">
									<option value="">Group By</option>
									<option value="day">Day</option>
									<option value="week">Week</option>
									<option value="month">Month</option>
								</select>
							</div>
							<div className="Action-Input Action-Select">
								<select name="order-by" className="Input Input-Select">
									<option value="">Order By</option>
									<option value="day">Asc</option>
									<option value="week">Desc</option>
								</select>
							</div>
						</div>
						<div className="Filter">
							<h4>Filter By:</h4>
							<StartRating
								rating={this.state.rating}
								onRateChange={this.onRateChange}
							/>
						</div>
					</div>
					<div className="List-Container">
						<ReviewList listData={this.state.reviewList} />
					</div>
				</div>
			</div>
		);
	}
}

export default App;

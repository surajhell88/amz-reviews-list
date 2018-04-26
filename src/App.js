import React, { Component } from 'react';
import './App.css';
import StartRating from "./components/star-rating";

class App extends Component {
	state = {
		rating: 0,
	}
	onRateChange = (rating) => {
		this.setState({
			rating,
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
				</div>
			</div>
		);
	}
}

export default App;

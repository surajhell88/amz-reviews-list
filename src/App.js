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
					<div className="List-Container">
						<ul className="Review-List">
							<li className="Review-Item">
								<div className="Review-Container">
									<div className="Review-Header">
										<div className="Review-User-Img Mr-20"></div>
										<div className="Review-Date Mr-40">
											<h6 className="Text-Gray">Date</h6>
											<h4>12.12.2017</h4>
										</div>
										<div className="Review-Ratings Mr-40">
											<h6 className="Text-Gray">Stars</h6>
											<h4>12.12.2017</h4>
										</div>
										<div className="Review-Product">
											<h6 className="Text-Gray">Seller</h6>
											<h4>12.12.2017</h4>
										</div>
									</div>
									<div className="Review-Info">
										<h4 className="Review-Title">Review Title</h4>
										<p className="Review-Description Text-Gray">Lorem ipsum dolor sit amet, officiis adipiscing te sed, ad vim suas ullamcorper. Ex ius blandit torquatos cotidieque. Postea labores ei eum. Cu has nibh voluptatum. Eam an volutpat repudiandae.</p>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default App;

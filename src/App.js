import React, { Component } from 'react';
import './App.css';
import StartSVG from "./components/star-svg";

class App extends Component {
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
      				<div className="Star-Filter">
      					<div className="Star-Container">
      						<input type="checkbox" className="Input" />
  							<h4 className="Star-Number">1</h4>
							<StartSVG />
      					</div>
      					<div className="Star-Container">
      						<input type="checkbox" className="Input" />
  							<h4 className="Star-Number">2</h4>
      						<StartSVG />
      					</div>
      					<div className="Star-Container">
      						<input type="checkbox" className="Input" />
  							<h4 className="Star-Number">3</h4>
      						<StartSVG />
      					</div>
      					<div className="Star-Container">
      						<input type="checkbox" className="Input" />
  							<h4 className="Star-Number">4</h4>
      						<StartSVG />
      					</div>
      					<div className="Star-Container">
      						<input type="checkbox" className="Input" />
  							<h4 className="Star-Number">5</h4>
      						<StartSVG />
      					</div>
      				</div>
      			</div>
      		</div>
      	</div>
      </div>
    );
  }
}

export default App;

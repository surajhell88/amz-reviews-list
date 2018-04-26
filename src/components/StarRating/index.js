import React from 'react';

import StartSVG from "./star-svg";

import './index.css';

const StarRating = (props) => {
  	const { rating, onRateChange } = props;
  	return (
		<div className="Star-Filter">
			<div className="Star-Container">
				<label className="Star-Label" htmlFor="star-rating-1">
					<input 
						type="checkbox" 
						className="Input" 
						id="star-rating-1"
						checked={rating >= 1} 
						onChange={() => onRateChange(1)} 
					/>
					<h4 className="Star-Number">1</h4>
					<StartSVG />
				</label>
			</div>
			<div className="Star-Container">
				<label className="Star-Label" htmlFor="star-rating-2">
					<input 
						type="checkbox" 
						className="Input" 
						id="star-rating-2"
						checked={rating >= 2} 
						onChange={() => onRateChange(2)} 
					/>
					<h4 className="Star-Number">2</h4>
					<StartSVG />
				</label>
			</div>
			<div className="Star-Container">
				<label className="Star-Label" htmlFor="star-rating-3">
					<input 
						type="checkbox" 
						className="Input" 
						id="star-rating-3"
						checked={rating >= 3} 
						onChange={() => onRateChange(3)} 
					/>
					<h4 className="Star-Number">3</h4>
					<StartSVG />
				</label>
			</div>
			<div className="Star-Container">
				<label className="Star-Label" htmlFor="star-rating-4">
					<input 
						type="checkbox" 
						className="Input" 
						id="star-rating-4"
						checked={rating >= 4} 
						onChange={() => onRateChange(4)} 
					/>
					<h4 className="Star-Number">4</h4>
					<StartSVG />
				</label>
			</div>
			<div className="Star-Container">
				<label className="Star-Label" htmlFor="star-rating-5">
					<input 
						type="checkbox" 
						className="Input" 
						id="star-rating-5"
						checked={rating >= 5} 
						onChange={() => onRateChange(5)} 
					/>
					<h4 className="Star-Number">5</h4>
					<StartSVG />
				</label>
			</div>
		</div>
  	);
};

export default StarRating;
import React from 'react';

const svgStyle = {
	fill: "#ddd",
	stroke: "#ddd",
	strokeWidth: 1,
	fillRule: "nonzero"
};

const StarSVG = () => (
	<svg height="25" width="23" className="star rating" data-rating="1">
	    <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" style={svgStyle}/>
  	</svg>
);

export default StarSVG;
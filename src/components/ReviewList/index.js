import React from 'react';
import PropTypes from 'prop-types';

import Item from './item';

import './index.css';

const ReviewList = ({ listData }) => (
    <ul className="Review-List">
		{
			Array.isArray(listData) ?
				listData.map(item => (
					<li className="Review-Item" key={item.reviewId}>
						<Item item={item} />
					</li>
				)) :
				Object.keys(listData).map((header, i) => (
					<li className="Review-Item" key={i}>
						<h4 className="Review-Group">{header}</h4>
						{
							listData[header].map(item => (
								<Item key={item.reviewId} item={item} />
							))
						}
					</li>
				))
		}
	</ul>
);

ReviewList.propTypes = {
	listData: PropTypes.any.isRequired
};

export default ReviewList;
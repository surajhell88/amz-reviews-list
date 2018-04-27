import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import StarRatingComponent from 'react-star-rating-component';

const Item = (props) => {
  const { item } = props;
  return (
	<div className="Review-Container">
		<div className="Review-Header">
			<div className="Review-User-Img Mr-20"></div>
			<div className="Review-Date Mr-40">
				<h6 className="Text-Gray">Date</h6>
				<h4>{moment(item.reviewCreated).format("D.M.YYYY")}</h4>
			</div>
			<div className="Review-Ratings Mr-40">
				<h6 className="Text-Gray">Stars</h6>
				<h4>
					<StarRatingComponent
						name="Stars"
						value={item.stars}
						starColor="#000"
						emptyStarColor="#ddd"
					/>
				</h4>
			</div>
			<div className="Review-Product">
				<h6 className="Text-Gray">{item.childAsin}</h6>
				<h4 className="Review-Product-Title">{item.productTitle}</h4>
			</div>
		</div>
		<div className="Review-Info">
			<h4 className="Review-Title">{ item.title }</h4>
			<p className="Review-Description Text-Gray">{ item.content }</p>
		</div>
	</div>
  );
};

Item.propTypes = {
	item: PropTypes.object,
};

export default Item;
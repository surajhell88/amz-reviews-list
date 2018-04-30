import callApi from "./call-api";

const ReviewsUtil = (function () {
	let reviewList = [];
 
	return {
		fetchReviews: (page, callback) => {
			return callApi(`/reviews/${page}`).then(res => {
				reviewList = reviewList.concat(res.data.reviews);
				callback(res.data.hasMore);
			});
		},
		getReviews: function () {
			return reviewList;
		}
	};
})();

export default ReviewsUtil;
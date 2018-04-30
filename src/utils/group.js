import _ from 'lodash';
import moment from 'moment';

const GroupingUtil = (function () {

	const applyGrouping = (list, callback) => _.groupBy(list, ({ reviewCreated }) => {
		return callback(reviewCreated);
	});
 
	return (list, groupBy) => {
		switch (groupBy) {
			case 'month':
				return applyGrouping(list, reviewCreated => moment(reviewCreated).startOf('month').format('MMM, YYYY'));
			case 'week':
				return applyGrouping(list, reviewCreated => moment(reviewCreated).startOf('week').format('DD.MM') + ' - ' + moment(reviewCreated).endOf('week').format('DD.MM'));
			case 'day':
				return applyGrouping(list, reviewCreated => moment(reviewCreated).startOf('day').format('D.MM.YYYY'));
			default:
				return list;
		}
	};
})();

export default GroupingUtil;
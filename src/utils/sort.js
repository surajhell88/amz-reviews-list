import _ from 'lodash';

const SortUtil = (function () {
	return (list, sortBy = '') => sortBy ? _.orderBy(list, ['reviewCreated'], sortBy) : list;
})();

export default SortUtil;
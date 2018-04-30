const FilterUtil = (function () {
	const toLC = string => string.toLowerCase();
	
	const matchString = (string, value) => 
		toLC(string).indexOf(toLC(value)) !== -1;

	const filterByStars = (list, rating = 0) => rating ? list.filter(
		({ stars }) => stars >= rating
	) : list;

	const filterBySearch = (list, searchKey = "") => searchKey ? list.filter(
		({ title, content }) => matchString(title, searchKey) || matchString(content, searchKey)
	) : list;
 
	return (list, searchKey, rating) => 
		filterByStars(
			filterBySearch(list, searchKey), 
		rating);
})();

export default FilterUtil;
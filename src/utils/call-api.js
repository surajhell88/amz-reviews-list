import fetch from "isomorphic-fetch";

const parseJSON = response =>
	response
		.json()
		.then(data => ({ data, headers: response.headers, ok: response.ok }));

export default (url, options = {}) => {
	const newOptions = Object.assign(
		{
			credentials: "same-origin",
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			}
		},
		options
	);

	return fetch(url, newOptions).then(parseJSON);
};

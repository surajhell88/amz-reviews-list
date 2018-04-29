import React, { Component } from 'react';
import _ from 'lodash';
import moment from 'moment';
import InfiniteScroll from 'react-infinite-scroller';

import StartRating from "./components/StarRating";
import ReviewList from "./components/ReviewList";

import { callApi } from "./utils";

import './App.css';

class App extends Component {
	state = {
		searchKey: '',
		groupBy: '',
		sortBy: '',
		rating: 0,
		page: 1,
		fetchingReviews: false,
		hasMore: true,
		originalList: [],
		reviewList: []
	}
	handleChange = (stateKey, value) => {
		this.setState({
			[stateKey]: value
		}, () => this.filterReviews());
	}
	toLC = string => string.toLowerCase()
	matchString = (string, value) => this.toLC(string).indexOf(this.toLC(value)) !== -1
	filterBySearch = (list, searchKey = "") => searchKey ? list.filter(
		({ title, content }) => this.matchString(title, searchKey) || this.matchString(content, searchKey)
	) : list
	filterByStars = (list, rating = 0) => rating ? list.filter(
		({ stars }) => stars >= rating
	) : list
	groupReviews = (groupBy, list) => {
		if (!groupBy || groupBy === '') return list;
		switch (groupBy) {
			case 'month':
				return _.groupBy(list, ({ reviewCreated }) => {
					return moment(reviewCreated).startOf('month').format('MMM, YYYY');
				});
			case 'week':
				return _.groupBy(list, ({ reviewCreated }) => {
					return moment(reviewCreated).startOf('week').format('DD.MM') + ' - ' + moment(reviewCreated).endOf('week').format('DD.MM');
				});
			case 'day':
				return _.groupBy(list, ({ reviewCreated }) => {
					return moment(reviewCreated).startOf('day').format('D.MM.YYYY');
				});
			default:
				return list;
		}
	}
	sortReviews = (sortBy, list) => sortBy ? _.orderBy(list, ['reviewCreated'], sortBy) : list
	filterReviews = () => {
		const {
			searchKey,
			rating,
			originalList,
			groupBy,
			sortBy,
		} = this.state;
		const reviewList = this.groupReviews(groupBy,
			this.sortReviews(sortBy, this.filterByStars(
				this.filterBySearch(
					originalList,
					searchKey
				),
				rating
			))
		);
		this.setState({
			reviewList,
		});
	}
	fetchReviews = () => {
		if (this.state.fetchingReviews) return;
		this.setState({
			fetchingReviews: true,
		}, () => {
			callApi(`/reviews/${this.state.page}`).then(res => {
				this.setState({
					page: this.state.page + 1,
					originalList: this.state.originalList.concat(res.data.reviews),
					hasMore: res.data.hasMore,
					fetchingReviews: false
				}, () => this.filterReviews());
			});
		});
	}
	componentDidMount() {
		this.fetchReviews();
	}
	render() {
		const {
			searchKey,
			groupBy,
			sortBy,
			rating,
			reviewList
		} = this.state;
		return (
			<div className="App">
				<div className="Container">
					<div className="Action-Bar">
						<div className="Action">
							<div className="Action-Input">
								<input
									type="text"
									className="Input Input-Text"
									placeholder="Search"
									value={searchKey}
									onChange={e => this.handleChange('searchKey', e.target.value)}
								/>
							</div>
							</div>
						<div className="Action">
							<div className="Action-Input Action-Select Mr-10">
								<select
									name="group-by"
									className="Input Input-Select"
									value={groupBy}
									onChange={e => this.handleChange('groupBy', e.target.value)}
								>
									<option value="">Group By</option>
									<option value="day">Day</option>
									<option value="week">Week</option>
									<option value="month">Month</option>
								</select>
							</div>
							<div className="Action-Input Action-Select">
								<select
									name="order-by"
									className="Input Input-Select"
									value={sortBy}
									onChange={e => this.handleChange('sortBy', e.target.value)}
								>
									<option value="">Order By</option>
									<option value="asc">Asc</option>
									<option value="desc">Desc</option>
								</select>
							</div>
						</div>
						<div className="Filter">
							<h4>Filter By:</h4>
							<StartRating
								rating={rating}
								onRateChange={val => this.handleChange('rating', val)}
							/>
						</div>
					</div>
					<div className="List-Container">
						<InfiniteScroll
							pageStart={1}
							initialLoad={false}
							loadMore={this.fetchReviews}
							hasMore={this.state.hasMore}
							loader={<h4 className="Fetching-Reviews" key="0">
								Fetching More...
							</h4>}
						>
							<ReviewList listData={reviewList} />
						</InfiniteScroll>
					</div>
				</div>
			</div>
		);
	}
}

export default App;

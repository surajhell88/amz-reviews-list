import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroller';

import StartRating from "./components/StarRating";
import ReviewList from "./components/ReviewList";

import { reviews, filter, group, sort } from './utils';

import './App.css';

class App extends Component {
	state = {
		searchKey: '',
		groupBy: '',
		sortBy: '',
		rating: 0,
		page: 1,
		fetchingReviews: false,
		hasMore: true
	}
	handleChange = (stateKey, value) => {
		this.setState({
			[stateKey]: value
		});
	}
	fetchReviews = () => {
		if (this.state.fetchingReviews) return;
		this.setState({
			fetchingReviews: true,
		}, () => {
			reviews.fetchReviews(this.state.page, hasMore => {
				this.setState({
					page: this.state.page + 1,
					fetchingReviews: false,
					hasMore,
				});
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
			rating
		} = this.state;
		const allReviews = reviews.getReviews();
		const reviewList = group(
			sort(
				filter(
					allReviews,
					searchKey,
					rating
				)
			, sortBy)
		, groupBy);
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

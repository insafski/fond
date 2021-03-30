import React from "react";
import PropTypes from "prop-types";

import Section from "@/components/containers/Section";
import Notification from "@/components/widgets/Notification";
import List from "@/components/containers/List";
import { useNews } from "../context";
import NewsLocation from "./NewsLocation";
import AllNews from "./AllNews";
import LoadMore from "./LoadMore";

export default function News({ items, mainPage, newsPage }) {
	const {
		isLoading,
		news,
		isError,
		loadMore,
		loadLocation,
		errorMessage,
		location,
		handleSetLocation,
	} = useNews();

	if (isLoading) {
		return <div>Loading</div>;
	}

	if (isError) {
		return <Notification message={errorMessage}/>;
	}

	if (news) {
		return (
			<Section className={"flex flex-col"}>
				<div className={"container px-2"}>
					<div className="hidden news-controllers flex justify-end mb-8">
						<div className="news-heading flex-1 flex items-center pl-8 text-4xl font-bold">
							<span> Новости </span>
						</div>
						{
							mainPage && (<AllNews/>)
						}
						<NewsLocation
							handleSetLocation={handleSetLocation}
							loadLocation={loadLocation}
							location={location}
						/>
					</div>
					<List
						items={items}
						type={"news"}
						className={"flex content-between justify-between w-full h-full flex-wrap"}
					/>
					{
						newsPage && (
							<div className={"flex place-content-center"}>
								<LoadMore loadMore={loadMore} />
							</div>)
					}
				</div>
			</Section>
		);
	}
}

News.displayName = "News";

News.propTypes = {
	items: PropTypes.array,
	newsPage: PropTypes.bool,
	mainPage: PropTypes.bool,
};

News.defaultProps = {
	items: [],
	newsPage: false,
	mainPage: false,
};

import React from "react";
import PropTypes from "prop-types";

import Section from "@/components/containers/Section";
import Notification from "@/components/widgets/Notification";
import List from "@/components/containers/List";
import { Button } from "@/components/elements/Form";

import { useNews } from "../context";

import NewsLocation from "./NewsLocation";
import AllNews from "./AllNews";

export default function News({ items, mainPage, more }) {
	const {
		isLoading,
		news,
		isError,
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
				<div className={"container"}>
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
						more && (
							<div className={"flex place-content-center"}>
								<Button text={"Показать ещё"} />
							</div>)
					}
				</div>
			</Section>
		);
	}
}

News.propTypes = {
	items: PropTypes.array,
	more: PropTypes.bool,
	mainPage: PropTypes.bool,
};

News.defaultProps = {
	items: [],
	more: false,
	mainPage: false,
};

News.displayName = "NewsSection";

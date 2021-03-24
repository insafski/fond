import React from "react";
import PropTypes from "prop-types";

import Section from "@/components/containers/Section";
import Notification from "@/components/widgets/Notification";
import List from "@/components/containers/List";
import { useNews } from "../context";
import NewsLocation from "./NewsLocation";
import AllNews from "./AllNews";
import LoadMore from "./LoadMore";

export default function News({ mainPage, newsPage }) {
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

	const data = [
		{
			heading: {
				title: "test",
				description: "Задача организации, в особенности же реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании дальнейших направлений развития. Не следует, однако забывать, что начало",
			},
			categories: "test",
			country: "test",
			date: "00.11.2020",
			picture: [
				{ src: "https://static.remove.bg/remove-bg-web/63d05fa057f88514c07ec5292f382c383f4e2899/assets/start_remove-79a4598a05a77ca999df1dcb434160994b6fde2c3e9101984fb1be0f16d0a74e.png" },
			],
		},
		{
			heading: {
				title: "test",
				description: "Задача организации, в особенности же реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании дальнейших направлений развития. Не следует, однако забывать, что начало",
			},
			categories: "test",
			country: "test",
			date: "00.11.2020",
			picture: [
				{ src: "https://static.remove.bg/remove-bg-web/63d05fa057f88514c07ec5292f382c383f4e2899/assets/start_remove-79a4598a05a77ca999df1dcb434160994b6fde2c3e9101984fb1be0f16d0a74e.png" },
			],
		},
		{
			heading: {
				title: "test",
				description: "Задача организации, в особенности же реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании дальнейших направлений развития. Не следует, однако забывать, что начало",
			},
			categories: "test",
			country: "test",
			date: "00.11.2020",
			picture: [
				{ src: "https://static.remove.bg/remove-bg-web/63d05fa057f88514c07ec5292f382c383f4e2899/assets/start_remove-79a4598a05a77ca999df1dcb434160994b6fde2c3e9101984fb1be0f16d0a74e.png" },
			],
		},
		{
			heading: {
				title: "test",
				description: "Задача организации, в особенности же реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании дальнейших направлений развития. Не следует, однако забывать, что начало",
			},
			categories: "test",
			country: "test",
			date: "00.11.2020",
			picture: [
				{ src: "https://static.remove.bg/remove-bg-web/63d05fa057f88514c07ec5292f382c383f4e2899/assets/start_remove-79a4598a05a77ca999df1dcb434160994b6fde2c3e9101984fb1be0f16d0a74e.png" },
			],
		},
		{
			heading: {
				title: "test",
				description: "Задача организации, в особенности же реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании дальнейших направлений развития. Не следует, однако забывать, что начало",
			},
			categories: "test",
			country: "test",
			date: "00.11.2020",
			picture: [
				{ src: "https://static.remove.bg/remove-bg-web/63d05fa057f88514c07ec5292f382c383f4e2899/assets/start_remove-79a4598a05a77ca999df1dcb434160994b6fde2c3e9101984fb1be0f16d0a74e.png" },
			],
		},
		{
			heading: {
				title: "test",
				description: "Задача организации, в особенности же реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании дальнейших направлений развития. Не следует, однако забывать, что начало",
			},
			categories: "test",
			country: "test",
			date: "00.11.2020",
			picture: [
				{ src: "https://static.remove.bg/remove-bg-web/63d05fa057f88514c07ec5292f382c383f4e2899/assets/start_remove-79a4598a05a77ca999df1dcb434160994b6fde2c3e9101984fb1be0f16d0a74e.png" },
			],
		},
		{
			heading: {
				title: "test",
				description: "Задача организации, в особенности же реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании дальнейших направлений развития. Не следует, однако забывать, что начало",
			},
			categories: "test",
			country: "test",
			date: "00.11.2020",
			picture: [
				{ src: "https://static.remove.bg/remove-bg-web/63d05fa057f88514c07ec5292f382c383f4e2899/assets/start_remove-79a4598a05a77ca999df1dcb434160994b6fde2c3e9101984fb1be0f16d0a74e.png" },
			],
		},
	];

	if (isLoading) {
		return <div>Loading</div>;
	}

	if (isError) {
		return <Notification message={errorMessage}/>;
	}

	if (news) {
		return (
			<Section className={"flex flex-col"}>
				<div className="container">
					<div className="news-controllers flex justify-end mb-8">
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
						items={data}
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
	newsPage: PropTypes.bool,
	mainPage: PropTypes.bool,
};

News.defaultProps = {
	newsPage: false,
	mainPage: false,
};

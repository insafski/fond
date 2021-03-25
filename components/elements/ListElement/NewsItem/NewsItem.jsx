import React from "react";
import PropTypes from "prop-types";
import { Picture } from "@/components/elements/Picture";

export default function NewsItem({ heading: { title, description }, categories, country, date, picture }) {
	return (
		<div className="news-item flex-col w-full md:w-2/6 px-4">
			<div className="news-item__picture h-2/4">
				<Picture items={picture} />
			</div>
			<div className="news-item__body h-2/4">
				<div className="body-top flex justify-between my-4">
					<span className={"country"}>{country}</span>
					<span className={"date"}>{date}</span>
				</div>
				<div className="body-main">
					<span className={"heading block my-4 font-bold text-3xl"}> {title}</span>
					<span className={"description"}>{description}</span>
				</div>
				<div className="body-bottom my-4">
					<span className={"categories font-bold border-b-4 border-yellow-900 py-2"}>{categories}</span>
				</div>
			</div>
		</div>
	);
}

NewsItem.displayName = "NewsItem";

NewsItem.propTypes = {
	heading: PropTypes.object,
	categories: PropTypes.string,
	country: PropTypes.string,
	date: PropTypes.string,
	picture: PropTypes.array,
	description: PropTypes.string,
};

NewsItem.defaultProps = {
	heading: {},
	categories: "",
	country: "",
	date: "",
	picture: [],
	description: "",
};

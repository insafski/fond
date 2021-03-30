import React from "react";
import PropTypes from "prop-types";
import get from "lodash/get";
import Link from "next/link";

import Picture from "@/components/elements/Picture";

export default function NewsItem({ heading, slug, categories, country, date, picture }) {
	const title = get(heading, "title", "");
	const description = get(heading, "description", "");

	return (
		<Link href={`/news/${slug}`}>
			<div className={"news-item flex-col w-full md:w-2/6 hover:bg-green-100 cursor-pointer"}>
				<div className={"news-item__picture mb-1"}>
					<Picture items={picture} />
				</div>
				<div className={"news-item__meta flex justify-between mb-2"}>
					<span className={"country"}>
						{country}
					</span>
					<span className={"date"}>
						{date}
					</span>
				</div>
				<div className={"news-item__title mb-0.5"}>
					<h3>
						{title}
					</h3>
				</div>
				<div className={"news-item__description mb-1"}>
					<p>
						{description}
					</p>
				</div>
				<div className={"news-item__categories"}>
					<span className={"font-bold border-b-4 border-yellow-900 py-2"}>
						{categories}
					</span>
				</div>
			</div>
		</Link>
	);
}

NewsItem.propTypes = {
	heading: PropTypes.object,
	slug: PropTypes.string,
	categories: PropTypes.string,
	country: PropTypes.string,
	date: PropTypes.string,
	picture: PropTypes.array,
	description: PropTypes.string,
};

NewsItem.defaultProps = {
	heading: {},
	slug: "",
	categories: "",
	country: "",
	date: "",
	picture: [],
	description: "",
};

NewsItem.displayName = "NewsItem";

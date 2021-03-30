import React from "react";
import PropTypes from "prop-types";
import get from "lodash/get";
import Link from "next/link";
import moment from "moment";

import Picture from "@/components/elements/Picture";

export default function NewsItem({ heading, slug, categories, country, published_at, picture }) {
	const title = get(heading, "title", "");
	const subtitle = get(heading, "subtitle", "");
	const countryName = get(country, "name", "");

	return (
		<div className={"news-item flex-col w-full md:w-2/6 mb-3.5 px-1"}>
			<div className={"news-item__picture mb-1"}>
				<Link href={`/news/${slug}`}>
					<a>
						<Picture items={picture} />
					</a>
				</Link>
			</div>
			<div className={"news-item__meta uppercase text-gray font-medium text-sm flex justify-between mb-2"}>
				{
					countryName && (
						<span>
							{countryName}
						</span>
					)
				}
				{
					published_at && (
						<span>
							{moment(published_at).format("DD.MM.YYYY")}
						</span>
					)
				}
			</div>
			{
				title && (
					<div className={"news-item__title mb-0.5"}>
						<Link href={`/news/${slug}`}>
							<a>
								<h3 className={"font-semibold text-h3 md:text-h3-md"}>
									{title}
								</h3>
							</a>
						</Link>
					</div>
				)
			}
			{
				subtitle && (
					<div className={"news-item__description mb-1"}>
						<p className={"font-normal text-base"}>
							{subtitle}
						</p>
					</div>
				)
			}
			<div className={"news-item__categories"}>
				<span className={"font-bold border-b-4 border-yellow-900 py-2"}>
					{categories}
				</span>
			</div>
		</div>
	);
}

NewsItem.propTypes = {
	heading: PropTypes.object,
	slug: PropTypes.string,
	categories: PropTypes.string,
	country: PropTypes.object,
	published_at: PropTypes.string,
	picture: PropTypes.array,
	description: PropTypes.string,
};

NewsItem.defaultProps = {
	heading: {},
	slug: "",
	categories: "",
	country: {
		name: "",
	},
	published_at: "",
	picture: [],
	description: "",
};

NewsItem.displayName = "NewsItem";

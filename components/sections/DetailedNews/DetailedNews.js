import React from "react";
import PropTypes from "prop-types";

import NewsDetails from "@/components/elements/NewsDetails";
import Picture from "@/components/elements/Picture";

export default function DetailedNews({ main_picture, title, subtitle, description, original_lang, created_date, category, country }) {
	console.log(main_picture);

	return (
		<div className={"detailed-news px-4 sm:px-40 md:px-60 self-center"}>
			<Picture items={main_picture} className={"flex align-start"}/>
			<NewsDetails category={category} country={country} create_date={created_date} slugToOriginal={original_lang} />

		</div>
	);
}

DetailedNews.displayName = "DetailedNews";

DetailedNews.propTypes = {
	main_picture: PropTypes.array,
	title: PropTypes.string,
	subtitle: PropTypes.string,
	description: PropTypes.string,
	original_lang: PropTypes.string,
	created_date: PropTypes.string,
	category: PropTypes.string,
	country: PropTypes.string,
};

DetailedNews.defaultProp = {
	main_picture: [],
	title: "",
	subtitle: "",
	description: "",
	original_lang: "",
	created_date: "",
	category: "",
	country: "",
};

import React from "react";
import PropTypes from "prop-types";

import styles from "./NewsDetails.module.scss";

export default function NewsDetails({ category, country, create_date, slugToOriginal }) {
	return (
		<div className={"py-8 text-2xl flex flex-wrap"}>
			<div className={"flex-1"}>
				<span className={styles.category}>
					{category}
				</span>
				<span className={styles.country}>
					{country}
				</span>
				<span className={styles.date}>
					{create_date}
				</span>
			</div>
			<span className={styles.originalShow}>
				{slugToOriginal}
			</span>
		</div>
	);
}

NewsDetails.displayName = "NewsDetails";

NewsDetails.propTypes = {
	category: PropTypes.string,
	country: PropTypes.string,
	create_date: PropTypes.string,
	slugToOriginal: PropTypes.string, // TODO: need to think abt it
};

NewsDetails.defaultProps = {
	category: "",
	country: "",
	create_date: "",
	slugToOriginal: "",
};

import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";

import styles from "./Breadcrumbs.module.scss";

export default function Breadcrumbs({ breadcrumbs }) {
	function convertBreadcrumb(string) {
		return string
			.replace(/-/g, " ")
			.replace(/oe/g, "ö")
			.replace(/ae/g, "ä")
			.replace(/ue/g, "ü")
			.toUpperCase();
	}

	return !!breadcrumbs && (
		<nav aria-label={"breadcrumbs px-1"} className={"breadcrumbs"}>
			<ul className={"breadcrumbs__list flex"}>
				<li className={"breadcrumbs__item"}>
					<Link href={"/"}>
						<a className={styles.breadcrumbs__link}>Главная</a>
					</Link>
				</li>
				{
					breadcrumbs.map(({ href, breadcrumb }, idx) => {
						return (
							<li key={`${href}-${idx}`} className={"breadcrumbs__item"}>
								<Link href={href}>
									<a className={styles.breadcrumbs__link}>
										{convertBreadcrumb(breadcrumb)}
									</a>
								</Link>
							</li>
						);
					})
				}
			</ul>
		</nav>
	);
}

Breadcrumbs.propTypes = {
	breadcrumbs: PropTypes.array,
};

Breadcrumbs.defaultProps = {
	breadcrumbs: [],
};

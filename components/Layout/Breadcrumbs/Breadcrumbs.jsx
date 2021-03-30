import React, { Fragment } from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import cx from "classnames";

export default function Breadcrumbs({ breadcrumbs }) {
	function convertBreadcrumb(string) {
		return string
			.replace(/-/g, " ")
			.replace(/oe/g, "ö")
			.replace(/ae/g, "ä")
			.replace(/ue/g, "ü");
	}

	return !!breadcrumbs && (
		<nav aria-label={"breadcrumbs"} className={"breadcrumbs px-1"}>
			<ul className={"breadcrumbs__list flex"}>
				<li className={"breadcrumbs__item"}>
					<Link href={"/"}>
						<a className={cx("text-gray")}>Главная</a>
					</Link>
				</li>
				<span className={"px-1 text-gray"}>
					{">"}
				</span>
				{
					breadcrumbs.map(({ href, breadcrumb }, idx) => {
						return (
							<li key={`${href}-${idx}`} className={"breadcrumbs__item"}>
								<Link href={href}>
									<a className={cx("text-blue")}>
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

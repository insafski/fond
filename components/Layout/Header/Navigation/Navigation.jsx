import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

import Logo from "@/components/elements/Logo";

export default function Navigation({ items }) {
	return (
		<div className={"navigation flex justify-between"}>
			<div className={"navigation__logo flex-shrink-0 flex items-center"}>
				<Link href={"/"}>
					<a href={"/"}>
						<Logo title={"title"} />
					</a>
				</Link>
			</div>
			<nav className={"navigation__container hidden sm:block sm:ml-6"}>
				<ul className={"navigation__list flex space-x-4"}>
					{
						items.map(({ title, picture, link }, idx) => {
							return (
								<li key={idx} className={"navigation__item bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"}>
									<Link href={link}>
										<a href={link}>
											{title}
										</a>
									</Link>
								</li>
							);
						})
					}
				</ul>
			</nav>
		</div>
	);
}

Navigation.propTypes = {
	items: PropTypes.array,
};

Navigation.defaultProps = {
	items: [],
};

Navigation.displayName = "Navigation";

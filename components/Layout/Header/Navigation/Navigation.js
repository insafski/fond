import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

import Logo from "@/components/elements/Logo";
import Authorization from "@/components/containers/Section/Authorization";
import LanguageChanger from "@/components/elements/LanguageChanger";

export default function Navigation({ items }) {
	return (
		<div className={"navigation flex justify-between"}>
			<div className={"navigation__logo"}>
				<Link href={"/"}>
					<a href={"/"}>
						<Logo title={"title"} />
					</a>
				</Link>
			</div>
			<nav className={"navigation__container"}>
				<ul className={"navigation__list"}>
					{
						items.map(({ title, picture, link }, idx) => {
							return (
								<li key={idx} className={"navigation__item"}>
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
			<div className={"navigation__globals"}>
				<Authorization />
				<LanguageChanger />
			</div>
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

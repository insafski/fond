import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import Icon from "../Icon";

export default function SocialNetworks({ className }) {
	const socials = [
		{
			type: "vk",
			link: "vk.com",
		},
		{
			type: "facebook",
			link: "facebook.com",
		},
		{
			type: "instagram",
			link: "instagram.com",
		},
		{
			type: "youtube",
			link: "youtube.com",
		},
		{
			type: "twitter",
			link: "twitter.com",
		},
	];

	return (
		<div className={"social"}>
			<ul className={cx("social__list flex flex-row justify-between", className)}>
				{
					socials.map(({ type, link }, idx) => {
						return (
							<a
								key={`${idx}-${type}`}
								href={link}
								className={"social__item"}
								target={"_blank"}
								rel={"noreferrer"}
							>
								<Icon type={type} style={{ fontSize: 40 }} />
							</a>
						);
					})
				}
			</ul>
		</div>
	);
}

SocialNetworks.propTypes = {
	className: PropTypes.string,
};

SocialNetworks.defaultProps = {
	className: "",
};

import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import Icon from "../Icon";

export default function SocialNetworks({ className }) {
	const socials = [
		{
			type: "facebook",
		},
		{
			type: "twitter",
		},
		{
			type: "instagram",
		},
		{
			type: "vk",
		},
		{
			type: "youtube",
		},

	];

	return (
		<ul className={cx("flex flex-row justify-evenly", className)}>
			{
				socials.map(({ type }, idx) => <Icon key={`${idx}-${type}`} type={type} />)
			}
		</ul>
	);
}

SocialNetworks.propTypes = {
	className: PropTypes.string,
};

SocialNetworks.defaultProps = {
	className: "",
};

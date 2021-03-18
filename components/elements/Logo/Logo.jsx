import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import Link from "@/components/elements/Link";
import Icon from "@/components/elements/Icon";
import logo from "@/assets/icons/Logo.svg";

export default function Logo({ type, className }) {
	const logos = {
		header: <img className={"lg:block h-10 w-auto"} src={logo} alt="Workflow" />,
		footer: <Icon type={"logo"} className={"text-7xl"}/>,
		get() {
			return this[type] || null;
		},
	};

	return (
		<Link href={"/news"}>
			<div className={cx("flex flex-row items-center", className)}>
				{logos.get(type)}
				<span>
					ФОНД ПОДДЕРЖКИ
					<br/>
					ХРИСТИАНСКОЙ КУЛЬТУРЫ
					<br />
					И НАСЛЕДИЯ
				</span>
			</div>
		</Link>
	);
}

Logo.propTypes = {
	type: PropTypes.string,
	className: PropTypes.string,
};

Logo.defaultProps = {
	type: "",
	className: "",
};

Logo.displayName = "Logo";

import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import Link from "@/components/elements/Link";
import Icon from "@/components/elements/Icon";
import logo from "@/assets/icons/Logo.svg";

export default function Logo({ type, className, classNameLogo }) {
	const logos = {
		header: <img className={cx("lg:block h-10 w-auto", classNameLogo)} src={logo} alt="Workflow" />,
		footer: <Icon type={"logo"} className={"text-7xl"}/>,
		get() {
			return this[type] || null;
		},
	};

	return (
		<Link href={"/news"}>
			<div className={cx("flex flex-row items-center justify-center sm:justify-start", className)}>
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
	classNameLogo: PropTypes.string,
};

Logo.defaultProps = {
	type: "",
	className: "",
	classNameLogo: "",
};

Logo.displayName = "Logo";

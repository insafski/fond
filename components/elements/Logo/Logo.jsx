import React from "react";
import PropTypes from "prop-types";

import Link from "@/components/elements/Link";
import Icon from "@/components/elements/Icon";
import LogoDeskTop from "@/assets/icons/Logo.svg";

export default function Logo({ type }) {
	const logos = {
		header: <img className="lg:block h-10 w-auto" src={LogoDeskTop} alt="Workflow" />,
		footer: <Icon type={"logo"} className={"text-7xl"}/>,
		get() {
			return this[type] || null;
		},
	};

	return (
		<Link href={"/news"}>
			<div className={`flex flex-row items-center ${type === "footer" && "text-yellow-600"}`}>
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
};

Logo.defaultProps = {
	type: "",
};

import React from "react";
import PropTypes from "prop-types";

import Link from "@/components/elements/Link";

export default function Logo({ title }) {
	return (
		<Link href={"/news"}>
			<div className={"flex flex-row items-center"}>
				<img className="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg" alt="Workflow" />
				<img className="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow"/>
			</div>
		</Link>
	);
}

Logo.propTypes = {
	title: PropTypes.string,
};

Logo.defaultProps = {
	title: "",
};

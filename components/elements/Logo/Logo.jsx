import Resact from "react";
import PropTypes from "prop-types";

import LinkMaker from "@/utils/linkMaker";

export default function Logo({ title }) {
	return (
		<LinkMaker href={"news"}>
			<div className={"flex flex-row items-center"}>
				<img class="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg" alt="Workflow" />
				<img class="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow"/>
			</div>
		</LinkMaker>
	);
}

Logo.propTypes = {
	title: PropTypes.string,
};

Logo.defaultProps = {
	title: "",
};

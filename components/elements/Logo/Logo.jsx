import Resact from "react";

import Image from "next/image";
import PropTypes from "prop-types";

import logo from "@/assets/img/test-logo.png";
import LinkMaker from "@/utils/linkMaker";

export default function Logo({ title }) {
	return (
		<LinkMaker href={"news"}>
			<div>
				<Image src={logo} width={100} height={100} />
				{title}
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

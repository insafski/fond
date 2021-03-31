import React from "react";
import PropTypes from "prop-types";

import Picture from "@/components/elements/Picture";
import Heading from "@/components/elements/Heading";

export default function About({ picture, heading }) {
	const { title, subTitle, description } = heading;

	return (
		<div className={"container mx-auto"}>
			<Heading heading={{ title }} />

			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				<div>
					<Picture items={picture} />
				</div>
				<div>
					{
						subTitle && (
							<p className={"font-semibold mb-8 text-xl"}>{subTitle}</p>
						)
					}
					{
						description && (
							<p className={"mb-4"}>{description}</p>
						)
					}
				</div>
			</div>
		</div>
	);
}

About.propTypes = {
	picture: PropTypes.array,
	heading: PropTypes.object,
};

About.defaultProps = {
	picture: [],
	heading: {},
};

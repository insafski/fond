import React, { Fragment } from "react";

import Link from "@/components/elements/Link";

export default function AllNews() {
	return (
		<Link href={"/news"}>
			<a className={"flex px-4 py-2 border border-solid border-gray-300 mr-8 items-center"}>
				<Fragment>
					<div className={"flex items-center"}>
						<span> All News </span>
					</div>
				</Fragment>
			</a>
		</Link>
	);
}

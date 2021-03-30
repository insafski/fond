import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import get from "lodash/get";

import Breadcrumbs from "@/components/Layout/Breadcrumbs";

export default function BreadcrumbsBar() {
	const router = useRouter();
	const [breadcrumbs, setBreadcrumbs] = useState([]);

	useEffect(() => {
		if (router) {
			const linkPath = router.asPath.split("/");

			linkPath.shift();

			const pathArray = linkPath.map((path, i) => {
				return {
					breadcrumb: path,
					href: `/${linkPath.slice(0, i + 1).join("/")}`,
				};
			});

			setBreadcrumbs(pathArray);
		}
	}, [router]);

	return breadcrumbs.length && get(breadcrumbs, "[0].href", "") !== "/" && (
		<div className={"breadcrumbs-bar"}>
			<div className={"container"}>
				<Breadcrumbs breadcrumbs={breadcrumbs} />
			</div>
		</div>)
	;
}

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

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

	return breadcrumbs.length && breadcrumbs[0].href !== "/" && (
		<div className="breaadcrumb-bar">
			<div className="container py-4">
				<Breadcrumbs breadcrumbs={breadcrumbs} />
			</div>
		</div>)
	;
}

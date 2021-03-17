import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Breadcrumbs() {
	const router = useRouter();
	const [breadcrumbs, setBreadcrumbs] = useState(null);

	function convertBreadcrumb(string) {
		return string
			.replace(/-/g, " ")
			.replace(/oe/g, "ö")
			.replace(/ae/g, "ä")
			.replace(/ue/g, "ü")
			.toUpperCase();
	}

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

	return !!breadcrumbs && (
		<nav aria-label={"breadcrumbs"} className={"breadcrumbs"}>
			<ul className={"breadcrumbs__list flex"}>
				<li className={"breadcrumbs__item mr-4"}>
					<Link href={"/"}>
						<a>Главная</a>
					</Link>
				</li>
				{
					breadcrumbs.map(({ href, breadcrumb }, idx) => {
						return (
							<li key={`${href}-${idx}`} className={"breadcrumbs__item mr-4"}>
								<Link href={href}>
									<a className={"breadcrumbs__link"}>
										{convertBreadcrumb(breadcrumb)}
									</a>
								</Link>
							</li>
						);
					})
				}
			</ul>
		</nav>
	);
}

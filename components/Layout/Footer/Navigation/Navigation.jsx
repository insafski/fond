import React from "react";
import Link from "@/components/elements/Link";

export default function Navigation() {
	const navigationButtons = [
		{
			title: "Главная",
			href: "/",
		},
		{
			title: "О нас",
			href: "/about",
		},
		{
			title: "Новости",
			href: "/news",
		},
		{
			title: "Контакты",
			href: "contacts",
		},
	];

	return (
		<div className="Navigation mt-8 md:mt-0 w-full md:px-28 text-center">
			<div className="Navigation__item py-12 text-gray-50">
				<ul className={"flex flex-row justify-between px-4"}>
					{
						navigationButtons.map(({ title, href }) => <li key={title} className={"text-xl"}>
							<Link href={href}>
								{title}
							</Link>
						</li>)
					}
				</ul>
			</div>
		</div>
	);
}

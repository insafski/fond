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
		<div className={"navigation text-white"}>
			<ul className={"flex flex-row justify-between"}>
				{
					navigationButtons.map(({ title, href }) => <li key={title} className={"text-xl"}>
						<Link href={href}>
							{title}
						</Link>
					</li>)
				}
			</ul>
		</div>
	);
}

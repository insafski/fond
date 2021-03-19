import React from "react";
import Link from "@/components/elements/Link";

import styles from "./Navigation.module.scss";

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
			<div className="Navigation__item w-full">
				<label htmlFor={"form_footer"} className={styles.label}>Подпишитесь на нашу новостную рассылку</label>
				<div className="relative text-gray-600">
					<input type="search" name="serch" placeholder="Search" className="w-full bg-white h-10 px-5 pr-10 text-sm focus:outline-none rounded-md"/>
					<button type="submit" className="absolute right-0 top-0 h-full px-4 bg-red-500 rounded-r-md">
						Подпишитесь
					</button>
				</div>
			</div>
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

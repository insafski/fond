import React, { Fragment } from "react";
import { useRouter } from "next/router";
import Menu from "@/components/containers/Menu";
import cx from "classnames";

import Link from "@/components/elements/Link";
import Dropdown from "@/components/containers/Dropdown";

import UK from "@/assets/locales/uk.svg";
import Albania from "@/assets/locales/albania.svg";
import China from "@/assets/locales/china.svg";
import France from "@/assets/locales/france.svg";
import Georgia from "@/assets/locales/georgia.svg";
import Greece from "@/assets/locales/greece.svg";
import Israel from "@/assets/locales/israel.svg";
import Japan from "@/assets/locales/japan.svg";
import Russia from "@/assets/locales/russia.svg";
import Serbia from "@/assets/locales/serbia.svg";
import Turkey from "@/assets/locales/turkey.svg";
import UAE from "@/assets/locales/uae.svg";

export default function LanguageChanger() {
	const router = useRouter();

	const localesConfig = {
		ru: {
			icon: Russia,
			title: "Русский",
		},
		en: {
			icon: UK,
			title: "English",
		},
		el: {
			icon: Greece,
			title: "Ελληνικά",
		},
		sr: {
			icon: Serbia,
			title: "Српски"
		},
		fr: {
			icon: France,
			title: "français",
		},
		ge: {
			icon: Georgia,
			title: "ქართველი",
		},
		al: {
			icon: Albania,
			title: "Shqiptare"
		},
		ae: {
			icon: UAE,
			title: "عرب",
		},
		he: {
			icon: Israel,
			title: "עִברִית",
		},
		tr:{
			icon: Turkey,
			title: "Türk",
		},
		cn:{
				icon:China,
			title: "中国人"
		},
		ja:{
			icon: Japan,
			title: "日本語"
		},
	}

	const menu = (
		<Menu selectable={true} className={"rounded-none shadow-none bg-white border border-solid border-gray-300 outline-none"}>
			{
				router.locales.map((item, idx) => (
					<Fragment key={idx}>
						<Link href={`${router.pathname}`} locale={item}>
							<div className={cx("flex items-center px-4 py-2", localesConfig[item].class, { "border-b border-solid border-gray-300": idx !== router.locales.length - 1 })}>
								<img key={item} src={localesConfig[item].icon} className={"w-8 mr-4"}/>
								<span>{localesConfig[item].title}</span>
							</div>
						</Link>
					</Fragment>
				))
			}
		</Menu>
	);

	return (
		<div className={"ml-3 relative"}>
			<Dropdown
				trigger={["click"]}
				overlay={menu}
				animation={"slide-up"}
			>
				<button className={"bg-gray-800 ring-2 ring-white flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"}>
					<img className="h-8 w-8 rounded-full" src={localesConfig[router.locale].icon} alt=""/>
				</button>
			</Dropdown>
		</div>
	);
}


import React, { Fragment } from "react";
import { useRouter } from "next/router";
import cx from "classnames";

import Menu from "@/components/containers/Menu";
import Link from "@/components/elements/Link";
import Dropdown from "@/components/containers/Dropdown";
import { localesConfig } from "@/utils/localesConfig";

export default function LanguageChanger() {
	const router = useRouter();
	const menu = (
		<Menu selectable={true} className={"rounded-none shadow-none bg-white border border-solid border-gray-300 outline-none p-0"}>
			{
				router.locales.map((item, idx) => {
					const icon = localesConfig[item].icon;
					const title = localesConfig[item].title;
					const classOption = localesConfig[item].class;

					return (
						<Fragment key={idx}>
							<Link href={`${router.asPath}`} locale={item}>
								<div className={cx("flex items-center px-4 py-2", classOption, { "border-b border-solid border-gray-300": idx !== router.locales.length - 1 })}>
									<img key={item} src={icon} className={"w-8 mr-4"} />
									<span>{title}</span>
								</div>
							</Link>
						</Fragment>
					);
				})
			}
		</Menu>
	);

	const localeIcon = localesConfig[router.locale].icon;

	return (
		<div className={"ml-3 relative"}>
			<Dropdown
				trigger={["click"]}
				overlay={menu}
				animation={"slide-up"}
			>
				<button className={"bg-gray-800 ring-2 ring-white flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"}>
					<img className="h-8 w-8 rounded-full" src={localeIcon} alt="" />
				</button>
			</Dropdown>
		</div>
	);
}


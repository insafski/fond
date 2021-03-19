import React, { Fragment, useEffect } from "react";
import { useRouter } from "next/router";
import cx from "classnames";

import Dropdown from "@/components/containers/Dropdown";
import { localesConfig } from "@/utils/localesConfig";
import Menu from "@/components/containers/Menu";

export default function NewsLocation({ handleSetLocation, location }) {
	const router = useRouter();

	useEffect(() => {
		handleSetLocation(router.locale);
	}, []);

	const menu = (
		<Menu selectable={true} className={"rounded-none shadow-none bg-white border border-solid border-gray-300 outline-none"}>
			{
				router.locales.map((item, idx) => {
					const icon = localesConfig[item].icon;
					const country = localesConfig[item].country;
					const classOption = localesConfig[item].class;

					return (
						<Fragment key={idx}>
							<div className={cx("flex items-center px-4 py-2", classOption, { "border-b border-solid border-gray-300": idx !== router.locales.length - 1 })}>
								<img key={item} src={icon} className={"w-8 mr-4"} />
								<span>{country}</span>
							</div>
						</Fragment>
					);
				})
			}
		</Menu>
	);

	const { country, icon } = localesConfig[location];

	return (
		<div className="news-filter">
			<Dropdown
				trigger={["click"]}
				overlay={menu}
				animation={"slide-up"}
			>
				<button className={"flex px-4 py-2 border border-solid border-gray-300"}>
					<Fragment>
						<div className={"flex items-center"}>
							<img src={icon} className={"w-8 mr-4"} />
							<span>{country}</span>
						</div>
					</Fragment>
				</button>
			</Dropdown>
		</div>
	);
}

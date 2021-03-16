import React, { Fragment } from "react";
import { useRouter } from "next/router";
import Menu, { Divider } from "rc-menu";

import LinkMaker from "../../../utils/linkMaker";
import Dropdown from "@/components/containers/Dropdown";

export default function LanguageChanger() {
	const router = useRouter();

	const menu = (
		<Menu selectable={true}>
			{
				router.locales.map((item, idx) => (
					<Fragment key={idx}>
						<LinkMaker href={`${router.pathname}`} locale={item}>
							<div key={item}>{item}</div>
						</LinkMaker>
						{router.locales.length !== idx + 1 && <Divider />}
					</Fragment>
				))
			}
		</Menu>
	);

	return (
		<div className={"ml-3 relative"}>
			<Dropdown trigger={["click"]} overlay={menu} animation="slide-up">
				<button className={"bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"}>
					<img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt=""/>
				</button>
			</Dropdown>
		</div>
	);
}


import React from "react";
import { useRouter } from "next/router";
import Menu, { Divider } from "rc-menu";

import LinkMaker from "../../../utils/linkMaker";
import Dropdown from "@/components/containers/Dropdown";

export default function LanguageChanger() {
	const router = useRouter();

	const menu = (
		<Menu selectable={true}>
			{router.locales.map((item, index) => (
				<>
					<LinkMaker href={`${router.pathname}`} locale={item}>
						<div key={item}>{item}</div>
					</LinkMaker>
					{router.locales.length !== index + 1 && <Divider />}
				</>
			))}
		</Menu>
	);

	return (
		<>
			<Dropdown trigger={["click"]} overlay={menu} animation="slide-up">
				<button style={{ width: 100 }}>{router.locale}</button>
			</Dropdown>
		</>
	);
}


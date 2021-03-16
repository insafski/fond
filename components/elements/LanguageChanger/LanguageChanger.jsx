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
		<>
			<Dropdown trigger={["click"]} overlay={menu} animation="slide-up">
				<button style={{ width: 100 }}>{router.locale}</button>
			</Dropdown>
		</>
	);
}


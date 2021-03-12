import React from "react";
import { MobileView } from "react-device-detect";
import Collapse from "rc-collapse";

import Navigation from "../Navigation";
import Contacts from "../Contacts";

export default function MobileFooter() {
	const Panel = Collapse.Panel;

	return (
		<MobileView>
			<Collapse accordion={true}>
				<Panel header="Навигация"><Navigation/></Panel>
				<Panel header="Контакты"><Contacts/></Panel>
			</Collapse>
		</MobileView>
	);
}

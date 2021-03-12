import React from "react";
import { MobileView } from "react-device-detect";
import Collapse from "rc-collapse";

export default function MobileFooter({ services, contacts, navigation }) {
	const Panel = Collapse.Panel;

	return (
		<MobileView>
			<Collapse accordion={true}>
				<Panel header="Услуги" headerClass="my-header-class">
					{services}
				</Panel>
				<Panel header="Навигация">{navigation}</Panel>
				<Panel header="Контакты">{contacts}</Panel>
			</Collapse>
		</MobileView>
	);
}

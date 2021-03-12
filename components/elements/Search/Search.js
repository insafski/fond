import React, { useState } from "react";
import Menu from "rc-menu";

import Dropdown from "@/components/containers/Dropdown";

export default function Search() {
	const [state, setState] = useState("");

	const menu = (
		<Menu>
			<input placeholder="search" onChange={event => setState(event.target.value)} />
			{state}
		</Menu>
	);

	return (
		<>
			<Dropdown trigger={["click"]} overlay={menu} animation="slide-up">
				<button style={{ width: 100 }}>search</button>
			</Dropdown>
		</>
	);
}

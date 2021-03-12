import { useState } from 'react';
import Dropdown from "rc-dropdown";
import Menu from "rc-menu";

export default function Search() {

	const [state, setState] = useState("");

	const menu = (
		<Menu>
			<input placeholder="search" onChange={(event) => setState(event.target.value)} />
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

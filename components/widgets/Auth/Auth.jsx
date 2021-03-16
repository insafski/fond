import React from "react";

import Dropdown from "@/components/containers/Dropdown";
import { useAuthContext } from "@/components/widgets/Auth/context";

export default function Authorization() {
	const { handleOpenRegister, handleOpenLogin } = useAuthContext();

	const menu = (
		<div>
			<div key="login" onClick={handleOpenLogin}>
				Login
			</div>
			<div key="register" onClick={handleOpenRegister}>
				Register
			</div>
		</div>
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

import React from "react";

import Dropdown from "@/components/containers/Dropdown";
import { useAuthContext } from "@/components/widgets/Auth/context";
import Menu from "@/components/containers/Menu";

export default function Authorization() {
	const { handleOpenRegister, handleOpenLogin } = useAuthContext();

	const menu = (
		<Menu selectable={true} className={"rounded-none shadow-none bg-white border border-solid border-gray-300 outline-none"}>
			<div key="login" className={"place-content-center border-b border-solid border-gray-300 flex items-center p-4"} onClick={handleOpenLogin}>
				Login
			</div>
			<div key="register" className={"flex items-center p-4"} onClick={handleOpenRegister}>
				Register
			</div>
		</Menu>
	);

	return (
		<div className={"ml-3 relative"}>
			<Dropdown trigger={["click"]} overlay={menu} animation="slide-up">
				<i className="h-8 w-8 fscch-user"/>
			</Dropdown>
		</div>
	);
}

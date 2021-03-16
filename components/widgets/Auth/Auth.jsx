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
		<>
			<Dropdown trigger={["click"]} overlay={menu} animation="slide-up">
				<button style={{ width: 100 }}>open</button>
			</Dropdown>
		</>
	);
}

import React from "react";

import NavigationBar from "@/components/Layout/Bars/NavigationBar";

export default function Header() {
	return (
		<header className={"header flex flex-row py-2"}>
			<div className="container">
				<NavigationBar />
			</div>
		</header>
	);
}

import React from "react";

import NavigationBar from "@/components/Layout/Bars/NavigationBar";

export default function Header() {
	return (
		<header className={"header bg-gray-800 flex flex-row py-4"}>
			<div className="container">
				<NavigationBar />
			</div>
		</header>
	);
}

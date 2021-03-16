import React from "react";

import Navigation from "./Navigation";
import Search from "@/components/elements/Search";

export default function Header() {
	return (
		<header className={"header"}>
			<Navigation />
			<Search />
		</header>
	);
}

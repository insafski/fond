import React from "react";

import Navigation from "./Navigation";
import Search from "@/components/elements/Search";
import Register from "@/components/containers/Section/Authorization/Register";
import Login from "@/components/containers/Section/Authorization/Login";

export default function Header() {
	return (
		<header className={"header"}>
			<Navigation />
			<Search />
			<Register />
			<Login/>
		</header>
	);
}

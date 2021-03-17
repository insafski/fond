import React from "react";

import { Auth } from "@/components/widgets/Auth";
import LanguageChanger from "@/components/elements/LanguageChanger";
import Search from "@/components/elements/Search";
import Navigation from "@/components/Layout/Header/Navigation";

export default function NavigationBar() {
	return (
		<div className={"navigation-bar relative flex items-center justify-between"}>
			<Navigation />
			<div className={"navigation__globals flex items-center"}>
				<Search />
				<Auth />
				<LanguageChanger />
			</div>
		</div>
	);
}

NavigationBar.displayName = "NavigationBar";

import React from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

import Navigation from "./Navigation";
import Authorization from "../../Section/Authorization";
import LanguageChanger from "../../../elements/LanguageChanger";
import Search from "../../../elements/Search";

export default function Header() {

	return (
		<header className={"header"}>
			<Navigation />
			<Authorization />
			<LanguageChanger />
			<Search/>
		</header>
	);
}

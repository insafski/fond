import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

import Navigation from "./Navigation"
import Authorization from "../../Section/Authorization";
import LanguageChanger from "../../../elements/LanguageChanger";
import Search from "./Search";

export default function Header() {

	const router = useRouter();
	const { t } = useTranslation("common");

	return (
		<header className={"header"}>
			<Navigation />
			<Link href="/" locale={router.locale === "en" ? "de" : "en"}>
				<button>{t("change-locale")}</button>
			</Link>
			<Authorization />
			<LanguageChanger />
			<Search/>
		</header>
	);
}

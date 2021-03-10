import Link from "next/link";
import { useRouter } from "next/router";

import { useTranslation } from "next-i18next";

export default function Header() {

	const router = useRouter();
	const { t } = useTranslation("common");

	return (
		<header className={"header"}>
			<div>
				<Link href="/" locale={router.locale === "en" ? "de" : "en"}>
					<button>{t("change-locale")}</button>
				</Link>
			</div>
		</header>
	);
}

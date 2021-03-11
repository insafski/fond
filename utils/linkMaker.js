import Link from "next/link";
import { useRouter } from "next/router";

export default function LinkMaker(children, href) {
	const router = useRouter();

	return (
		<Link
			href="/"
			//TODO: add i18n locales
			locale={router.locale === "en" ? "de" : "en"}
		>
			{/* {children} */}
		</Link>
	);
}

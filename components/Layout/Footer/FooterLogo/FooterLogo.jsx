import React from "react";
import Link from "@/components/elements/Link";

import Logo from "@/assets/locales/uk.svg";

export default function FooterLogo() {
	return (
		<div className={"footer__item flex flex-wrap flex-row items-start md:w-6/12 justify-center"}>
			<Link>
				<img src={Logo} alt="" width={100} height={100} />
			</Link>
		</div>
	);
}

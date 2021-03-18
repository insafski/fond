import React from "react";

import Link from "@/components/elements/Link";
import Logo_PC from "@/assets/icons/Logo.svg";
import Logo_mobile from "@/assets/icons/Logo_mobile.png";

export default function Logo() {
	return (
		<Link href={"/news"}>
			<div className={"flex flex-row items-center"}>
				<img className="hidden lg:block h-10 w-auto" src={Logo_PC} alt="Workflow" />
				<img className="block lg:hidden h-10 w-auto" src={Logo_mobile} alt="Workflow"/>
			</div>
		</Link>
	);
}

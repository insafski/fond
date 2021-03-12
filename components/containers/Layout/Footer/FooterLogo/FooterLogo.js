import Image from "next/image";
import LinkMaker from "../../../../../utils/linkMaker";

import Logo from "../../../../media/test-logo.png";

export default function FooterLogo() {
	return (
		<div className={"footer__item flex flex-wrap flex-row items-start md:w-6/12 justify-center"}>
			<LinkMaker>
				<Image src={Logo} alt="" width={100} height={100} />
			</LinkMaker>
		</div>
	);
}

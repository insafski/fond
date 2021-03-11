import Image from "next/image";

import logo from "../../../../media/test-logo.png";
import LinkMaker from "../../../../../utils/linkMaker";

export default function Logo({img, title}) {
	return (
		<LinkMaker href={"news"}>
			<div>
				<Image src={logo} width={100} height={100} />
				{title}
			</div>
		</LinkMaker>
	);
}

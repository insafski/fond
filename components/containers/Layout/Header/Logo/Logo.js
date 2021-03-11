import Link from "next/link";
import Image from "next/image";

import logo from "../../../../media/test-logo.png";


export default function Logo({img, title}) {
	return (
		<Link href={"/news"}>
			<div>
				<Image src={logo} width={100} height={100} />
				{title}
			</div>
		</Link>
	);
}

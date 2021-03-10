import { useRef } from "react";
import { useScroll } from "ahooks";

import Header from "./Header";
import Footer from "./Footer";
import BackTop from "../../elements/BackTop";

export default function Layout({ children }) {

	const ref = useRef(null);
	const scroller = useScroll(ref);

	console.log(JSON.stringify(scroller))

	return (
		<div className={"layout"} ref={ref}>
			<Header />
			{children}
			<BackTop scroller={scroller}/>
			<Footer />
		</div>
	);
}

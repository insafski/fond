import { animateScroll as scroll } from "react-scroll";
import { useEffect } from "react";
import { useToggle } from "ahooks";

import styles from  "./BackTop.module.scss";

export default function BackTop() {

	const [state, { toggle }] = useToggle(false);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	});

	const handleScroll = () => {
		window.scrollY > 1000 ? toggle(true) : toggle(false);
	};

	return (
		<button className={styles.backTop} onClick={() => scroll.scrollToTop()} style={!state ? {display: "none"}: {}}>
			<i className={"hm-forward"}></i>
		</button>
	);
}

import { animateScroll as scroll } from "react-scroll";
import { useEffect } from "react";
import { useToggle } from "ahooks";
import cx from "classnames";

import styles from "./BackTop.module.scss";

export default function BackTop() {
	const [state, { toggle }] = useToggle(false);

	function handleScroll() {
		toggle(window.scrollY > 1000);
	}

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		//TODO: Need to use useScroll
		return () => window.removeEventListener("scroll", handleScroll);
	});

	return (
		<button className={cx(styles.backtop, { [styles.hide]: !state })} onClick={() => scroll.scrollToTop()}>
			<i className={"hm-forward"}></i>
		</button>
	);
}
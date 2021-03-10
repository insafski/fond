import {animateScroll as scroll} from "react-scroll";

import styles from  "./BackTop.module.scss";

export default function BackTop({ scroller }) {

	console.log(JSON.stringify(scroller));

	return (
		<button className={styles.backTop} onClick={() => scroll.scrollToTop()}>
			<i className={"hm-forward"}></i>
		</button>
	);
}

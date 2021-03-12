import { BrowserView } from "react-device-detect";

import Navigation from "../Navigation";
import Contacts from "../Contacts";
import FooterLogo from "../FooterLogo";

import styles from "./BrowserFooter.module.scss";

export default function BrowserFooter() {
	return (
		<BrowserView>
			<footer className={styles.footer}>
				<div className={"container flex flex-col md:flex-row"}>
					<div className={"footer__item flex flex-wrap flex-row items-start md:w-6/12 justify-center"}>
						<FooterLogo/>
					</div>
					<nav className="footer__item flex flex-wrap flex-col md:flex-row me:items-start md:w-6/12 py-6 md:py-10">
						<div className="mt-8 md:mt-0 md:w-3/6">
							<p className="uppercase tracking-wide font-semibold">Навигация</p>
							<Navigation/>
						</div>
						<div className="mt-8 md:mt-0 md:w-3/6">
							<p className="uppercase tracking-wide font-semibold">Контакты</p>
							<Contacts/>
						</div>
					</nav>
				</div>
				<div className="text-sm bg-gray-200 py-4 text-gray-700">
					<div className="container">
						© 2012-2021 Fatikh center «Dimych Казань™». Политика конфиденциальности
					</div>
				</div>
			</footer>
		</BrowserView>
	);
}

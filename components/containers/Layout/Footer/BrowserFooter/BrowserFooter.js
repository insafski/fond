import Image from "next/image";
import { BrowserView } from "react-device-detect";

import styles from "./BrowserFooter.module.scss";

import Logo from "../../../../media/test-logo.png";

export default function BrowserFooter({ services, contacts, navigation }) {
	return (
		<BrowserView>
			<footer className={styles.footer}>
				<div className={"container mx-auto flex flex-col md:flex-row"}>
					<div className={"footer__item flex flex-wrap flex-row items-start md:w-6/12 justify-center"}>
						<a href="/">
							<Image src={Logo} alt="" width={100} height={100} />
						</a>
					</div>
					<nav className="footer__item flex flex-wrap flex-col md:flex-row me:items-start md:w-6/12 py-6 md:py-10">
						<div className="mt-8 md:mt-0 md:w-2/6">
							<p className="uppercase tracking-wide font-semibold">Услуги</p>
							{services}
						</div>
						<div className="mt-8 md:mt-0 md:w-2/6">
							<p className="uppercase tracking-wide font-semibold">Навигация</p>
							{navigation}
						</div>
						<div className="mt-8 md:mt-0 md:w-2/6">
							<p className="uppercase tracking-wide font-semibold">Контакты</p>
							{contacts}
						</div>
					</nav>
				</div>
				<div className="text-sm bg-gray-200 py-6 text-gray-700">
					<div className="container mx-auto">
						© 2012-2021 Детейлинг центр «Детейлинг Казань™». Политика конфиденциальности
					</div>
				</div>
			</footer>
		</BrowserView>
	);
}

import React from "react";

import Logo from "@/components/elements/Logo";
import Navigation from "./Navigation";
import SocialNetworks from "../../elements/SocialNetworks";

export default function Footer() {
	return (
		<footer className={"footer px-4 md:px-0 py-8 md:py-12 bg-indigo-900"}>
			<div className="container">
				<div className="footer__body flex flex-col md:flex-row">
					<div className="footer__item md:w-3/12">
						<Logo type={"footer"}/>
					</div>
					<div className="footer__item md:w-6/12">
						<Navigation />
					</div>
					<div className="footer__item md:w-3/12">
						<SocialNetworks className={"text-yellow-600 text-4xl"} />
					</div>
				</div>
				<div className={"footer__bottom text-center text-gray-50"}>
					<span>
						© "Фонд поддержки христианскрй культуры и наследия", 2021
					</span>
				</div>
			</div>
		</footer>
	);
}

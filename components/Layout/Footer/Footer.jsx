/* eslint-disable react/no-unescaped-entities */
import React from "react";

import Logo from "@/components/elements/Logo";
import SocialNetworks from "@/components/elements/SocialNetworks";
import Navigation from "./Navigation";

export default function Footer() {
	return (
		<footer className={"footer px-2 md:px-0 py-3 md:py-12 bg-indigo-900"}>
			<div className="container">
				<div className="footer__body flex flex-col md:flex-row">
					<div className="footer__item md:w-6/12">
						<Navigation />
					</div>
					<div className="footer__item md:w-3/12">
						<SocialNetworks className={"text-yellow-600 text-4xl"} />
					</div>
				</div>
				<div className="footer__item md:w-3/12">
					<Logo type={"footer"} className={"text-yellow-600"} />
				</div>
				<div className={"footer__bottom text-center mt-5 pt-5 sm:mt-0 sm:pt-0 text-gray-50"}>
					<span>
						© "Фонд поддержки христианскрй культуры и наследия", 2021
					</span>
				</div>
			</div>
		</footer>
	);
}

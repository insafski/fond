/* eslint-disable react/no-unescaped-entities */
import React from "react";

import Logo from "@/components/elements/Logo";
import Social from "@/components/elements/Social";
import Navigation from "./Navigation";

export default function Footer() {
	return (
		<footer className={"footer px-2 md:px-0 py-3 md:py-12"} style={{ backgroundColor: "rgba(32, 39, 74, 1)" }}>
			<div className="container">
				<div className="footer__body flex flex-col md:flex-row">
					<div className={"footer__item md:w-6/12 mb-3.5"}>
						<Navigation />
					</div>
					<div className="footer__item md:w-3/12 mb-2">
						<Social className={"text-yellow-600 text-4xl"} />
					</div>
				</div>
				<div className="footer__item md:w-3/12 mb-3">
					<Logo type={"footer"} className={"text-yellow-600"} />
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

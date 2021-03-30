/* eslint-disable react/no-unescaped-entities */
import React from "react";

import { LogoFilled } from "@/components/elements/Logo";
import Social from "@/components/elements/Social";

import Navigation from "./Navigation";
import Subscribe from "./Subscribe";

export default function Footer() {
	return (
		<footer className={"footer bg-dark-blue px-2 py-3"}>
			<div className={"container"}>
				<div className={"footer__body md:px-11.5 lg:px-0 lg:flex"}>
					<div className={"flex flex-col lg:flex-1 lg:order-2"}>
						<div className={"mb-3.5"}>
							<Subscribe />
						</div>
						<div className={"mb-3.5"}>
							<Navigation />
						</div>
					</div>
					<div className={"footer__item mb-2 lg:flex-1 lg:order-3"}>
						<Social className={"text-gold text-4xl"} />
					</div>
					<div className={"footer__item mb-3 flex justify-center lg:flex-1 lg:order-1"}>
						<LogoFilled className={"h-5.5 md:h-6.5"} />
					</div>
				</div>
				<div className={"footer__bottom text-center"}>
					<span
						style={{
							color: "rgba(255, 255, 255, 0.5)",
							fontSize: "12px",
							fontWeight: 500,
							lineHeight: "15px",
						}}
					>
						© «Фонд поддержки христианскрй культуры и наследия», 2021
					</span>
				</div>
			</div>
		</footer>
	);
}

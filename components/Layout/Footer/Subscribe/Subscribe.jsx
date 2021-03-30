import React from "react";

export default function Subscribe() {
	return (
		<div className={"subscribe"}>
			<div className={"mb-2 text-white text-center"}>
				Подпишитесь на нашу новостную рассылку
			</div>
			<div className="relative text-gray-600">
				<input
					type="email"
					name="serch"
					placeholder="Адрес E-mail"
					className="w-full bg-white border border-white px-1 py-1 pr-10.5 text-sm focus:outline-none"
				/>
				<button
					type="submit"
					className="absolute text-white right-0 top-0 h-full px-1"
					style={{ backgroundColor: "rgba(212, 153, 103, 1)" }}
				>
					Подписаться
				</button>
			</div>
		</div>
	);
}

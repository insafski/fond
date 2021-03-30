import React from "react";

export default function Search() {
	return (
		<div className="Navigation__item w-full">
			<span className={"block mb-2 text-white"}>
				Подпишитесь на нашу новостную рассылку
			</span>
			<div className="relative text-gray-600">
				<input type="search" name="serch" placeholder="Search" className="w-full bg-white border border-white h-10 px-5 pr-10 text-sm focus:outline-none rounded-md"/>
				<button type="submit" className="absolute text-white right-0 top-0 h-full px-4 bg-red-500 hover:bg-red-700 rounded-r-md">
						Подпишитесь
				</button>
			</div>
		</div>
	);
}

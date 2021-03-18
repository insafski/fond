import React from "react";

import { useSearchContext } from "./context";
import searchIcon from "@/assets/icons/search.svg";

export default function Search() {
	const { openSearchModal } = useSearchContext();

	return (
		<div className={"ml-3 relative"} onClick={event => openSearchModal(event)}>
			<img className="h-8 w-8" src={searchIcon} alt=""/>
		</div>
	);
}

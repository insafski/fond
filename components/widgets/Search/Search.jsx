import React from "react";

import { useSearchContext } from "./context";

export default function Search() {
	const { openSearchModal } = useSearchContext();

	return (
		<div className={"ml-3 relative"} onClick={event => openSearchModal(event)}>
			<i className="h-8 w-8 fscch-search"/>
		</div>
	);
}

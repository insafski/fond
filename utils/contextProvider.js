import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export default function ContextProvider({ children }) {
	const [heightLength, setHeightLength] = useState(0)

	let sharedState = {
		heightLength, setHeightLength
	};

	return <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>;
}

export function useAppContext() {
	return useContext(AppContext);
}

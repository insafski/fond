import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export default function ContextProvider({ children }) {
	const [state, setState] = useState("");

	let sharedState = {
		state,
		setState,
	};

	return <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>;
}

export function useAppContext() {
	return useContext(AppContext);
}

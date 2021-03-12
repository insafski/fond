import { createContext, useContext, useReducer } from "react";

const AppContext = createContext();

export default function ContextProvider({ children }) {

	const initialState = {
		loginForm: false,
		registerForm: false
	}

	function reducer(state, action) {
		switch (action.type) {
			case "login":
				return { ...state, loginForm: !state.loginForm };
			case "register":
				return { ...state, registerForm: !state.registerForm };
			default:
				return initialState;
		}
	}

	const [state, dispatch] = useReducer(reducer, initialState);

	let sharedState = {
		state,
		dispatch,
	};

	return <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>;
}

export function useAppContext() {
	return useContext(AppContext);
}

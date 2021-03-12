import { createContext } from "react";

export const AuthContext = createContext({
	isOpen: false,
	toggle: () => Function,
	handelClose: () => Function,
	handleOpen: () => Function,
});

AuthContext.displayName = "AuthContext";

export const AuthContextProvider = AuthContext.Provider;
export const AuthConsumer = AuthContext.Consumer;
export default AuthContext;

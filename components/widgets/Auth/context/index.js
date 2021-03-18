import { createContext, useContext } from "react";

export const AuthContext = createContext({
	authFormState: {
		loginForm: false,
		registerForm: false,
	},
	toggleLoginForm: () => Function,
	toggleRegisterForm: () => Function,
});

AuthContext.displayName = "AuthContext";

export const AuthContextProvider = AuthContext.Provider;
export const useAuthContext = () => {
	return useContext(AuthContext);
};
export default AuthContext;

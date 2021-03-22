import { createContext, useContext } from "react";

export const NewsContext = createContext();

NewsContext.displayName = "NewsContext";

export const NewsContextProvider = NewsContext.Provider;
export const useNewsContext = () => {
	return useContext(NewsContext);
};
export default NewsContext;

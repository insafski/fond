import { createContext, useContext } from "react";

export const NewsContext = createContext({
	mainState: {
		isLoading: false,
		isError: false,
		errorMessage: "",
		news: [],
		location: "en",
	},
	loadMore: () => Function,
	loadLocation: () => Function,
	handleSetLocation: () => Function,
});

NewsContext.displayName = "NewsContext";

export const NewsContextProvider = NewsContext.Provider;
export const useNewsContext = () => {
	return useContext(NewsContext);
};
export default NewsContext;

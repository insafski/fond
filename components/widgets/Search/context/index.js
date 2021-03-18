import { createContext, useContext } from "react";

export const SearchContext = createContext({
	searchModalState: {
		isVisible: false,
		searchValue: "",
		createModal: false,
		mousePosition: {
			x: null,
			y: null,
		},
	},
	openSearchModal: () => Function,
	closeSearchModal: () => Function,
	changeSearchForm: () => Function,
});

SearchContext.displayName = "SearchContext";

export const SearchContextProvider = SearchContext.Provider;
export const useSearchContext = () => {
	return useContext(SearchContext);
};
export default SearchContext;

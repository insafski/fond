import React, { createContext, useState } from "react";
export const ApiContext = createContext();

const ApiContextProvider = (props) => {

	return <ApiContext.Provider value={{}}>{props.children}</ApiContext.Provider>;
};
export default ApiContextProvider;

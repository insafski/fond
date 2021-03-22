import React from "react";

import Page from "@/components/containers/Page";

const App = () => {
	return (
		<Page sections={[{ component: "news" }]} mainPage/>
	);
};

export default App;

import React from "react";
import Layout from "../components/layout";
import TestTypography from "../components/testTypography";

const App = () => {
	return (
		<Layout>
			<div className={"TEST PAGE"}>
				<TestTypography>
					HELLO BITCHES
				</TestTypography>
			</div>
			<div className={"testStyle"}>Hello bitches 2</div>
		</Layout>
	);
};

export default App;

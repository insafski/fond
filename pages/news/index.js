import Layout from "../components/layout";
import TestTypography from "../components/testTypography";

const App = () => {
	return (
		<Layout>
			<div className={"TEST PAGE"}>
				<TestTypography children={"HELLO BITCHES"} />
			</div>
			<div className={"testStyle"}>News</div>
		</Layout>
	);
};

export default App;

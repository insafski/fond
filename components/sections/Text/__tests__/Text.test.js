import React from "react";
import renderer from "react-test-renderer";

import Text from "..";

describe("Text", () => {
	it("renders correctly", () => {
		const tree = renderer
			.create(<Text />)
			.toJSON();

		expect(tree).toMatchSnapshot();
	});
});

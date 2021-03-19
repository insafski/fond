import NewsItem from "@/components/elements/ListElement/NewsItem/NewsItem";
import React from "react";

const App = () => {
	const heading = {
		title: "test",
		description: "Задача организации, в особенности же реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании дальнейших направлений развития. Не следует, однако забывать, что начало",
	};

	const pictures = [
		{ src: "https://static.remove.bg/remove-bg-web/63d05fa057f88514c07ec5292f382c383f4e2899/assets/start_remove-79a4598a05a77ca999df1dcb434160994b6fde2c3e9101984fb1be0f16d0a74e.png" },
	];

	return (
		<div className={"flex p-12 content-between justify-between w-full h-full flex-wrap"}>
			<NewsItem
				heading={heading}
				categories={"test"}
				country={"test"}
				date={"01-09-2020"}
				picture={pictures}
			/>
			<NewsItem
				heading={heading}
				categories={"test"}
				country={"test"}
				date={"01-09-2020"}
				picture={pictures}
			/>
			<NewsItem
				heading={heading}
				categories={"test"}
				country={"test"}
				date={"01-09-2020"}
				picture={pictures}
			/>
			<NewsItem
				heading={heading}
				categories={"test"}
				country={"test"}
				date={"01-09-2020"}
				picture={pictures}
			/>

			<NewsItem
				heading={heading}
				categories={"test"}
				country={"test"}
				date={"01-09-2020"}
				picture={pictures}
			/>
			<NewsItem
				heading={heading}
				categories={"test"}
				country={"test"}
				date={"01-09-2020"}
				picture={pictures}
			/>

		</div>
	);
};

export default App;

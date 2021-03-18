import React from "react";

export default function SocialNetworks() {
	const iconsSocNet = [
		{
			name: "facebook",
			className: "fscch-facebook",
		},
		{
			name: "twitter",
			className: "fscch-twitter",
		},
		{
			name: "instagram",
			className: "fscch-instagram",
		},
		{
			name: "vk",
			className: "fscch-vk",
		},
		{
			name: "youtube",
			className: "fscch-youtube",
		},

	];

	return (
		<div>
			{
				iconsSocNet.map(item =>
					<a className={item.className} key={item.name}>

					</a>,
				)
			}
		</div>
	);
}

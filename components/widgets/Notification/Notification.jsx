import React from "react";
import PropTypes from "prop-types";
import RCNotification from "rc-notification";

let notification = null;
RCNotification.newInstance(
	{
		maxCount: 5,
	},
	n => {
		notification = n;
	},
);

export default function Notification({ message }) {
	notification.notice({
		content: { message },
		closable: true,
		closeIcon: <i className={"fscch-cancel"}/>,
		duration: 0,
	});
}

Notification.propTypes = {
	message: PropTypes.string,
};

Notification.defaultProps = {
	message: "",
};

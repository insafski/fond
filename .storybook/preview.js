import { withNextRouter } from 'storybook-addon-next-router';
import { addDecorator } from '@storybook/react';

import "../styles/index.css";
import "@/styles/fonts/fontello/css/hm-icons.css";

addDecorator(
  withNextRouter({
    path: '/', // defaults to `/`
    asPath: '/', // defaults to `/`
    query: {}, // defaults to `{}`
    push() {}, // defaults to using addon actions integration, can override any method in the router
    locale: "en",
		locales: ["en", "ru", "el", "sr", "fr", "ge", "al", "ae", "he", "tr", "cn", "ja"],
  })
);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
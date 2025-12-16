import siteConfig from "./src/utils/config";

const config = siteConfig({
	title: "Editions du fou du bus",
	prologue: "",
	author: {
		name: "Olivier Garcia",
		email: "foudubus@lol.cat",
		link: "https://lol.cat"
	},
	description: "Les Editions du Fou du Bus",
	copyright: {
		type: "CC BY-NC-ND 4.0",
		year: "2025"
	},
	i18n: {
		locales: ["fr"],
		defaultLocale: "fr"
	},
	feed: {
		section: "*",
		limit: 20
	},
	latest: "*"
});

export const monolocale = Number(config.i18n.locales.length) === 1;

export default config;

export type MenuItem = {
	key: number;
	href: string;
	title: string;
};

const makeMenuItem = (key: number, href: string, title: string): MenuItem => {
	return {
		key,
		title,
		href,
	};
};

export const menuItems: Array<MenuItem> = [
	makeMenuItem(0, "/", "Home"),
	makeMenuItem(1, "/about", "About"),
	makeMenuItem(3, "/contact", "Contact"),
];


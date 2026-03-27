export const SITE = {
	title: '芋头通讯 | TARO Communication',
	description:
		"你好，我是 Sean 'Taro' Wang，也就是芋头王，这里是我对世界和自己发出的通讯文稿合集。",
	url: 'https://tarowang.com',
	email: 'wangxinyi0823@gmail.com',
	author: "Sean 'Taro' Wang",
};

export const NAV_ITEMS = [
	{ href: '/', label: 'Home' },
	{ href: '/product', label: 'TARO product' },
	{ href: '/landscape', label: 'TARO landscape' },
	{ href: '/memory', label: 'TARO memory' },
	{ href: '/about', label: 'about TARO' },
];

export const CATEGORY_META = {
	product: {
		label: 'TARO product',
		description: '关于产品工作、团队协作与组织观察的文章。',
	},
	landscape: {
		label: 'TARO landscape',
		description: '关于生活感受、散文与随笔的写作园地。',
	},
	memory: {
		label: 'TARO memory',
		description: '留给荷兰岁月与欧洲生活回忆的一本慢速相册。',
	},
} as const;

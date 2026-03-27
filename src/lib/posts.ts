export type PostCategory = 'product' | 'landscape' | 'memory';

export interface PostData {
	title: string;
	description: string;
	pubDate: string | Date;
	tags?: string[];
	category: PostCategory;
	featured?: boolean;
	draft?: boolean;
}

export interface Post {
	slug: string;
	data: {
		title: string;
		description: string;
		pubDate: Date;
		tags: string[];
		category: PostCategory;
		featured: boolean;
		draft: boolean;
	};
	Content: unknown;
}

interface PostModule {
	frontmatter: PostData;
	default: unknown;
}

const postModules = import.meta.glob<PostModule>('../content/posts/*.mdx', { eager: true });

function toPost(path: string, module: PostModule): Post {
	const slug = path.split('/').pop()?.replace(/\.mdx$/, '');

	if (!slug) {
		throw new Error(`Unable to infer slug from path: ${path}`);
	}

	return {
		slug,
		data: {
			title: module.frontmatter.title,
			description: module.frontmatter.description,
			pubDate: new Date(module.frontmatter.pubDate),
			tags: module.frontmatter.tags ?? [],
			category: module.frontmatter.category,
			featured: module.frontmatter.featured ?? false,
			draft: module.frontmatter.draft ?? false,
		},
		Content: module.default,
	};
}

export function getAllPosts() {
	return Object.entries(postModules)
		.map(([path, module]) => toPost(path, module))
		.filter((post) => !post.data.draft)
		.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
}

export function getFeaturedPosts(limit = 3) {
	return getAllPosts()
		.filter((post) => post.data.featured)
		.slice(0, limit);
}

export function getPostsByCategory(category: PostCategory) {
	return getAllPosts().filter((post) => post.data.category === category);
}

export function getPostBySlug(slug: string) {
	return getAllPosts().find((post) => post.slug === slug);
}

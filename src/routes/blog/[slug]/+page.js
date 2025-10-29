// src/routes/blog/[slug]/+page.js
// NO IMPORTS NEEDED — post is already in +page.svelte

export function load({ data }) {
	// `data` comes from +page.svelte (SvelteKit passes it automatically)
	const { post } = data;

	if (!post?.title) {
		return { title: "Blog Post" };
	}

	return {
		title: post.title  // ← THIS IS YOUR BLOG TITLE
	};
}

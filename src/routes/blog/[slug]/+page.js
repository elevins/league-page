// src/routes/blog/[slug]/+page.js
export function load({ data }) {
	const { postsData, postID } = data;

	// Find the current post by postID
	const currentPost = postsData.find(p => p.sys.id === postID);

	// Return the real title
	return {
		title: currentPost?.fields?.title || "Blog Post"
	};
}

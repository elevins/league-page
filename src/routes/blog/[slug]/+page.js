// src/routes/blog/[slug]/+page.js
import { contentfulClient } from '$lib/contentful';

export async function load({ params }) {
	const { slug } = params;

	// Fetch blog post from Contentful
	const blogPost = await contentfulClient.getEntries({
		content_type: 'blogPost',
		'fields.slug': slug
	});

	if (!blogPost.items.length) {
		throw new Error('Blog post not found');
	}

	const post = blogPost.items[0].fields;

	// 🎯 PASS TITLE TO LAYOUT FOR iMessage
	return {
		title: post.title,  // ← THIS IS YOUR MAGIC
		post: post
	};
}

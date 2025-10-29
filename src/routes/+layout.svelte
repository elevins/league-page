<script>
	import { Nav, Footer } from "$lib/components";
	import { dev } from '$app/environment';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';
	import { page } from '$app/stores';

	injectAnalytics({ mode: dev ? 'development' : 'production' });

	const leagueName = "Chyones Fantasy League";
	const description = "Custom Sleeper league with standings, trades, power rankings, and more!";
	const imageUrl = "https://chyones.com/badge.png";

	// GET REAL BLOG TITLE FROM DATA
	$: isBlogPage = $page.url.pathname.startsWith('/blog/');
	$: blogTitle = isBlogPage && $page.data?.postsData && $page.data?.postID
		? $page.data.postsData.find(p => p.fields.slug === $page.data.postID)?.fields?.title || "Blog Post"
		: null;

	$: pageTitle = blogTitle || "League Page";
	$: fullTitle = `${pageTitle} | ${leagueName}`;
</script>

<svelte:head>
	<title>{fullTitle}</title>
	<meta property="og:title" content={fullTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={imageUrl} />
	<meta property="og:url" content={$page.url.href} />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={fullTitle} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={imageUrl} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
</svelte:head>

<main>
	<Nav />
	<slot />
	<Footer />
</main>

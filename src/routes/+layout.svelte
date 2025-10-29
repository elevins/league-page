<script>
	import { Nav, Footer } from "$lib/components";
	import { dev } from '$app/environment';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';
	import { page } from '$app/stores';

	injectAnalytics({ mode: dev ? 'development' : 'production' });

	const leagueName = "Chyones Fantasy League";
	const description = "Custom Sleeper league with standings, trades, power rankings, and more!";
	const imageUrl = "https://chyones.com/badge.png";

	// SAFEST POSSIBLE TITLE LOGIC
	$: data = $page.data;
	$: isBlog = data?.postID && Array.isArray(data?.postsData);
	$: blogTitle = isBlog 
		? data.postsData.find(p => p?.fields?.slug === data.postID)?.fields?.title 
		: null;

	$: pageTitle = blogTitle || "League Page";
	$: fullTitle = `${pageTitle} | ${leagueName}`;

	// ADD THIS LINE ONLY
	$: if ($page.url.pathname.startsWith('/blog/') && typeof document !== 'undefined') {
		const title = document.querySelector('h1')?.textContent || 'Blog Post';
		document.title = `${title} | Chyones Fantasy League`;
	}

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

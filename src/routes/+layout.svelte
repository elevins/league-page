<script>
	import { Nav, Footer } from "$lib/components";
	import { dev } from '$app/environment';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';
	import { page } from '$app/stores';

	injectAnalytics({ mode: dev ? 'development' : 'production' });

	const leagueName = "Chyones Fantasy League";
	const description = "Custom Sleeper league with standings, trades, power rankings, and more!";
	const imageUrl = "https://chyones.com/badge.png";

	// PERFECT TITLES FROM URL PATH
	$: path = $page.url.pathname;
	$: pageTitle = 
		path === '/' ? 'Home' :
		path === '/constitution' ? 'League Constitution' :
		path.startsWith('/blog/') ? '**Blog**' :
		path.includes('/managers') ? 'Managers' :
		path.includes('/trades') ? 'Trades' :
		'League Page';
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

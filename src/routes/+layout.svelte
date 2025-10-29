<!-- src/routes/+layout.svelte -->
<script>
	import { Nav, Footer } from "$lib/components";
	import { dev } from '$app/environment';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';
	import { page } from '$app/stores';

	// DIRECTLY IMPORT FROM leagueInfo.js (EXISTS!)
	import { your_league_name, homepageText } from '$lib/utils/leagueInfo.js';

	injectAnalytics({ mode: dev ? 'development' : 'production' });
</script>

<svelte:head>
	<title>{your_league_name} - League Page</title>

	<!-- iMessage BEAUTIFUL PREVIEW -->
	<meta property="og:title" content="{your_league_name}" />
	<meta property="og:description" content="{homepageText?.replace(/\n/g, ' ').trim().slice(0, 200)}..." />
	<meta property="og:image" content="https://chyones.com/static/League@20Page.png" />
	<meta property="og:url" content="{$page.url.href}" />
	<meta property="og:type" content="website" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content="https://chyones.com/static/League@20Page.png" />

	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
</svelte:head>

<main>
	<Nav />
	<slot />
	<Footer />
</main>

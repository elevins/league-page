<!-- __layout.svelte -->
<script>
	import { Nav, Footer } from "$lib/components"
    import { dev } from '$app/environment';
    import { injectAnalytics } from '@vercel/analytics/sveltekit';
 	import { page } from '$app/stores';  
    import { leagueInfo } from '$lib/utils/leagueInfo.js';  

    injectAnalytics({ mode: dev ? 'development' : 'production' });
</script>

<svelte:head>
	<title>{your_league_name} - League Page</title>

	<!-- iMessage / Social Preview -->
	<meta property="og:title" content={your_league_name} />
	<meta property="og:description" content={homepageText?.replace(/\n/g, ' ').slice(0, 200) + '...' || "Sleeper fantasy football league with standings, trades, and more!"} />
	<meta property="og:image" content="https://chyones.com/static/League@20Page.png" />
	<meta property="og:url" content={$page.url.href} />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={your_league_name} />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={your_league_name} />
	<meta name="twitter:description" content={homepageText?.replace(/\n/g, ' ').slice(0, 200) + '...' || "Sleeper fantasy football league with standings, trades, and more!"} />
	<meta name="twitter:image" content="https://chyones.com/static/League@20Page.png" />

	<!-- Image dimensions -->
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
</svelte:head>

<main>
	<Nav />
	<slot />
	<Footer />
</main>

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
	<title>{leagueInfo.name} - League Page</title>

	<!-- iMessage / Social Rich Preview -->
	<meta property="og:title" content={leagueInfo.name} />
	<meta property="og:description" content={leagueInfo.homepageText || "Custom Sleeper fantasy football league page with standings, trades, power rankings, and more!"} />
	<meta property="og:image" content="https://chyones.com/static/League@20Page.png" />
	<meta property="og:url" content={$page.url.href} />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={leagueInfo.name} />

	<!-- Twitter Card (iMessage uses this too) -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={leagueInfo.name} />
	<meta name="twitter:description" content={leagueInfo.homepageText || "Custom Sleeper fantasy football league page with standings, trades, power rankings, and more!"} />
	<meta name="twitter:image" content="https://chyones.com/static/League@20Page.png" />

	<!-- Force correct image size (optional but helps) -->
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
</svelte:head>

<main>
	<Nav />
	<slot />
	<Footer />
</main>

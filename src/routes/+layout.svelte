<!-- __layout.svelte -->
<script>
	import { Nav, Footer } from "$lib/components"
    import { dev } from '$app/environment';
    import { injectAnalytics } from '@vercel/analytics/sveltekit';
 
    injectAnalytics({ mode: dev ? 'development' : 'production' });
</script>

<svelte:head>
	<title>Chyones League Page</title>

	<!-- iMessage Rich Preview -->
	<meta property="og:title" content="NYC + SF Fantasy Football" />
	<meta property="og:description" content="Custom Sleeper fantasy football league with standings, trades, power rankings, and more!" />
	<meta property="og:image" content="https://chyones.com/badge.png" />
	<meta property="og:url" content={$page.url.href} />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Chyones />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Chyones League Page" />
	<meta name="twitter:description" content="Custom Sleeper fantasy football league with standings, trades, power rankings, and more!" />
	<meta name="twitter:image" content="https://chyones.com/badge.png" />

	<!-- Image size -->
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
</svelte:head>

<main>
    <Nav /> <!-- adds the nav (small and large) -->
  
    <slot />

    <Footer /> <!-- adds the footer -->
</main>

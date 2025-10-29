<!-- __layout.svelte -->
<script>
	import { Nav, Footer } from "$lib/components"
    import { dev } from '$app/environment';
    import { injectAnalytics } from '@vercel/analytics/sveltekit';
	import { leagueName, leagueDescription, leagueImage, leagueURL } from '$lib/utils/helper';
 
    injectAnalytics({ mode: dev ? 'development' : 'production' });
</script>

<svelte:head>
    <title>{leagueName}</title>
    <meta name="description" content={leagueDescription} />
    <meta property="og:title" content={leagueName} />
    <meta property="og:description" content={leagueDescription} />
    <meta property="og:image" content={leagueImage} />
    <meta property="og:url" content={leagueURL} />
    <meta property="og:type" content="website" />
</svelte:head>

<main>
    <Nav /> <!-- adds the nav (small and large) -->
  
    <slot />

    <Footer /> <!-- adds the footer -->
</main>

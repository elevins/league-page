<!-- __layout.svelte -->
<script>
	import { Nav, Footer } from "$lib/components"
    import { dev } from '$app/environment';
    import { injectAnalytics } from '@vercel/analytics/sveltekit';
 	import { page } from '$app/stores';  // ← NEW: For dynamic URL
    import { leagueInfo } from '$lib/utils/leagueInfo.js';  // ← NEW: Your league data

    injectAnalytics({ mode: dev ? 'development' : 'production' });
</script>

<!-- iMessage Preview for EVERY PAGE -->
<svelte:head>
    <title>{leagueInfo.name} - Fantasy Football League</title>
    
    <!-- iMessage / Facebook / Twitter RICH PREVIEW -->
    <meta property="og:title" content={leagueInfo.name} />
    <meta property="og:description" content={leagueInfo.homepageText || "Standings, trades, power rankings & more!"} />
    <meta property="og:image" content="https://your-vercel-url.vercel.app/og-image.jpg" />  <!-- ← UPDATE URL -->
    <meta property="og:url" content={$page.url.href} />
    <meta property="og:type" content="website" />
    
    <!-- Twitter Card (iMessage loves this too) -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={leagueInfo.name} />
    <meta name="twitter:image" content="https://your-vercel-url.vercel.app/og-image.jpg" />
</svelte:head>

<main>
    <Nav /> <!-- adds the nav (small and large) -->
  
    <slot />

    <Footer /> <!-- adds the footer -->
</main>

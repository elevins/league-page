<!-- src/routes/+layout.svelte -->
<script>
	import { Nav, Footer } from "$lib/components";
	import { dev } from '$app/environment';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';
	import { page } from '$app/stores';

	injectAnalytics({ mode: dev ? 'development' : 'production' });

	// HARDCODED VALUES (SAFE)
	const leagueName = "Chyones Fantasy League";
	const description = "Custom Sleeper league with standings, trades, power rankings, and more!";
	const imageUrl = "https://chyones.com/badge.png";

	// DYNAMIC PAGE TITLE (from <svelte:head> in each page)
	let pageTitle = "League Page";
	$: fullTitle = pageTitle ? `${pageTitle} | ${leagueName}` : leagueName;
</script>

<svelte:head>
	<!-- Let child pages override <title> -->
	<title>{fullTitle}</title>

	<!-- iMessage / Social Preview -->
	<meta property="og:title" content={fullTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={imageUrl} />
	<meta property="og:url" content={$page.url.href} />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={leagueName} />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={fullTitle} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={imageUrl} />

	<!-- Image size -->
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
</svelte:head>

<!-- CAPTURE <title> from child pages -->
<svelte:head let:head>
	{#each head.title as title}
		{@const text = title.children[0]?.text}
		{#if text}
			<script>
				pageTitle = "{text}";
			</script>
		{/if}
	{/each}
</svelte:head>

<main>
	<Nav />
	<slot />
	<Footer />
</main>

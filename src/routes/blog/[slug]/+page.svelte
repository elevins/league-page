<!-- src/routes/blog/[slug]/+page.svelte -->
<script>
    import { FullPost } from "$lib/components";
    import { page } from '$app/stores';  // ← ADD THIS

    export let data;
    const { postsData, postID, leagueTeamManagersData } = data;

    // Find the current post by slug
    $: currentPost = postsData.find(p => p.fields.slug === postID);
    $: title = currentPost?.fields?.title || "Blog Post";
    $: fullTitle = `${title} | Chyones Fantasy League`;
</script>

<!-- SET TITLE + OG TAGS HERE (per-page) -->
<svelte:head>
    <title>{fullTitle}</title>
    <meta property="og:title" content={fullTitle} />
    <meta property="og:description" content="Custom Sleeper league with standings, trades, power rankings, and more!" />
    <meta property="og:image" content="https://chyones.com/badge.png" />
    <meta property="og:url" content={$page.url.href} />
    <meta property="og:type" content="article" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
</svelte:head>

<style>
    #main {
        position: relative;
        z-index: 1;
        display: block;
        margin: 30px auto;
		width: 95%;
		max-width: 1000px;
        overflow-y: hidden;
    }

    .center {
        text-align: center;
        margin-bottom: 2em;
    }

    .viewAll {
        text-decoration: none;
        background-color: #920505;
        color: #fff;
        border-radius: 1em;
        padding: 0.5em 1em;
    }
</style>

<div id="main">
    <FullPost {postsData} {postID} {leagueTeamManagersData} />
    <div class="center">
        <a class="viewAll" href="/blog">View More Blog Posts</a>
    </div>
</div>

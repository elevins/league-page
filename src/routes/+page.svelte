<!-- src/routes/blog/[slug]/+page.svelte -->
<script>
    import { FullPost } from "$lib/components";

    export let data;
    const { postsData, postID, leagueTeamManagersData } = data;

    // DEBUG: PRINTS WHEN DATA IS READY
    $: if (data && postID && postsData) {
        console.log('BLOG DATA:', {
            postID,
            postsDataLength: postsData?.length,
            firstPost: postsData?.[0],
            foundPost: postsData?.find(p => p?.fields?.slug === postID)
        });
    }
</script>

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

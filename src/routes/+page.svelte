<!-- src/routes/blog/[slug]/+page.svelte -->
<script>
    import { FullPost } from "$lib/components";
    import { onMount } from 'svelte';

    export let data;
    const { postsData, postID, leagueTeamManagersData } = data;

    // -------------------------------------------------
    // TEMPORARY DEBUG – REMOVE AFTER WE SEE THE LOG
    // -------------------------------------------------
    onMount(() => {
        console.log('BLOG DATA:', {
            postID,
            postsData,
            firstPostSlug: postsData?.[0]?.fields?.slug,
            firstPostTitle: postsData?.[0]?.fields?.title,
            firstPostSysId: postsData?.[0]?.sys?.id,
            // show a few more entries if you have many
            secondPostSlug: postsData?.[1]?.fields?.slug,
            secondPostTitle: postsData?.[1]?.fields?.title
        });
    });
    // -------------------------------------------------
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

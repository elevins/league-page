<!-- src/routes/blog/[slug]/+page.svelte -->
<script>
    import { FullPost } from "$lib/components";
    import { onMount } from 'svelte';

    export let data;

    // FORCE LOG — RUNS EVERY TIME DATA CHANGES
    $: {
        console.log('RAW DATA FROM +page.js:', data);
        if (data) {
            console.log('postID:', data.postID);
            console.log('postsData:', data.postsData);
            console.log('leagueTeamManagersData:', data.leagueTeamManagersData);
            if (Array.isArray(data.postsData)) {
                console.log('First post:', data.postsData[0]);
                console.log('Found post by slug:', data.postsData.find(p => p?.fields?.slug === data.postID));
            }
        }
    }

    // ALSO LOG ON MOUNT (backup)
    onMount(() => {
        setTimeout(() => {
            console.log('ONMOUNT DEBUG:', data);
        }, 1000);
    });
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
    <FullPost 
        postsData={data.postsData} 
        postID={data.postID} 
        leagueTeamManagersData={data.leagueTeamManagersData} 
    />
    <div class="center">
        <a class="viewAll" href="/blog">View More Blog Posts</a>
    </div>
</div>

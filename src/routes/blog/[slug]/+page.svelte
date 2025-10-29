<!-- src/routes/blog/[slug]/+page.svelte -->
<script>
    import { FullPost } from "$lib/components";
	import { leagueName } from '$lib/utils/helper';
	import { pageTitle } from '$lib/stores';

    export let data;
    const {postsData, postID, leagueTeamManagersData} = data;

	const post = postsData.posts.filter(p => p.sys.id === postID)[0];
	$pageTitle = `${post.fields.title} | ${leagueName}`;
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

import { enableBlog, getBlogPosts, getLeagueTeamManagers } from '$lib/utils/helper';

export async function load({ fetch, params }) {
    if (!enableBlog) return false;
    
    const postID = params.slug;

    // AWAIT the async function
    const postsData = await getBlogPosts(fetch);
    const leagueTeamManagersData = await getLeagueTeamManagers();

    // Find post by slug
    const currentPost = postsData.find(p => p.fields.slug === postID);
    const title = currentPost?.fields?.title || "Blog Post";

    return {
        postsData,
        postID,
        leagueTeamManagersData,
        title
    };
}

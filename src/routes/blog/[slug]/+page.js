import { enableBlog, getBlogPosts, getLeagueTeamManagers } from '$lib/utils/helper';

export function load({ fetch, params }) {
    if (!enableBlog) return false;
    
    const postID = params.slug;
    const postsData = getBlogPosts(fetch);
    const leagueTeamManagersData = getLeagueTeamManagers();

    // Find current post by postID
    const currentPost = postsData.find(p => p.sys.id === postID);
    const title = currentPost?.fields?.title || "Blog Post";

    return {
        postsData,
        postID,
        leagueTeamManagersData,
        title  // ← ADD THIS
    };
}

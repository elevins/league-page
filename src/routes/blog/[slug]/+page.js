// src/routes/blog/[slug]/+page.js
import { enableBlog, getBlogPosts, getLeagueTeamManagers } from '$lib/utils/helper';

export function load({ fetch, params }) {
    if (!enableBlog) return false;
    
    const postID = params.slug;  // ← This is the SLUG
    const postsData = getBlogPosts(fetch);
    const leagueTeamManagersData = getLeagueTeamManagers();

    // Find post by SLUG (not sys.id)
    const currentPost = postsData.find(p => p.fields.slug === postID);
    const title = currentPost?.fields?.title || "Blog Post";

    return {
        postsData,
        postID,
        leagueTeamManagersData,
        title  // ← for iMessage
    };
}

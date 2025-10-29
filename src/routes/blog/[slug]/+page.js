import { enableBlog, getBlogPosts, getLeagueTeamManagers } from '$lib/utils/helper';

export async function load({ fetch, params }) {
    if (!enableBlog) return {};

    const postID = params.slug;

    const [postsData, leagueTeamManagersData] = await Promise.all([
        getBlogPosts(fetch),
        getLeagueTeamManagers()
    ]);

    const currentPost = postsData.find(p => p.fields.slug === postID);
    const title = currentPost?.fields?.title || "Blog Post";

    return {
        postsData,
        postID,
        leagueTeamManagersData,
        title
    };
}

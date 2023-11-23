import { posts } from "../data";

export const load = ({params}) => {
    const post = posts.find((post) =>
        post.slug === params.slug)

    return {
        post
    };
}
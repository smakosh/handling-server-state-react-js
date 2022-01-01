import { useRouter } from "next/router";
import Link from "next/link";
import useFetchPost from "../../hooks/useFetchPost";
import usePosts from "../../hooks/usePosts";
import useDispatchPosts from "../../hooks/useDispatchPosts";

const Post = () => {
	const router = useRouter();
	const { post, loading } = usePosts();
	const dispatchPosts = useDispatchPosts();
	useFetchPost(post, Number(router.query.id), dispatchPosts);

	return (
		<div>
			<Link href="/">Back to posts</Link>
			{loading ? <p>Loading...</p> : <h1>{post?.title}</h1>}
		</div>
	);
};

export default Post;

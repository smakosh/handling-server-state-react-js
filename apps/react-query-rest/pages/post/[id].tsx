import axios from "axios";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import type { Post } from "..";

const getPostById = async (id: string) => {
	const { data } = await axios.get(
		`https://jsonplaceholder.typicode.com/posts/${id}`
	);
	return data;
};

function usePost(postId: string) {
	return useQuery<Post, Error>(["post", postId], () => getPostById(postId), {
		enabled: !!postId,
	});
}

export default function Index() {
	const router = useRouter();
	const { status, data, isFetching } = usePost(String(router.query.id));

	return (
		<div>
			<h1>Posts</h1>
			<Link href="/">Back to posts</Link>
			<div>
				{status === "loading" ? (
					"Loading..."
				) : (
					<>
						<div>
							<h1>{data?.title}</h1>
						</div>
						<div>{isFetching ? "Background Updating..." : " "}</div>
					</>
				)}
			</div>
			<ReactQueryDevtools initialIsOpen />
		</div>
	);
}

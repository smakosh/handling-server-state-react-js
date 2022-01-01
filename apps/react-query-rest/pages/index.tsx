import axios from "axios";
import Link from "next/link";
import { useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

export type Post = {
	id: number;
	title: string;
};

function usePosts() {
	return useQuery<Post[], Error>("posts", async () => {
		const { data } = await axios.get(
			"https://jsonplaceholder.typicode.com/posts"
		);
		return data;
	});
}

export default function Index() {
	const { status, data, isFetching } = usePosts();

	return (
		<div>
			<h1>Posts</h1>
			<div>
				{status === "loading" ? (
					"Loading..."
				) : (
					<>
						<div>
							{data?.map((post) => (
								<p key={post.id}>
									<Link href={`/post/${post.id}`}>
										<a>{post.title}</a>
									</Link>
								</p>
							))}
						</div>
						<div>{isFetching ? "Background Updating..." : " "}</div>
					</>
				)}
			</div>
			<ReactQueryDevtools initialIsOpen />
		</div>
	);
}

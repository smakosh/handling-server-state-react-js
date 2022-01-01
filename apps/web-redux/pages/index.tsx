import Link from "next/link";
import { useGetPostsQuery } from "../api/postApi";

export default function Index() {
	const { data, isLoading } = useGetPostsQuery(null);

	if (isLoading) return <p>Loading...</p>;

	return (
		<div>
			<h1>React Redux Toolkit (with RTK) hooked to a Rest API</h1>
			<div>
				{data?.map((post) => (
					<p key={post.id}>
						<Link href={`/post/${post.id}`}>
							<a>{post.title}</a>
						</Link>
					</p>
				))}
			</div>
		</div>
	);
}

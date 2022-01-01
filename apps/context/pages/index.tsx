import Link from "next/link";
import usePosts from "../hooks/usePosts";

export default function Index() {
	const { data } = usePosts();

	return (
		<div>
			<h1>React Context with useReducer hooked to a Rest API</h1>
			{data?.map((post) => (
				<p key={post.id}>
					<Link href={`/post/${post.id}`}>
						<a>{post.title}</a>
					</Link>
				</p>
			))}
		</div>
	);
}

import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { useGetPostByIdQuery } from "../../api/postApi";

export default function Index() {
	const router = useRouter();
	const { data, isLoading } = useGetPostByIdQuery(Number(router.query.id));

	if (isLoading) return <p>Loading...</p>;

	return (
		<div>
			<h4>
				<Link href="/">
					<a>Back to posts</a>
				</Link>
			</h4>
			<h1>{data?.title}</h1>
		</div>
	);
}

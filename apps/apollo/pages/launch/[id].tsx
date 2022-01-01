import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { useLaunchQuery } from "../../generated/graphql";

export default function Launch() {
	const router = useRouter();
	const { data, loading } = useLaunchQuery({
		variables: {
			id: String(router.query.id),
		},
	});

	if (loading) return <p>Loading...</p>;

	return (
		<div>
			<Link href="/">
				<a>Back to launches</a>
			</Link>
			<div>
				<h4>{data?.launch?.mission_name}</h4>
			</div>
		</div>
	);
}

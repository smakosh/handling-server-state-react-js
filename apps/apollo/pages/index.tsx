import Link from "next/link";
import { useLaunchesQuery } from "../generated/graphql";

export default function Index() {
	const { data, loading } = useLaunchesQuery();

	if (loading) return <h4>Loading...</h4>;

	return (
		<div>
			<h1>Apollo client hooked to a GraphQL API</h1>
			<div>
				{data?.launches?.map((launch) => (
					<p key={launch?.id}>
						<Link href={`/launch/${launch?.id}`}>
							<a>{launch?.mission_name}</a>
						</Link>
					</p>
				))}
			</div>
		</div>
	);
}

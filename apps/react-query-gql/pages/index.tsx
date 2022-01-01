import Link from "next/link";
import { ReactQueryDevtools } from "react-query/devtools";
import { useLaunchesQuery } from "../generated/graphql";

export default function Index() {
	const { data, isFetching, status } = useLaunchesQuery();

	return (
		<div>
			<h1>React Query hooked to a GraphQL API</h1>
			<div>
				{status === "loading" ? (
					"Loading..."
				) : (
					<>
						<div>
							{data?.launches?.map((launch) => (
								<p key={launch?.id}>
									<Link href={`/launch/${launch?.id}`}>
										<a>{launch?.mission_name}</a>
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

import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { ReactQueryDevtools } from "react-query/devtools";
import { useLaunchQuery } from "../../generated/graphql";

export default function Launch() {
	const router = useRouter();
	const { data, isFetching } = useLaunchQuery(
		{
			id: String(router.query.id),
		},
		{
			enabled: !!router.query.id || !router.isReady,
		}
	);

	if (isFetching) return <p>Loading...</p>;

	return (
		<div>
			<Link href="/">
				<a>Back to launches</a>
			</Link>
			<div>
				<h4>{data?.launch?.mission_name}</h4>
			</div>
			<ReactQueryDevtools initialIsOpen />
		</div>
	);
}

import type { AppProps } from "next/app";
import PostsProvider from "../providers/PostsProvider";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<PostsProvider>
			<Component {...pageProps} />
		</PostsProvider>
	);
}

export default MyApp;

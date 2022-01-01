import { createContext, Reducer, useReducer } from "react";
import PostsReducer, { INITIAL_STATE } from "../reducers/PostsReducer";
import type { DispatchPosts, StatePosts, PostsActions } from "../types/posts";
import useFetchPosts from "../hooks/useFetchPosts";

type PostsProviderProps = { children: React.ReactNode };

export const PostsContext = createContext<StatePosts | undefined>(undefined);
export const PostsDispatchContext = createContext<DispatchPosts | undefined>(
	undefined
);

const PostsProvider = ({ children }: PostsProviderProps) => {
	const [posts, dispatchPosts] = useReducer<Reducer<StatePosts, PostsActions>>(
		PostsReducer,
		INITIAL_STATE
	);
	useFetchPosts(posts, dispatchPosts);

	if (posts.loading) return <p>Loading...</p>;

	return (
		<PostsContext.Provider value={posts}>
			<PostsDispatchContext.Provider value={dispatchPosts}>
				{children}
			</PostsDispatchContext.Provider>
		</PostsContext.Provider>
	);
};

export default PostsProvider;

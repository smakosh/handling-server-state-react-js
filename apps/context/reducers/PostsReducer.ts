import type { StatePosts, PostsActions } from "../types/posts";

export const INITIAL_STATE: StatePosts = {
	loading: true,
	data: null,
	post: null,
};

const PostsReducer = (
	posts: typeof INITIAL_STATE,
	action: PostsActions
): StatePosts => {
	switch (action.type) {
		case "SAVE_POSTS":
			return {
				...posts,
				data: action.payload,
			};
		case "SAVE_POST_BY_ID":
			return {
				...posts,
				post: action.payload,
			};
		case "LOADING_TRUE":
			return {
				...posts,
				loading: true,
			};
		case "LOADING_FALSE":
			return {
				...posts,
				loading: false,
			};
		default:
			throw new Error();
	}
};

export default PostsReducer;

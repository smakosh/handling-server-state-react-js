export type PostsActions =
	| { type: "SAVE_POSTS"; payload: Post[] }
	| { type: "SAVE_POST_BY_ID"; payload: Post }
	| { type: "LOADING_TRUE" }
	| { type: "LOADING_FALSE" };

export type Post = {
	id: number;
	title: string;
};

export type StatePosts = {
	loading: boolean;
	data: Post[] | null;
	post: Post | null;
};

export type DispatchPosts = (action: PostsActions) => void;

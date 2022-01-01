import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type PostData = {
	id: number;
	title: string;
};

export interface PostState {
	isLoading: boolean;
	posts: PostData[] | null;
	post: PostData | null;
}

const initialState: PostState = {
	isLoading: true,
	posts: null,
	post: null,
};

export const PostSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		savePosts: (state, action: PayloadAction<PostData[]>) => {
			state.posts = action.payload;
		},
		savePost: (state, action: PayloadAction<PostData>) => {
			state.post = action.payload;
		},
		setLoading: (state, action: PayloadAction<boolean>) => {
			state.isLoading = action.payload;
		},
	},
});

export const { savePosts, savePost, setLoading } = PostSlice.actions;

export default PostSlice.reducer;

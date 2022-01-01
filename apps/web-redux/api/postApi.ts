import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PostData } from "../redux/postSlice";

export const postApi = createApi({
	reducerPath: "postApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://jsonplaceholder.typicode.com/posts",
	}),
	endpoints: (builder) => ({
		getPosts: builder.query<PostData[], null>({
			query: () => "",
		}),
		getPostById: builder.query<PostData, number>({
			query: (postId) => `/${postId}`,
		}),
	}),
});

export const { useGetPostsQuery, useGetPostByIdQuery } = postApi;

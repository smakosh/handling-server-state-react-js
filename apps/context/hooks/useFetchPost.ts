import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import type { DispatchPosts, Post } from "../types/posts";

const useFetchPost = (
	post: Post | null,
	postId: number,
	dispatch: DispatchPosts
) => {
	const [error, setError] = useState("");

	const fetchPostById = useCallback(async () => {
		try {
			dispatch({ type: "LOADING_TRUE" });
			const { data } = await axios.get(
				`https://jsonplaceholder.typicode.com/posts/${postId}`
			);

			if (data) {
				dispatch({ type: "SAVE_POST_BY_ID", payload: data });
			}

			dispatch({ type: "LOADING_FALSE" });
		} catch (err) {
			setError(err?.response?.data?.message || "Something went wrong");
			dispatch({ type: "LOADING_FALSE" });
		}
	}, [dispatch]);

	useEffect(() => {
		if (post?.id !== postId) {
			fetchPostById();
		}
	}, []);

	return { error };
};

export default useFetchPost;

import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import type { DispatchPosts, StatePosts } from "../types/posts";

const useFetchPosts = (posts: StatePosts, dispatch: DispatchPosts) => {
	const [error, setError] = useState("");

	const fetchPosts = useCallback(async () => {
		try {
			dispatch({ type: "LOADING_TRUE" });
			const { data } = await axios.get(
				"https://jsonplaceholder.typicode.com/posts"
			);

			if (posts) {
				dispatch({ type: "SAVE_POSTS", payload: data });
			}

			dispatch({ type: "LOADING_FALSE" });
		} catch (err) {
			setError(err?.response?.data?.message || "Something went wrong");
			dispatch({ type: "LOADING_FALSE" });
		}
	}, [dispatch]);

	useEffect(() => {
		if (!posts.data) {
			fetchPosts();
		}
	}, [posts.data, fetchPosts]);

	return { error };
};

export default useFetchPosts;

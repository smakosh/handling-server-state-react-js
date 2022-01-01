import { useContext } from "react";
import { PostsDispatchContext } from "../providers/PostsProvider";

const useDispatchPosts = () => {
	const context = useContext(PostsDispatchContext);

	if (context === undefined) {
		throw new Error("useDispatchPosts must be used within a PostsProvider");
	}

	return context;
};

export default useDispatchPosts;

import PostList from "../components/posts/PostList";

function HomePage() {
	return (
		<div className=" mx-auto max-w-2xl">
			<h1 className="text-3xl my-4 font-bold leading-tight text-gray-900">Posts</h1>
			<PostList />
		</div>
	);
}

export default HomePage;

import PostCard from "./PostCard";

export default function PostContainer({ data }) {
  return (
    <div className="postcontain">
      {data.map((post) => (
        <PostCard key={post.id} title={post.title} body={post.body} />
      ))}
    </div>
  );
}

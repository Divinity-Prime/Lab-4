import PostCard from "./PostCard";

export default function PostContainer({ data }) {
  return (
    <div>
      {data.map((post) => (
        <PostCard key={post.id} title={post.title} body={post.body} />
      ))}
    </div>
  );
}

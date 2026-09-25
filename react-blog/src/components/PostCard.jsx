export default function PostCard({ post }) {
  return (
    <article className="post-card">
      <span className="post-category">{post.category}</span>
      <h3>{post.title}</h3>
      <p>{post.excerpt}</p>
      <span className="post-date">{post.date}</span>
    </article>
  );
}

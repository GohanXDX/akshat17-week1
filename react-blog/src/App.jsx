import { useState } from "react";
import posts from "./data/posts.json";
import PostCard from "./components/PostCard";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";
import "./App.css";

export default function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [...new Set(posts.map((p) => p.category))];

  const filteredPosts = posts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "All" || post.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="app">
      <header className="blog-header">
        <h1>Wander & Discover</h1>
        <p>Explore beautiful destinations, hidden gems, unforgettable adventures, and experiences worth remembering.</p>
      </header>

      <div className="controls">
        <SearchBar value={search} onChange={setSearch} />
        <CategoryFilter categories={categories} active={category} onSelect={setCategory} />
      </div>

      <div className="post-grid">
        {filteredPosts.length === 0 && <p className="empty-msg">No posts match that.</p>}
        {filteredPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default function CategoryFilter({ categories, active, onSelect }) {
  return (
    <div className="category-filter">
      <button
        className={active === "All" ? "filter-btn active" : "filter-btn"}
        onClick={() => onSelect("All")}
      >
        All
      </button>
      {categories.map((cat) => (
        <button
          key={cat}
          className={active === cat ? "filter-btn active" : "filter-btn"}
          onClick={() => onSelect(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

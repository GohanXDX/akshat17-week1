import Button from "./Button";

export default function Card({ title, description, tag, onDelete }) {
  return (
    <div className="card">
      {tag && <span className="card-tag">{tag}</span>}
      <h3>{title}</h3>
      <p>{description}</p>
      {onDelete && (
        <Button variant="danger" onClick={onDelete}>
          Remove
        </Button>
      )}
    </div>
  );
}

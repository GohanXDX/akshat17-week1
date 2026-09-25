import { useState } from "react";
import Button from "./Button";

export default function Form({ onAdd }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!title.trim() || !description.trim()) {
      setError("Both fields are required");
      return;
    }

    onAdd({ title, description, tag: "New" });
    setTitle("");
    setDescription("");
    setError("");
  }

  return (
    <form className="card-form" onSubmit={handleSubmit}>
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      {error && <p className="form-error">{error}</p>}
      <Button type="submit">Add card</Button>
    </form>
  );
}

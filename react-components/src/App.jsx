import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Form from "./components/Form";
import "./App.css";

const initialCards = [
  {
    id: 1,
    title: "Mountain Escape",
    description: "A peaceful weekend surrounded by mountains, fresh air and beautiful views.",
    tag: "Travel",
  },
  {
    id: 2,
    title: "Morning Coffee",
    description: "A warm cup of coffee and a quiet morning to start the day peacefully.",
    tag: "Lifestyle",
  },
  {
    id: 3,
    title: "Street Photography",
    description: "Capturing simple moments, interesting people and everyday city life.",
    tag: "Photography",
  },
];

export default function App() {
  const [cards, setCards] = useState(initialCards);

  function addCard(newCard) {
    setCards((prev) => [...prev, { ...newCard, id: Date.now() }]);
  }

  function removeCard(id) {
    setCards((prev) => prev.filter((c) => c.id !== id));
  }

  return (
    <div className="app">
      <Header title="Akshat's Card Creation Project" />

      <main>
        <Form onAdd={addCard} />

        <div className="card-grid">
          {cards.length === 0 && <p>No cards yet — add one above.</p>}

          {cards.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              description={card.description}
              tag={card.tag}
              onDelete={() => removeCard(card.id)}
            />
          ))}
        </div>
      </main>

      <Footer name="Created by Akshat Kumar Yadav" />
    </div>
  );
}
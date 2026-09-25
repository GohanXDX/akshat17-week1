export default function Header({ title }) {
  return (
    <header className="site-header">
      <h1>{title}</h1>
      <p>Create, view and manage your cards</p>
    </header>
  );
}
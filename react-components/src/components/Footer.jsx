export default function Footer({ name }) {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <p>
        © {year} <strong>{name}</strong>. Built with React.
      </p>
    </footer>
  );
}
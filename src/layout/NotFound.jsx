import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h2>⚠️ Page not found</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur error
        consequatur dolorum harum similique, voluptatum molestiae expedita
        atque? Non nesciunt, blanditiis exercitationem ratione esse consequatur
        expedita aut laudantium hic alias.
      </p>
      <p>
        Go to <Link to="/">Homepage</Link>
      </p>
    </div>
  );
}

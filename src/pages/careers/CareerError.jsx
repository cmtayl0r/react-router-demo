import { Link, useRouteError } from "react-router-dom";

function CareerError() {
  // Use the useRouteError hook to get the error message
  const error = useRouteError();

  return (
    <div className="careers-error">
      <h2>Error</h2>
      <p>{error.message}</p>
      <Link to="/">Back to homepage</Link>
    </div>
  );
}

export default CareerError;

import { useLoaderData, Link } from "react-router-dom";

export default function Careers() {
  // Use the useLoaderData hook to get the data from the loader
  const data = useLoaderData();

  // If the data is not an array, return a message
  if (!Array.isArray(data)) {
    return <div>No careers available</div>;
  }

  return (
    <div className="careers">
      {data.map((career) => (
        <Link to={career.id.toString()} key={career.id}>
          <p>{career.title}</p>
          <p>Based in {career.location}</p>
        </Link>
      ))}
    </div>
  );
}

// Loader function
// To fetch data associated with this component
export const careersLoader = async () => {
  // Dummy API call to json-server
  // Fetch data from the server
  const response = await fetch("http://localhost:9000/careers");
  if (!response.ok) {
    throw new Error("Failed to fetch careers");
  }
  // When promise resolved we can access the data in the component above using the hook
  return response.json();
};

import { useLoaderData } from "react-router-dom";

export default function CareerDetails() {
  const data = useLoaderData();

  return (
    <div className="career-details">
      <h2>Career Details for {data.title}</h2>
      <p>Starting salary: {data.salary}</p>
      <p>Location: {data.location}</p>
      <div className="details">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
        repudiandae quibusdam accusamus fuga, deleniti fugit nihil cum quasi
        odio similique, animi reiciendis corporis, necessitatibus adipisci.
        Animi modi libero aliquid inventore.
      </div>
    </div>
  );
}

// Loader function
// This accepts the params object from the URL, which is defined in the router
export const careersDetailsLoader = async ({ params }) => {
  // destructuring the params object to get the careerId, which is the dynamic part of the URL
  const { careerId } = params;
  const response = await fetch(`http://localhost:9000/careers/${careerId}`);

  if (!response.ok) {
    throw new Error("Failed to fetch this career details");
  }
  return response.json();
};

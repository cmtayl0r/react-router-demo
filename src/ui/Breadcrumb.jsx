import { Link, useLocation } from "react-router-dom";

function Breadcrumb() {
  // Get the current location object from the router
  const location = useLocation();
  // Initialize a variable to store the current link
  let currentLink = "";
  // Split the pathname into an array of strings
  // Every time we map over the array, we update the current link
  const crumbs = location.pathname
    .split("/") // Split the pathname into an array of strings
    .filter((crumb) => crumb !== "") // Filter out empty strings
    .map((crumb) => {
      currentLink += `/${crumb}`; // Update the current link with the current crumb
      return (
        <div className="crumb" key={crumb}>
          <Link to={currentLink}>{crumb}</Link>
        </div>
      );
    });

  return <div className="breadcrumbs">{crumbs}</div>;
}

export default Breadcrumb;

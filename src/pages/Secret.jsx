import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Secret() {
  const navigate = useNavigate();
  const isAuthenticated = false; // Simulate the user's authentication status

  useEffect(() => {
    if (!isAuthenticated) {
      // Redirect to the login page if the user is not authenticated
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) return null; // Render nothing until navigation

  return (
    <div>
      <h1>Welcome to the Secret page!</h1>
      <p>You are not logged in so you will be redirected</p>
    </div>
  );
}

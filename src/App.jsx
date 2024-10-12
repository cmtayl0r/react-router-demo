import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense, lazy } from "react";

// PAGES
import Home from "./pages/Home";
import About from "./pages/About";
import Faq from "./pages/help/Faq";
import Contact from "./pages/help/Contact";
const Careers = lazy(() => import("./pages/careers/Careers"));
const CareerDetails = lazy(() => import("./pages/careers/CareerDetails"));
import Login from "./pages/Login";
import Secret from "./pages/Secret";

// DATA LOADERS
import { careersLoader } from "./pages/careers/Careers";
import { careersDetailsLoader } from "./pages/careers/CareerDetails";

// ACTIONS
import { contactAction } from "./pages/help/Contact";

// LAYOUT
import RootLayout from "./layout/RootLayout";
import HelpLayout from "./layout/HelpLayout";
import CareersLayout from "./layout/CareersLayout";
import NotFound from "./layout/NotFound";
import CareerError from "./pages/careers/CareerError";

// UI COMPONENTS
import LoadingSpinner from "./ui/LoadingSpinner";

// ROUTER
const router = createBrowserRouter([
  {
    element: <RootLayout />, // Parent route layout
    errorElement: <NotFound />, // Catch-all error page for children routes
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "help",
        element: <HelpLayout />, // Sub parent route layout
        children: [
          {
            path: "faq",
            element: <Faq />,
          },
          {
            path: "contact",
            element: <Contact />,
            action: contactAction,
          },
        ],
      },
      {
        path: "careers",
        element: <CareersLayout />, // Sub parent route layout
        errorElement: <CareerError />, // Error page for children routes
        children: [
          {
            path: "", // Default index page at this level
            element: (
              <Suspense fallback={<LoadingSpinner />}>
                <Careers />
              </Suspense>
            ),
            loader: careersLoader,
          },
          {
            path: ":careerId",
            element: (
              <Suspense fallback={<LoadingSpinner />}>
                <CareerDetails />
              </Suspense>
            ),
            loader: careersDetailsLoader,
          },
        ],
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "secret",
        element: <Secret />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

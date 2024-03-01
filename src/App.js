import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/movie/:imdbID",
                element: <MovieDetail />
            }
        ]
    }
])

function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;

import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Token from "./Component/Token";
import Pair from "./Component/Pair";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            index: true,
            element:<Token/>
        },
        {
            path: '/pair',
            element: <Pair/>
        }
    ]
  },
]);

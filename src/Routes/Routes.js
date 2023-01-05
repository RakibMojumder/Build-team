import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Team from "../features/team/Team";
import Main from "../layout/Main";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/team',
                element: <Team />
            }
        ]
    }
]);

export default router;
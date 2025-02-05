import ReactDOM from "react-dom/client";
import Swiggy from "./Component/Swiggy";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Help from "./Component/Help";
import Offer from "./Component/Offer";
import Cart from "./Component/Cart";
import Sign from "./Component/Sign";
import Error from "./Component/Error";
import Body from "./Component/Body";
import Restaurantinfo from "./Component/Restaurantinfo";
import "./App.css";

const App = () => {
    return (
        <RouterProvider router={appRouter}>
            <Swiggy />
        </RouterProvider>
    );
};

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <Swiggy />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: '/help',
                element: <Help />
            },
            {
                path: "/Offer",
                element: <Offer />
            },
            {
                path: "/Cart",
                element: <Cart />
            },
            {
                path: "/Sign",
                element: <Sign />
            },
            {
                path: "/restaurants/:resid",
                element: <Restaurantinfo />
            }
        ],
        errorElement: <Error />
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export default App;

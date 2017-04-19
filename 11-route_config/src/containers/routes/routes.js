import Sandwiches from "./Sandwiches";
import Tacos from "./Tacos";
import Bus from "./Bus";
import Cart from "./Cart";

const routes = [
    {
        path: "/sandwiches",
        component: Sandwiches
    },
    {
        path: "/tacos",
        component: Tacos,
        routes: [
            {
                path: "/tacos/bus",
                component: Bus
            },
            {
                path: "/tacos/cart",
                component: Cart
            }
        ]
    }
];

export default routes;

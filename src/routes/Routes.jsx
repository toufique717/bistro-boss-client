// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";

// import Main from "../layout/Main";
// import Home from "../pages/Home";
// import Menu from "../menupaage/Menu";
// import Order from "../orderpage/Order";

// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Main></Main>,
//     children: [
//       {
//         path: "/",
//         element: <Home></Home>,
//       },
//       {
//         path: "/menu",
//         element: <Menu></Menu>,
//       },

//       {
//         path: "/order/:category",
//         element: <Order></Order>,
//       },
//     ],
//   },
// ]);

 
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Main from "../layout/Main";
import Home from "../pages/Home";
import Menu from "../menupaage/Menu";
import Order from "../orderpage/Order";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },

      // ✅ CHANGED: Made category optional with ?
      {
        path:  'order/:category',
        element: <Order></Order>,
      },
    ],
  },
]);

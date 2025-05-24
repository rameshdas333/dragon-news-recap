import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../Home/HomeLayout";
import CategoryNews from "../../pages/CategoryNews";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children:[
    {
         path:"",
         element:<Navigate to={"/category/01"}></Navigate>
    },
        {
        path:"/category/:id",
        element:<h2>This is category</h2>,
     
      },
       
    ],

  },
  {
    path:"*",
    element:<h2>Error page</h2>
  }
]);


export default router;
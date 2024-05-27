import ReactDOM from "react-dom/client";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom"
import "../style.css";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/RestaurantMenu.js";

const Applayout = () => {
  return (
    <div>
      <Header />
     <Outlet />
    </div>
  );
};
const Router = createBrowserRouter([
  {
     path:"/",
     element:<Applayout/>,
     children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/about",
        element:<About/>
    },
    { 
       path:"/contact",
       element:<Contact/>
    },
    {
      path:"/restaurants/:resId",
      element:<RestaurantMenu/>
    }
     ],
     errorElement:<Error/>
  }
  
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router ={Router}/>);

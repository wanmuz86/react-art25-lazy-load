import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
// If i put .ts or .js, it will not recognize JSX - <>

const Home = React.lazy(()=> import('./components/Home'))
const About = React.lazy(()=> import('./components/About'))
const App = React.lazy(()=> import('./App'));

export const router = createBrowserRouter([
    {
        element:<Layout/>,
        children:[
            {
                path:"/",element:<Home/>
            },
            {
                path:"/about",element:<About/>
            },
            {
                path:"/first-exercise",element:<App/>
            }
        ]
    }
]);
import { createBrowserRouter } from "react-router-dom";

import Home from "./src/pages/Home";
import DoctorProfile from "./src/component/DoctorProfile";
import Doctors from "./src/pages/Doctors"

const routes = createBrowserRouter([
    {
        path: "/",
        element:<Home/>
}
    ,
    {
        path: "/doctors",
        element: <Doctors />,
        children: [{
            path: ":id",
            element:<DoctorProfile/>
        }]

    }
])

export default routes
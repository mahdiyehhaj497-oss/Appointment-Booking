import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
    {
        path: "/doctors",
        element:<Doctors/>
    }, {
        path: "/doctor/:id",
        element:<DoctorProfile/>
    }
])

export default routes
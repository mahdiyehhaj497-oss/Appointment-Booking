import { RouterProvider } from "react-router-dom";
import routes from "../routes"
import DoctorCard from "./component/DoctoreCard";


export default function App() {
  return (
    <>
      <div>
        <RouterProvider router={routes}/>
      <DoctorCard/>
      </div>
    </>
  )
}
import { Outlet } from "react-router-dom";
import Navbar from '../components/Navbar'

const Mainlayouts = () => {
  return (
    <>
        <Navbar/>
        <Outlet/>
    </>
  )
}

export default Mainlayouts
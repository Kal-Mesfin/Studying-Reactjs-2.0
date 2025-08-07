import Hero from "../components/Hero"
import HomeCards from "../components/HomeCards"
import Joblistings from "../components/Joblistings"
import Viewall from "../components/Viewall"

const Homepage = () => {
  return (
    <>
    <Hero/>
    <HomeCards/>
    <Joblistings isHome = {true}/>
    <Viewall/>
    </>
  )
}

export default Homepage
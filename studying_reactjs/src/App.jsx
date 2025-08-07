import Hero from "./components/Hero"
import HomeCards from "./components/HomeCards"
import Navbar from "./components/Navbar"
import Joblistings from "./components/joblistings"
import jobs from "./jobs.json"


function App (){
  return(
    <>
    <Navbar/>
    <Hero/>
    <HomeCards/>
    <Joblistings jobs={jobs} />
    </>
  )
};
export default App
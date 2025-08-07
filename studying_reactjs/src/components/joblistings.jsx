import {useState,useEffect} from "react"
import Joblisting from "./Joblisting"
import jobs from "../jobs.json"

function Joblistings({isHome=false}){
    const [jobs,setJobs]=useState([]);
    const [loading, setLoading]= useState(true);

    useEffect(() => {
    const fetchJobs = async () => {
        const apiurl = isHome ? '/api/jobs?_limit=3' : '/api/jobs';
      try {
        const res = await fetch(apiurl);
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log('Error fetching data', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

    return(
        <section className="bg-yellow-50 py-10 px-4">
            <div className="m-auto lg:container container-xl ">
                <h2 className="text text-yellow-500 text-center text-3xl font-bold mb-5">
                   { isHome? "Recent Jobs":"All Jobs"} </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {loading ? (<h2>loading...</h2>):
                    (<>
                    {jobs.map((jobs)=>(
                      <Joblisting key={jobs.id} jobs={jobs}/>
                    ))}
                    </>)}
                </div>
            </div>
        </section>
    )

};
export default Joblistings
import { useState } from "react"
import { Link } from "react-router-dom";


function Joblisting ({jobs}){
    const [ShowDescription,setShowDescription] = useState(false);
    let description = jobs.description;
    if(!ShowDescription){
        description = description.substring(0,90)+"...";
    }
  return (
     <div className="bg-white rounded-2xl shadow-md p-6 border hover:shadow-lg transition duration-300">
                        <div className="mb-4">
                           <h2 className="text-xl font-bold text-[#06362D]">{jobs.title}</h2>
                           <p className="text-sm text-gray-500">{jobs.type} — {jobs.location}</p>
                      </div>
                          <p className="text-gray-700 text-sm mb-4 line-clamp-3">{jobs.description}</p>
                       <div className="text-sm text-gray-600 mb-2">
                        <span className="font-medium">Salary:</span> {jobs.salary}
                      </div >
                         <div className="mt-4 border-t pt-4 mb-3">
                            <h3 className="text-sm font-semibold text-gray-800">{jobs.company.name}</h3>
                            <p className="text-sm text-gray-600">{description}</p>
                            <button onClick={()=>setShowDescription((prevstate)=>(!prevstate))}className="text-yellow-600 hover:text-yellow-400 mb-4 mt-4">{ShowDescription ? "Less": "More"}</button>
                            <p className="text-sm mt-1 text-gray-500">📧 {jobs.company.contactEmail}</p>
                            <p className="text-sm text-gray-500">📞 {jobs.company.contactPhone}</p>
                        </div>
                      <div className="mt-6 flex justify-center">
                        <Link to={`/jobs/${jobs.id}`}  className="bg-red-700 text-white flex items-center px-4 py-2 rounded-lg hover:bg-red-600 hover:text-white transition text-center text-sm">
                         Apply Now
                        </Link>
                    </div>
                  </div>
  )
}
export default Joblisting
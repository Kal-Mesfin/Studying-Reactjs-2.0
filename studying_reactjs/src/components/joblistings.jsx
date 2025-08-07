function Joblistings({jobs}){
    return(
        <section className="bg-indigo-50 py-10 px-4">
            <div className="m-auto lg:container container-xl ">
                <h2 className="text text-indigo-600 text-center text-3xl font-bold mb-5">
                    Browse Jobs</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {jobs.map((jobs)=>(
                       <div  key={jobs.id} className="bg-white rounded-2xl shadow-md p-6 border hover:shadow-lg transition duration-300">
                        <div className="mb-4">
                           <h2 className="text-xl font-bold text-[#06362D]">{jobs.title}</h2>
                           <p className="text-sm text-gray-500">{jobs.type} — {jobs.location}</p>
                      </div>
                          <p className="text-gray-700 text-sm mb-4 line-clamp-3">{jobs.description}</p>
                       <div className="text-sm text-gray-600 mb-2">
                        <span className="font-medium">Salary:</span> {jobs.salary}
                      </div>
                         <div className="mt-4 border-t pt-4 mb-3">
                          <h3 className="text-sm font-semibold text-gray-800">{jobs.company.name}</h3>
                          <p className="text-sm text-gray-600">{jobs.company.description}</p>
                          <p className="text-sm mt-1 text-gray-500">📧 {jobs.company.contactEmail}</p>
                          <p className="text-sm text-gray-500">📞 {jobs.company.contactPhone}</p>
                      </div>
                      <div className="mt-6 flex justify-center">
                        <button className="bg-indigo-700 text-white flex items-center px-4 py-2 rounded-lg hover:bg-indigo-600 hover:text-white transition">
                         Apply Now
                        </button>
                    </div>
                  </div>
                    ))}
                </div>
            </div>
        </section>
    )

};
export default Joblistings
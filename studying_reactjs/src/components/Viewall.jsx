import { Link } from "react-router-dom"
const Viewall = () => {
  return (
    <section className="m-auto max-w-sm px-6 py-10">
        <Link to="../jobs" className="block bg-black text-white text-center rounded-lg py-2 hover:bg-gray-800">
        View All Jobs
        </Link>
    </section>
  )
}

export default Viewall
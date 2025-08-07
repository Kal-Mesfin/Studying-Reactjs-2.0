import logo from '../assets/logo.png';
import { NavLink } from 'react-router-dom';

function Navbar() {
 const buttonCss = ({isActive})=>isActive ? "bg-red-700 hover:bg-red-600 text-white hover:text-white px-3 py-2 rounded-md text-sm font-medium " : 'text-white hover:bg-red-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium';

  return (
    <nav className='bg-yellow-500 border-b border-white'>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <div className='flex h-20 items-center justify-between'>
          <div className='flex flex-1 items-center justify-center md:items-stretch md:justify-start'>
            <a className='flex flex-shrink-0 items-center mr-4' href="\">
              <img className='h-[70px] w-auto' src={logo} alt='React Jobs' />
              <span className='hidden md:block text-white text-2xl font-bold ml-[0.5rem]'>
                Jobs
              </span>
            </a>
          </div>
          <div className='flex space-x-2'>
            <NavLink to='/' className={buttonCss}>
              Home
            </NavLink>
            <NavLink to='/jobs' className={buttonCss}>
              Jobs
            </NavLink>
            <NavLink to='/add-job' className={buttonCss}>
              Add Job
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
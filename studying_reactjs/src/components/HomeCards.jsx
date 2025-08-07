import { Link } from 'react-router-dom';
import Card from './Card';

function HomeCards(){
    return(
        <section className='py-4'>
            <div className='container-xl lg:container m-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg'>
                    <Card>
                        <h2 className='text-2xl font-bold'>For seekers</h2>
                        <p className='mt-2 mb-4'>Browse our infinite list of jobs and start your career today</p>
                        <Link to='/jobs' className='inline-block bg-[#06362D] text-white rounded-lg px-4 py-2 hover:bg-[hsl(169,80%,19%)] hover:text-white'>
                     Browse Jobs </Link>
                    </Card>
                    <Card bg='bg-yellow-200'>
                        <h2 className='text-2xl font-bold'>For Employers</h2>
                         <p className='mt-2 mb-4'>List your job to find the perfect employee for the role</p>
                        <Link to='/add-job'className='inline-block bg-yellow-500 text-white rounded-lg px-4 py-2 hover:bg-yellow-600'>
                        Add Job </Link>
            </Card>
                </div>
            </div>
        </section>
    );
};
export default HomeCards



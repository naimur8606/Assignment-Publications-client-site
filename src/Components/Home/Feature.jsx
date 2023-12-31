import { useContext } from 'react';
import { MdAddTask, MdOutlineAssignment, MdOutlineCreate } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Feature = () => {
    const {user}=useContext(AuthContext)
    return (
        <div className='w-11/12 mx-auto my-10 '>
            <h4 className='text-center font-semibold text-xl text-[#009fe2] mb-5'>Features</h4>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            <div className="shadow-lg rounded-lg p-5 space-y-3 text-center">
                <MdOutlineCreate className='text-5xl mx-auto'></MdOutlineCreate>
                <h3 className="text-2xl md:text-3xl font-semibold">Create Assignment</h3>
                <p className="text-base">Easily create assignments for your students or peers and manage them efficiently.</p>
                <div className=''>
                    <Link to={"/create-assignment"} className='text-xl py-2 px-6 text-white bg-[#009fe2] rounded-lg'>Create</Link>
                </div>
            </div>

            <div className="shadow-lg rounded-lg p-5 space-y-3 text-center">
                <MdOutlineAssignment className='text-5xl mx-auto'></MdOutlineAssignment>
                <h3 className="text-2xl md:text-3xl font-semibold">My Assignments</h3>
                <p className="feature-description">View and manage the assignments you have created, track their status, and monitor progress.</p>
                <div>
                    <Link to={`/my-assignment/${user?.email}`} className='text-xl py-2 px-6 text-white bg-[#009fe2] rounded-lg'>View</Link>
                </div>
            </div>

            <div className="shadow-lg rounded-lg p-5 space-y-3 text-center">
                <MdAddTask className='text-5xl mx-auto'></MdAddTask>
                <h3 className="text-2xl md:text-3xl font-semibold">Submitted Assignments</h3>
                <p className="feature-description">Access and review assignments submitted by users, provide feedback, and track completion status.</p>
                <div>
                    <Link to={`/manage-assignments`} className='text-xl py-2 px-6 text-white bg-[#009fe2] rounded-lg'>Manage</Link>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Feature;
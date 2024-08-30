import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './Cards';
import { FaChalkboardTeacher, FaTasks, FaChartLine, FaCalendarAlt } from 'react-icons/fa';
import { MdEventAvailable } from 'react-icons/md';
import { GiTeacher } from 'react-icons/gi';

const TeacherDashboard = () => {
    return (
        <>
            <div className='p-5'>
                <h2 className='fw-bold mb-4'>Instructor Dashboard</h2>
                <div className='row row-cols-1 row-cols-lg-3 g-4 mb-5 g-3'>
                    <Cards icon={<GiTeacher />} title="Active Classes" value="12" />
                    <Cards icon={<FaChalkboardTeacher />} title="Courses Instructed" value="6" />
                    <Cards icon={<FaTasks />} title="Assignments Submitted" value="15" />
                    <Cards icon={<FaCalendarAlt />} title="Upcoming Classes" value="4" />
                    <Cards icon={<FaChartLine />} title="Student Feedback" value="85%" />
                    <Cards icon={<MdEventAvailable />} title="Office Hours Scheduled" value="3" />

                </div>

                <div className="container-fluid bg-light p-4">
                    <h4 className='text-center'>Courses Overview</h4>
                    <div className='d-flex flex-column align-items-center'>
                        <div className='w-100 p-2'>
                            <div className='list-group'>
                                <div className='list-group-item'>
                                    <h5>Course 1</h5>
                                    <div className="progress mt-2">
                                        <div className="progress-bar" role="progressbar" style={{ width: '60%' }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">60%</div>
                                    </div>
                                </div>
                                <div className='list-group-item'>
                                    <h5>Course 2</h5>
                                    <div className="progress mt-2">
                                        <div className="progress-bar" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">80%</div>
                                    </div>
                                </div>
                                <div className='list-group-item'>
                                    <h5>Course 3</h5>
                                    <div className="progress mt-2">
                                        <div className="progress-bar" role="progressbar" style={{ width: '40%' }} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">40%</div>
                                    </div>
                                </div>
                                {/* Add more list items as needed */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TeacherDashboard;
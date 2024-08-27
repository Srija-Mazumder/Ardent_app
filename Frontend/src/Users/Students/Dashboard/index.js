import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './Cards';
import { FaClipboard, FaShoppingCart } from 'react-icons/fa';
import { FaClock, FaMedal } from 'react-icons/fa6';
import { SiTicktick } from "react-icons/si";
import { BsFolderPlus } from "react-icons/bs";

const Dashboard = () =>{
    return(
        <>
        <div className='p-5'>
        <h2 className='fw-bold mb-4'>Dashboard</h2>
        <div className='row row-cols-1 row-cols-lg-3 g-4 mb-5 g-3'>
          <Cards icon={<BsFolderPlus />} title="Total Orders" value="140"/>  
          <Cards icon={<FaShoppingCart/>} title="Cart" value="140"/>
          <Cards icon={<SiTicktick />} title="Completed" value="140"/>
          <Cards icon={<FaClock/>} title="Hours Spend" value="140"/>
          <Cards icon={<FaClipboard/>} title="Tests Completed" value="140"/>
          <Cards icon={<FaMedal/>} title="Score Board" value="140"/>  
        </div>

        <div className="container-fluid bg-light p-4">
                    <h4 className='text-center'>Courses in Progress</h4>
                    <div className='d-flex flex-column align-items-center'>
                        <div className='w-100 p-2'>
                            <div className='list-group'>
                                <div className='list-group-item'>
                                    <h5>Course 1</h5>
                                    <div className="progress mt-2">
                                        <div className="progress-bar" role="progressbar" style={{ width: '50%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
                                    </div>
                                </div>
                                <div className='list-group-item'>
                                    <h5>Course 2</h5>
                                    <div className="progress mt-2">
                                        <div className="progress-bar" role="progressbar" style={{ width: '75%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
                                    </div>
                                </div>
                                <div className='list-group-item'>
                                    <h5>Course 3</h5>
                                    <div className="progress mt-2">
                                        <div className="progress-bar" role="progressbar" style={{ width: '20%' }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">20%</div>
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

export default Dashboard
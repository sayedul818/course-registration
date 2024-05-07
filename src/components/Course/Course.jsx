import {FaDollarSign,FaBook } from "react-icons/fa";
import PropTypes from 'prop-types'
const Course = ({course,handleButton}) => {
    const {cover_img,title,para,price,credit}=course;

    return (
        <div className='mt-10  xl:w-3/12 md:w-2/5 sm:w-3/5  p-6 m-4 shadow-lg shadow-gray-500 rounded-md bg-white'>
            <img className='shadow-lg shadow-gray-400 rounded-md' src={cover_img} alt="" />
            <h1 className='font-bold text-sm mt-2'>{title}</h1>
            <p className='text-xs text-slate-600 mt-2'>{para}</p>
            <div className="flex mt-2 text-slate-600">
                <p className="flex text-sm mr-4"><FaDollarSign className="relative top-1"> </FaDollarSign> Price : <span>{price}</span></p>
                <p className="flex text-sm"><FaBook className="relative top-1 mr-1"></FaBook> Credit : <span>{credit}</span>hr</p>
            </div>
            <button onClick={()=>handleButton(course)} className="shadow-lg shadow-gray-300 bg-sky-400 hover:bg-sky-700 active:bg-sky-400 w-4/5 rounded-md relative top-4 left-4 mb-2 py-1 text-white pt-0">select</button>
        </div>
    );
};
Course.propTypes={
    course: PropTypes.object.isRequired,
    handleButton: PropTypes.func
}
export default Course;
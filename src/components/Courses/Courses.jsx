import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import Course from '../Course/Course';
const Courses = ({handleButton}) => {
    const [courses,setCourses]=useState([]);
    useEffect(()=>{
        fetch('course.json')
        .then(res=>res.json())
        .then(data=>setCourses(data))
    },[])
    return (
        <div className='w-9/12 flex justify-center flex-wrap ml-2 mt-6'>
            {
                courses.map(course=><Course key={course.id} course={course} handleButton={handleButton}></Course>)
            }
        </div>
    );
};
Courses.propTypes={
    handleButton: PropTypes.func
}
export default Courses;
import { useState } from 'react'
import './App.css'
import Courses from './components/Courses/Courses'
import Summaries from './components/Summaries/Summaries';

function App() {
  const [summaries,setSummaries] = useState([]);
  const handleButton=(course)=>{
    const newCourse=[...summaries,course];
    setSummaries(newCourse);
  }

  return (
    <>
      <h3 className='text-2xl text-center mt-10 font-bold'>Course Registration</h3>
      <div className='flex'>
      <Courses handleButton={handleButton}></Courses>
      <Summaries summaries={summaries}></Summaries>
      </div>
    </>
  )
}

export default App


import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import JobCard from '../Components/JobCard';
import { getJobData, getJobFailure, getJobRequest, getJobSuccess } from '../Redux/AppReducer/action';


const JobPage = () => {
  const dispatch = useDispatch();
  const dataJob = useSelector((state)=> state.AppReducer.data)

  
 useEffect(()=>{
    dispatch(getJobData())
 },[])
   
   
   console.log(dataJob)
   


  return (
    <div>
      
         {dataJob.map((elem)=>{
          return <JobCard key={elem.id} elem={elem} />
         })}
    </div>
  )
}

export default JobPage;

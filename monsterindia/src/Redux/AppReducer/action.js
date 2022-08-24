import * as types from "./actionTypes";
import axios from "axios"

const getJobRequest = ()=>{
    return {
        type: types.GET_JOB_REQUEST
    }
}
const getJobSuccess = (payload)=>{
    return {
        type: types.GET_JOB_SUCCESS,
        payload
    }
}
const getJobFailure = ()=>{
    return {
        type: types.GET_JOB_FAILURE
    }
}
 
const getJobData = ()=>(dispatch) =>{
    dispatch(getJobRequest());
    axios.get("http://localhost:8080/jobData").then
    ((res)=>dispatch(getJobSuccess(res.data))).catch
    ((e)=>dispatch(getJobFailure()))
}


export {getJobRequest,getJobSuccess, getJobFailure, getJobData};
import { GET_SERVICES_DATA } from "./actionTypes"
import { GET_JOBS_DATA } from "./actionTypes";

export const getAllServices = (payload)=>{
    //console.log(payload);
    return {
        type: GET_SERVICES_DATA,
        payload : payload
    }
}

export const getAllJobs = (payload)=>{
    //console.log(payload);
    return {
        type: GET_JOBS_DATA,
        payload : payload
    }
}
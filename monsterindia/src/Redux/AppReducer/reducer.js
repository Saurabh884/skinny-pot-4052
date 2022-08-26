import { GET_SERVICES_DATA } from "./actionTypes";
import { GET_JOBS_DATA } from "./actionTypes";

const initialState = {
    servicesData: [],
    jobsData:[],
    isLoading: false,
    isError: false,
  };
  
  export const reducer = (oldState = initialState, {type, payload}) => {
    switch(type){
      case GET_SERVICES_DATA:{
        //console.log(payload)
        return{
          ...oldState,
          servicesData:[...payload]
        }
      }
      case GET_JOBS_DATA:{
        //console.log(payload)
        return{
          ...oldState,
          jobsData:[...payload]
        }
      }
      default:{
        return oldState;
      }
    }
  };
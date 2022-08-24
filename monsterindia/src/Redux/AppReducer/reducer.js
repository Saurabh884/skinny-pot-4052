import * as types from "./actionTypes";
import React from 'react'

const initialState = {
    isLoading:false,
    isError:false,
    data:[]
}

const reducer = (state=initialState ,action) => {
    const {type, payload} = action
    switch(type){
    case types.GET_JOB_REQUEST:
            return{
                ...state,
                isLoading:true,
                isError:false
            }

    case types.GET_JOB_SUCCESS:
                return{
                    ...state,
                    isLoading:false,
                    isError:false,
                    data:payload
                }
    case types.GET_JOB_FAILURE:
                    return{
                        ...state,
                        isLoading:false,
                        isError:true
                    }
    default:
        return state;   
    }

 
    
}

export  {reducer};
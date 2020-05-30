import {
    MISCS_LOADING,
    MISCS_SUCCESS,
    MISCS_FAILLURE,
    MISCS_DONE,
    MISCS_RESET
  } from "../actions/actionTypes";
  
  const INITIAL_STATE = {
    isCompleted: false,
    isSuccess: false,
    hasError: false,
    isLoading: false,
    message: null,
  };
  
  export default (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
      case MISCS_DONE:
        return {
          isCompleted: true,
          isSuccess: false,
          hasError: false,
          isLoading: false,
          message: null,
        };
      case MISCS_RESET:
        return {
          isCompleted: false,
          isSuccess: false,
          hasError: false,
          isLoading: false,
          message: null,
        };
      case MISCS_LOADING:
        return {
          ...state,
          isLoading: true
        };
      case MISCS_SUCCESS:
        return {
          ...state,
          isCompleted: true,
          isSuccess: true,
          hasError: false,
          isLoading: false,
          message: payload,
        };
      case MISCS_FAILLURE:
        return {
          ...state,
          isCompleted: true,
          isSuccess: false,
          hasError: true,
          isLoading: false,
          message:payload,
        };
      default:
        return state;
    }
  };
  
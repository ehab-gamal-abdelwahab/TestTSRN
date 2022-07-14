import actionTypes from './actionTypes'

const loadStart = () => {
    return {
      type: actionTypes.LOAD_START,
      loading: true,
    };
  };
  
const loadStop = () => {
    return {
      type: actionTypes.LOAD_STOP,
      loading: false,
    };
  };


  export default{
      loadStart,
      loadStop
  }
  import { stopSubmit } from 'redux-form';
import {authAPI, getAuth} from '../api/api'
  const SET_USER_DATA='SET_USER_DATA';
  
  let initialState={
  userId:null,
  email:null,
  login:null,
  isFetching:false,
  isAuth:false
}

  export const authReducer=(state=initialState,action)=>{
  switch(action.type)
    {
      case SET_USER_DATA:
        return {...state,
          ...action.data}
            default:return state;
}}
 
export const authMe=()=>(dispatch)=>{ 
    return getAuth()
      .then(response=>{
        if(response.data.resultCode===0)
        {
          let {login,id:userId,email}=response.data.data;
          dispatch(setUserData(userId,email,login,true));
        }
    })
}

export const login=(email,password,rememberMe)=>{
  return(dispatch)=>{
    authAPI.login(email,password,rememberMe)
    .then(response=>{
      if(response.data.resultCode===0)
      {
        dispatch(authMe());
      }else
      {
        let message=response.data.messages.length>0?
        response.data.messages[0]:'Some error';
        alert(message);
        dispatch(stopSubmit('login',{_error:message}))
      }
  })
}}

export const logout=()=>(dispatch)=>{
    return authAPI.logout()
    .then(response=>{
      if(response.data.resultCode===0)
      {
        dispatch(setUserData(null,null,null,false));
      }
  })
}

  export let setUserData=(userId,email,login,isAuth)=>({type:SET_USER_DATA,data:{userId,email,login,isAuth}});
  export default authReducer;
import {profileAPI} from '../api/api'
const ADD_POST='ADD-POST';
const SET_USER_PROFILE='SET_USER_PROFILE';
const SET_STATUS='SET_STATUS';

let initialState={
  posts:[
    {id:1,message:'hi , it is my frst post',likesCount:12},
    {id:2,message:'YO ! It is my Second post',likesCount:2}
  ],
  profile:null,
  status:''
}

export const profileReducer=(state=initialState,action)=>{
  switch(action.type)
  {
        case ADD_POST:
        return {
          ...state,
          posts:[...state.posts,{id:5,message:action.post}]};
        
        case SET_USER_PROFILE:
          return{...state,profile:{...action.profile}}

          case SET_STATUS:
            return{...state,status:action.status}

    default:return state;
  }
}
export let addPostActionCreate=(post)=>({type:ADD_POST,post});
export let setUserProfile=(profile)=>({type:SET_USER_PROFILE,profile});
export let setStatus=(status)=>({type:SET_STATUS,status});
export default profileReducer;

export const getOneUser=(userId)=>{
  return(dispatch)=>{
    profileAPI.getUserById(userId).then(response=>{      
      dispatch(setUserProfile(response.data))})
}}

export const getStatus=(userId)=>(dispatch)=>{
  profileAPI.getStatus(userId).then(response=>{
    dispatch(setStatus(response.data))})
}

export const updateStatus=(status)=>(dispatch)=>{
  profileAPI.updateStatus(status).then(response=>{
    if(response.data.resultCode===0)
    dispatch(setStatus(status))})
}
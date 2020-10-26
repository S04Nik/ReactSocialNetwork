import {usersAPI } from "../api/api";
const FOLLOW='FOLLOW';
const UNFOLLOW='UNFOLLOW';
const SET_USERS='SET_USERS';
const SET_PAGE='SET_PAGE';
const SET_TOTAL_USERS_COUNT='SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING='TOGGLE_IS_FETCHING';
let initialState={
  users:[],
  pageSize:5,
  totalUsersCount:0,
  currentPage:1,
  isFetching:false
}

export const usersReducer=(state=initialState,action)=>{
  switch(action.type)
    {
      case FOLLOW:
        return {...state,users:state.users.map(u=>{
          if(u.id===action.userID)
         return {...u,followed:true}
              return u;
      })}
      case UNFOLLOW:
        return {...state,users:state.users.map(u=>{
          if(u.id===action.userID)
          return {...u,followed:false}
          return u;
      })}
        case SET_USERS:
          return{...state,users:action.users}
          case SET_PAGE:
            return{...state,currentPage:action.page}
             case SET_TOTAL_USERS_COUNT:
               return{...state,totalUsersCount:action.count}
               case TOGGLE_IS_FETCHING:
               return{...state,isFetching:action.check}
      default:return state;
    }
}
  export let followSuccess=(userID)=>({type: FOLLOW,userID});
  export let unfollowSuccess=(userID)=>({type:UNFOLLOW,userID});
  export let setUsers=(users)=>({type:SET_USERS,users});
  export let pageActive=(page)=>({type:SET_PAGE,page});
  export let setCountUsers=(count)=>({type:SET_TOTAL_USERS_COUNT,count});
  export let toggleIsFetching=(check)=>({type:TOGGLE_IS_FETCHING,check});
  export default usersReducer;

  export const getUsersThunkCreator=(currentPage,pageSize)=>{
   return (dispatch)=>{
    dispatch(toggleIsFetching(true));
    usersAPI.getUsers(currentPage,pageSize)
    .then(response=>{
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(response.data.items));
      dispatch(pageActive(currentPage));
      dispatch(setCountUsers(response.data.totalCount))});
  }}

  const followUnfollowFlow=async(dispatch,userId,apiMethod,actionCreator)=>{
    dispatch(toggleIsFetching(true));
    let response=await apiMethod(userId);
    if(response.data.resultCode===0)
    {
      dispatch(actionCreator(userId))
    } dispatch(toggleIsFetching(false));
  }

  export const follow=(id)=>{
    return async(dispatch)=>{
     let apiMethod=usersAPI.postFollowers.bind(usersAPI);
     let actionCreator=followSuccess;
     followUnfollowFlow(dispatch,id,apiMethod,actionCreator);
    }
}
  export const unfollow=(id)=>{
    return async(dispatch)=>{
      let apiMethod=usersAPI.deleteFollowers.bind(usersAPI);
      let actionCreator=unfollowSuccess;
      followUnfollowFlow(dispatch,id,apiMethod,actionCreator);
     }
  }
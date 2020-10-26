import { authMe } from "./auth-reducer";
const SET_INITIALIZED='SET_INITIALIZED';
  
let initialState={
  initialized:false
}

export const appReducer=(state=initialState,action)=>{
  switch(action.type)
    {
      case SET_INITIALIZED:
        return {
          ...state,
          initialized:true
        }
        default:return state;
    }}

export let setInitializedSuccess=()=>({type:SET_INITIALIZED});

export const InitializeApp=()=>{
  return(dispatch)=>{
    let promise=dispatch(authMe());
    promise.then(()=>{
    dispatch(setInitializedSuccess());})

}}


export default appReducer;
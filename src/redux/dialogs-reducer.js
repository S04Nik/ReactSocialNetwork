const SEND_NEW_MESSAGE='SEND-NEW-MESSAGE'

let initialState={
  dialogs:[
    {id:1,name:'Stepan'},
    {id:2,name:'Kolia'},
    {id:3,name:'Ivan'},
    {id:4,name:'Nastia'}
],
messages:[
    {id:1, message:'Hi'},
    {id:2, message:'How Are you ??'},
    {id:3, message:'Yo'},
    {id:4, message:'Hello'}
]
}

const dialogsReducer=(state=initialState,action)=>{
  switch(action.type)
  {
    case SEND_NEW_MESSAGE:
    return {
      ...state,
      messages:[...state.messages,{id:5,message:action.message}]};

    default:return state;
  }
}

  export let sendMessageAction=(message)=>{
    return {type:'SEND-NEW-MESSAGE',message}
}

export default dialogsReducer;

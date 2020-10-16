import NewPost from './NewPost';
import {addPostActionCreate,changeNewPostText} from './../../../../redux/profile-reducer '
import { connect } from 'react-redux';


let mapStateToProps=(state)=>{
  return{newPostText:state.profilePage.newPostText}
}

let mapDispatchToProps=(dispatch)=>{
return{
    changeText:(tmp)=>{
      let action=changeNewPostText(tmp);
      dispatch(action);
    },
    addPost:(tmp)=>{
      let action=addPostActionCreate(tmp);
      dispatch(action);
      dispatch(changeNewPostText(''));
    }
}
}

let MyNewPostsContainer=connect(mapStateToProps,mapDispatchToProps)(NewPost);
export default MyNewPostsContainer;
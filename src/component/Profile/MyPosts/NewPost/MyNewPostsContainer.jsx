import NewPost from './NewPost';
import {addPostActionCreate} from './../../../../redux/profile-reducer '
import { connect } from 'react-redux';


let mapStateToProps=(state)=>{
  return{newPostText:state.profilePage.newPostText}
}

let mapDispatchToProps=(dispatch)=>{
return{
    addPost:(newPost)=>{
    dispatch(addPostActionCreate(newPost));
    }
}
}

let MyNewPostsContainer=connect(mapStateToProps,mapDispatchToProps)(NewPost);
export default MyNewPostsContainer;
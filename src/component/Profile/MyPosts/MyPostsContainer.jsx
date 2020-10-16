import React from 'react';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';
import Post from './Post/Post.jsx';


let mapStateToProps=(state)=>{
  let allPosts=state.profilePage.posts.map(p=><Post text={p.message} key={p.id}/>);
  return{
    allPosts:allPosts
  }
}

let MyPostsContainer=connect(mapStateToProps,{})(MyPosts);

export default MyPostsContainer;
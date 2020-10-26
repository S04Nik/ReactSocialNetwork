import React from 'react';
import './App.css';
import Nav from './component/NavBar/Nav';
import ProfileContainer from './component/Profile/ProfileContainer';
import UsersContainer from './component/Users/UsersContainer';
import { Route, BrowserRouter} from 'react-router-dom';
import DialogsContainer from './component/Dialogs/DialogsContainer'
import HeaderContainer from './component/Header/HeaderContainer';
import Login from './component/Login/Login.jsx';
import { connect } from 'react-redux';
import {InitializeApp} from './redux/app-reducer';
import Preloader from './component/Preloader/Preloader';

class App extends React.Component {
  componentDidMount(){
    // время для загрузки async запросов
    this.props.InitializeApp();   
  }
render(){
  if(!this.props.initialized){return <Preloader/>}
  return (
    <BrowserRouter>
     <div className = "App-wrapper" >
    <HeaderContainer/>
    <Nav/>
    <div className='app-wrapper-content'>

    <Route path='/Profile/:userId?' render={()=><ProfileContainer/>}/>

    <Route path='/Dialogs' render={()=><DialogsContainer/>}/>
    
    <Route path='/Users' render={()=><UsersContainer/>}/>

    <Route path='/Login' render={()=><Login/>}/>

    </div>
    </div>
    </BrowserRouter>
  );
}
 
}

const mapStateToProps=(state)=>({
  initialized:state.app.initialized,
})

export default connect(mapStateToProps,{InitializeApp})(App);
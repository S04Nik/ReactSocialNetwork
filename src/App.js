import React from 'react';
import './App.css';
import Nav from './component/NavBar/Nav';
import ProfileContainer from './component/Profile/ProfileContainer';
import UsersContainer from './component/Users/UsersContainer';
import { Route, BrowserRouter } from 'react-router-dom';
import DialogsContainer from './component/Dialogs/DialogsContainer'
import HeaderContainer from './component/Header/HeaderContainer';
import Login from './component/Login/Login.jsx';


const App = (props) => {

  return (
    <BrowserRouter>
     <div className = "App-wrapper" >
    <HeaderContainer/>
    <Nav/>
    <div className='app-wrapper-content'>

    <Route path='/Profile/:userId?' render={()=><ProfileContainer />}/>

    <Route path='/Dialogs' render={()=><DialogsContainer store={props.store}/>}/>
    
    <Route path='/Users' render={()=><UsersContainer/>}/>

    <Route path='/Login' render={()=><Login/>}/>

    </div>
    </div>
    </BrowserRouter>
  );
}


export default App;
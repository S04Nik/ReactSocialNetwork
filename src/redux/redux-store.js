import profileReducer from './profile-reducer ';
import dialogsReducer from './dialogs-reducer';
import sideBarReducer from './sideBar-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form' 
import appReducer from './app-reducer';
const { createStore, combineReducers, applyMiddleware } = require("redux");

const reducers=combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    sideBar:sideBarReducer,
    usersPage:usersReducer,
    auth:authReducer,
    form: formReducer,
    app:appReducer
});

let store=createStore(reducers,applyMiddleware(thunkMiddleware));
window.store=store;
export default store;
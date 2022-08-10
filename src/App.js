import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import LoginTest from './components/Login/LoginTest';
import News from './components/News/News';
import Music from './components/Music/Music.jsx';
import Settings from './components/Settings/Settings';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer'
import React, { useEffect } from 'react';
import {connect, Provider} from 'react-redux';
import {initializeApp} from './redux/appReducer'
import Preloader from './components/common/preloader/preloader';
import store from "./redux/redux-store";
import {withSuspense} from "./components/hoc/withSuspense";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))

const App = (props) => {

  useEffect(() => {
    props.initializeApp()
  })

  if (!props.initialized) {
    return <Preloader />
  }

  return (

    <BrowserRouter>
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/dialogs' render={withSuspense(DialogsContainer)} />
          <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)} />
          <Route path='/users' render = {() => <UsersContainer /> } />
          <Route path='/News' render={News} />
          <Route path='/Music' render={Music} />
          <Route path='/Settings' render={Settings} />
          <Route path='/login' render={LoginTest} />
        </div>
      </div>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

let AppContainer = connect(mapStateToProps, {initializeApp})(App)


let SamuraiJSApp = (props) => {
  return     <Provider store = {store} >
      <AppContainer />
    </Provider>
}

export default SamuraiJSApp

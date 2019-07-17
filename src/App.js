import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Menu from './components/Menu/Menu.jsx';
import Profile from './components/Profile/Profile.jsx';
import DialogsContainer from './components/Dialogs/DialogsContainer.jsx';
import UsersContainer from './components/Users/UsersContainer.jsx';
import {BrowserRouter,Route} from "react-router-dom";


const App = (props) => {

    return (

      <BrowserRouter>
        <div className="wrapper">
          <Header />
          <div class="row" id="contentPage">
            <Menu />
            <div className="content">
              <Route path="/Dialogs" render={ () => <DialogsContainer/>} />
              <Route path="/Profile" render={ () => <Profile/>} />
              <Route path="/Users" render={ () => <UsersContainer/>} />
            </div>
          </div>
        </div>
      </BrowserRouter>

    );

}

export default App;

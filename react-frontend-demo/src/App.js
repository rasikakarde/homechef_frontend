import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListChefComponent from './components/ListUserComponent.jsx';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateChefComponent from './components/CreateChefComponent.jsx';
import ViewChefComponent from './components/ViewChefComponent.jsx';
import AllChefComponent from './components/AllChefComponent';

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {AllChefComponent}></Route>                          
                          <Route path = "/chefs" component = {ListChefComponent}></Route>
                          <Route path = "/add-chef/:chefid" component = {CreateChefComponent}></Route>
                          <Route path = "/view-chef/:chefid" component = {ViewChefComponent}></Route>
                          {/* <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> */}
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;
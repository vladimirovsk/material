import React, {Component} from 'react';
import {connect} from "react-redux";
import './App.css';
import {autoLogin} from "../../store/actions/auth";
import Dashboard from '../Dashboard/Dashboard';
import {Switch, Route, Redirect, withRouter} from "react-router-dom";
import Signin from '../SignIn/SignIn'


import * as PropTypes from "prop-types";

//import SignIn from '../SignIn/SignIn'
//import Title from '../Title/Title'
 

class App extends Component {
  componentDidMount() {
    this.props.autoLogin();
}

  render(){
    let routes = '';

    routes = (
      <Switch>
          <Route exact path="/"  render={()=><Dashboard />}/>
          <Route path="/Signin" exact={true} render={()=><Signin />}/>
          <Redirect to={'/'}/>
      </Switch>)


    return (
      <div className="App">
        <Dashboard />
        {routes}
      </div> 
    )
  }    
}

App.propTypes = {
  t: PropTypes.func.isRequired,
};

function mapStateToProps(state){
  return{
      isAuth: !!state.auth.token
  }
}

function mapDispatchToProps(dispatch){
  return {
      autoLogin: () => dispatch(autoLogin())
  }

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))

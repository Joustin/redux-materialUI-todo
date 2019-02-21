import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.scss';

import Header from "./components/Header";
import Footer from "./components/Footer";
import AddTodo from "./containers/AddTodo";
import VisibleTodoList from "./containers/VisibleTodoList";

import { BrowserRouter as Router, Link } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';

class App extends Component {
  render() {
    return (
      <React.Fragment>

        <CssBaseline />
        
        <Router>
          
          <div className="App">

            <Header />
            
            {/* Hello, here's the stuff
            <br />
            <Link to={''} >
              Test
            </Link> */}


            <AddTodo />
            <VisibleTodoList />
            <Footer />

          </div>

        </Router>
      </React.Fragment>

    );
  }
}

export default App;

import React from 'react';
import Blog from './pages/Blog';
import Home from './pages/Home';
import './App.css';
import { Switch, Route, Redirect } from 'react-router';

const App = () => {
  return (
    <div className='container'>
    <Switch>
    <Route path='/' exact component={Home} />
        <Route path='/blog/:id' component={Blog} />
        <Redirect to='/' />
    </Switch>

    </div>
  );
}

export default App;
import React from 'react';
import{BrowserRouter, Route, Switch} from 'react-router-dom'
import App from './App'
import Contact from './pages/Contact'
import About from './pages/About'


export default () => {
return (
<BrowserRouter>
<Switch>
<Route exact path='/' component={App}/>
<Route path='/about' component={About}/>
<Route path='/contact' component={Contact}/>
</Switch>
</BrowserRouter>
);
};
import React from 'react'
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'
import Home from './Pages/Home'
import Orders from './Pages/Orders'
import NavBar from './Components/NavBar'
import Product from './Pages/Product'

const NotFound = () => (
  <div>
    Error 404 Not Found
  </div>
)

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path='/' component={NavBar}/>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/orders' component={Orders}/>
            <Route path='/product' component={Product}/>
            <Route component={NotFound}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

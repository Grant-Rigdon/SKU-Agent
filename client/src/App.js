import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import AppBar from './components/AppBar'
import Login from './pages/Login'
import Register from './pages/Register'
import NoMatch from './pages/NoMatch'
import Home from './pages/Home'
import Queue from './pages/Queue'
import ItemList from './pages/ItemList'
import NewSku from './pages/NewSku'

function App() {
    return (
        <Router>
            <div>
                <AppBar />
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/Login" component={Login} />
                    <Route exact path="/Register" component={Register} />
                    <Route exact path="/Home" component={Home} />
                    <Route exact path="/ItemList" component={ItemList} />
                    <Route exact path="/NewSKU" component={NewSku} />
                    <Route exact path="/Queue" component={Queue} />
                    <Route component={NoMatch} />
                </Switch>
            </div>
        </Router>
    )
}

export default App
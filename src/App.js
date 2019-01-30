import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import AppBar from './components/AppBar'
import Login from './components/Login'
import Register from './components/Register'
import Accordion from './components/Accordion'
import ItemCard from './components/ItemCard'
import ItemModal from './components/Modal'
function App() {
    return (
        <div>
            <AppBar />
            Hello World
            <ItemModal />
            <ItemCard />
            <Login />
            <Register />
            <Accordion />
        </div>
    )
}

export default App
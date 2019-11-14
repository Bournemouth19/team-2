import React from 'react'
import {Route} from 'react-router-dom'
import Login from './components/login'
import HomeView from './components/HomeView'
import RegistrationForm from './components/signup'

const BaseRouter = () => (
    <div>
        <Route exact path='/' component={HomeView} />
        <Route exact path='/login/' component={Login} />
        <Route exact path='/signup/' component={RegistrationForm} />
    </div>
);

export default BaseRouter
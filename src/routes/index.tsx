import * as React from 'react'
import './App.css';

import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom'

import { useKeycloak } from '@react-keycloak/web'

import HomePage from '../pages/Home'
import LoginPage from '../pages/LoginPage'

import { PrivateRoute } from './utils'

export const AppRouter = () => {
  const { initialized } = useKeycloak()

  if (!initialized) {
    return (<div> </div>)
  }

  return (
    <Router>
      <Redirect from="/" to="/home" />
      <PrivateRoute path="/home" component={HomePage} />
      <Route path="/login" component={LoginPage} />
    </Router>
  )
}
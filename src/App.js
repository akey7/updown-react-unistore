import React from 'react'
import './App.css'
import { actions } from './store-and-actions'
import { connect } from 'unistore/react'
import NumberDisplay from './number-display-component'
import UpDown from './updown-component'

const App = ({ count, increment, decrement }) => (
  <div className="App">
    <NumberDisplay />
    <UpDown />
  </div>
)

export default connect('count', actions)(App)

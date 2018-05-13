import React from 'react'
import './App.css'
import { actions } from './store-and-actions'
import { connect } from 'unistore/react'
import NumberDisplay from './number-display-component'

const App = ({ count, increment, decrement }) => (
  <div className="App">
    <NumberDisplay />
    <div>
      <button onClick={ increment }>Up</button>
      <button onClick={ decrement }>Down</button>
    </div>
  </div>
)

export default connect('count', actions)(App)

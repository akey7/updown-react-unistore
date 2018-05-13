import React from 'react'
import './App.css'
import { actions } from './store-and-actions'
import { connect } from 'unistore/react'

const App = ({ count, increment, decrement }) => (
  <div className="App">
    <h2>Number! { count }</h2>
    <div>
      <button onClick={ increment }>Up</button>
      <button onClick={ decrement }>Down</button>
    </div>
  </div>
)

export default connect('count', actions)(App)

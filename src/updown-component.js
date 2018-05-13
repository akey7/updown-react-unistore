import React from 'react'
import { connect } from 'unistore/react'
import { actions } from './store-and-actions'

const UpDown = ({ increment, decrement }) => (
  <div>
    <button onClick={ increment }>Up</button>
    <button onClick={ decrement }>Down</button>
  </div>
)

export default connect(null, actions)(UpDown)

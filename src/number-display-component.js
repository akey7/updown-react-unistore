import React from 'react'
import { connect } from 'unistore/react'

const NumberDisplay = ({ count }) => <h2>Number! { count }</h2>

export default connect('count')(NumberDisplay)

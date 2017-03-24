require('./stylesheet.scss')

import React from 'react'
import ReactDOM from 'react-dom'
import DemoPage from './sections/DemoPage'

ReactDOM.render((
  <DemoPage />
), document.getElementById('component'))

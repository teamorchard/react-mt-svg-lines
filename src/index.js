require( './stylesheet.scss' );

import React from 'react';
import ReactDOM from 'react-dom';
import ComponentDemo from './ComponentDemo';

ReactDOM.render((
  <ComponentDemo />
), document.getElementById( 'component' ) );

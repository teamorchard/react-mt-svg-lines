import React from 'react';

import MtSvgLines from './MtSvgLines';
// import MtSvgLines from './../../dist/';

import SvgCheckmark from './SvgCheckmark';
import SvgSignature from './SvgSignature';
import SvgChart from './SvgChart';
import SvgSpinner from './SvgSpinner';

export default class DemoPage extends React.Component {
  render() {
    return (
      <div style={ styles.wrapper }>
        <h2 style={ styles.title }>demo: MtSvgLines</h2>

        <div style={ styles.column }>

          <MtSvgLines
            animate={ String( Date.now() ) }
          >
            <SvgCheckmark />
          </MtSvgLines>
          <p style={ styles.caption }>
            default props
          </p>
        </div>

        <div style={ styles.column }>
          <MtSvgLines
            animate={ String( Date.now() ) }
            duration={ 2000 }
            stagger={ 100 }
            timing="linear"
          >
            <SvgSignature />
          </MtSvgLines>
          <p style={ styles.caption }>
            stagger 100%<br/>
            linear
          </p>
        </div>

        <div style={ styles.column }>
          <MtSvgLines
            animate={ String( Date.now() ) }
            duration={ 4000 }
            stagger={ 50 }
            timing="ease-in"
          >
            <SvgChart />
          </MtSvgLines>
          <p style={ styles.caption }>
            stagger 50%<br/>
            ease-in
          </p>
        </div>

        <div style={ styles.column }>
          <MtSvgLines
            animate={ String( Date.now() ) }
            duration={ 2000 }
            stagger={ 20 }
            timing="linear"
            options="alternate-reverse both infinite"
          >
            <SvgSpinner />
          </MtSvgLines>
          <p style={ styles.caption }>
            stagger 20%<br/>
            linear<br/>
            alternate-reverse both infinite
          </p>
        </div>

      </div>
    );
  }
}

const styles = {
  wrapper: {
    maxWidth: '720px',
    margin:   '30px auto 0 auto'
  },
  title: {
    width:         '100%',
    paddingBottom: '10px',
    color:         '#888',
    borderBottom:  '1px dotted #888'
  },
  column: {
    width:  '25%',
    float:  'left'
  },
  caption: {
    textAlign: 'center',
    color:     '#4C6A98'
  }
};

import React from 'react';

import MtSvgLines from './MtSvgLines';
// import MtSvgLines from './../../dist/';

import SvgCheckmark from './SvgCheckmark';
import SvgSignature from './SvgSignature';
import SvgChart from './SvgChart';
import SvgSpinner from './SvgSpinner';

export default class DemoPage extends React.Component {
  constructor( props ) {
    super( props );
    
    this.state = {
      triggerCheckAnim:   false,
      triggerSigAnim:     false,
      triggerChartAnim:   false,
      triggerSpinnerAnim: false
    };
  }
  
  render() {
    const { triggerCheckAnim, triggerSigAnim, triggerChartAnim, triggerSpinnerAnim } = this.state;
    
    return (
      <div style={ styles.wrapper }>
        <h2 style={ styles.title }>demo: MtSvgLines</h2>

        <div style={ styles.column }>

          <MtSvgLines
            animate={ triggerCheckAnim }
          >
            <SvgCheckmark />
          </MtSvgLines>

          <a style={ styles.link } 
            href="#" 
            data-trigger="triggerCheckAnim" 
            onClick={ this._handleAnimateClick }
          >
            animate &raquo;
          </a>
          <p style={ styles.caption }>
            default props
          </p>
        </div>

        <div style={ styles.column }>
          
          <MtSvgLines
            animate={ triggerSigAnim }
            duration={ 2000 }
            stagger={ 100 }
            timing="linear"
          >
            <SvgSignature />
          </MtSvgLines>
          
          <a style={ styles.link } 
            href="#" 
            data-trigger="triggerSigAnim" 
            onClick={ this._handleAnimateClick }
          >
            animate &raquo;
          </a>
          <p style={ styles.caption }>
            stagger 100%<br/>
            linear
          </p>
        </div>

        <div style={ styles.column }>
          <MtSvgLines
            animate={ triggerChartAnim }
            duration={ 4000 }
            stagger={ 50 }
            timing="ease-in"
          >
            <SvgChart />
          </MtSvgLines>
          
          <a style={ styles.link } 
            href="#" 
            data-trigger="triggerChartAnim" 
            onClick={ this._handleAnimateClick }
          >
            animate &raquo;
          </a>
          <p style={ styles.caption }>
            stagger 50%<br/>
            ease-in
          </p>
        </div>

        <div style={ styles.column }>
          <MtSvgLines
            animate={ triggerSpinnerAnim }
            duration={ 2000 }
            stagger={ 20 }
            timing="linear"
            options="6 alternate-reverse both"
          >
            <SvgSpinner />
          </MtSvgLines>
          
          <a style={ styles.link } 
            href="#" 
            data-trigger="triggerSpinnerAnim" 
            onClick={ this._handleAnimateClick }
          >
            animate &raquo;
          </a>
          <p style={ styles.caption }>
            stagger 20%<br/>
            linear<br/>
            alternate-reverse both infinite
          </p>
        </div>

      </div>
    );
  }
  
  // when any "animate &raquo;" link is clicked, set the corresponding 'animate' prop to trigger it
  _handleAnimateClick = ( e ) => {
    e.preventDefault();
    
    const triggerKey = e.target.dataset.trigger;    // determine which clicked from its data attr
    const triggerVal = String( Date.now() );        // generate a unique string to pass to 'animate'    
    
    this.setState( { [ triggerKey ]: triggerVal } ); 
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
    width:     '25%',
    float:     'left',
    textAlign: 'center'
  },
  link: {
    fontSize:       '12px',
    textDecoration: 'none',
    padding:        '0 3px',
    color:          '#E52029',
    border:         '1px solid #E52029',
    borderRadius:   '3px'
  },
  caption: {
    color: '#4C6A98'
  }
};

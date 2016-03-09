import React, { PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { shortUID, clamp, trimFloat } from '../utils/utils.js';


export default class MtSvgLines extends React.Component {

  static propTypes = {
    className: PropTypes.string,            // custom CSS class (applied to svg elem)
    animate:   PropTypes.oneOfType([        // external animation trigger
      PropTypes.string,                     // - pass a unique string or true to (re)start animation
      PropTypes.number,                     // - pass number to specify delay before animation begins (ms)
      PropTypes.bool                        // - pass false (or omit) to draw static SVG (no animation)
    ]),
    duration:  PropTypes.number,            // total anim duration (ms)
    stagger:   PropTypes.number,            // delay between start times of each path (percentage)
    timing:    React.PropTypes.oneOf([      // easing type
      'ease',
      'ease-in',
      'ease-out',
      'ease-in-out',
      'linear',
      'step-start',
      'step-end'
    ]),
    options:   PropTypes.string             // iteration-count || direction || fill-mode (perhaps even play-state )
                                            // https://developer.mozilla.org/en-US/docs/Web/CSS/animation
  };

  // defaults
  static defaultProps = {
    className: 'mt-svg',
    animate:   false,
    duration:  1000,
    stagger:   0,
    timing:    'ease',
    options:   'forwards'
  };


  constructor( props ) {
    super( props );

    // classKey is a unique class name, used as internal anim "trigger" (re-generated each time anim is to run)
    this.state = {
      classKey: this._getUniqueClassKey(),
      css:      ''
    };

    this._lastAnimate  = null;
    this._lastClassKey = null;
  }


  componentWillReceiveProps( nextProps ) {
    const { animate } = nextProps;

    if ( animate !== this._lastAnimate ) {
      this._lastAnimate = animate;
      this.setState( { classKey: this._getUniqueClassKey() } );
    }
  }


  render() {
    const { className, animate, duration, stagger, timing, children, ...props } = this.props;
    const { classKey, css } = this.state;

    return (
      <span
        ref={ ( c ) => this._svg = c }
        className={ `${ className } ${ classKey }` }
        { ...props }
      >
        <style>
          { css }
        </style>

        { children }
      </span>
    );
  }


  componentDidMount() {
    this._refreshCSS();
  }


  componentDidUpdate() {
    this._refreshCSS();
  }


  // ------------------------------------------------------


  // (re)generate CSS only if 1) the 'animate' prop is truthy, AND 2) the internal 'classKey' changed
  // the CSS refresh in the DOM kicks off the animation
  _refreshCSS() {
    // helper: return an array containing lengths of all path elems inside the SVG
    function getPathLengths() {

      const pathElems = findDOMNode( this._svg )
        .getElementsByTagName( 'svg' )[0]
        .querySelectorAll( 'path' ) || [];

      return [].map.call( pathElems, ( path ) => {
        // get path length
        let length = trimFloat( path.getTotalLength() );

        // check paths for data-mt="skip" and set those to zero length
        // NOTE: path.attributes is an obj with indexed keys, so we must iterate over them
        // { '0': { name: 'd', value: 'M37.063' }, '1': { name: 'data-mt', value: 'skip' }, ... }
        for( let key in path.attributes ) {
          const { name, value } = path.attributes[ key ];
          if ( name === 'data-mt' && value === 'skip' ) {
            length = 0;
          }
        }

        return length;
      });
    }

    // helper: return CSS for a single path elem (using classKey and path index as the CSS selector)
    function getPathCSS( index, length, startDelay, staggerDelay, duration ) {
      const { classKey }          = this.state;
      const { timing, options } = this.props;

      const keysId     = `${ classKey }-${ index + 1 }`;
      const totalDelay = length ? trimFloat( ( startDelay + staggerDelay * index ) / 1000 ) : 0;

      duration = duration ? trimFloat( duration / 1000 ) : 0;

      return `
        @keyframes ${ keysId } {
          0%   { stroke-dashoffset: ${ length }; opacity: 1; }
          100% { stroke-dashoffset: 0; opacity: 1; }
        }
        .${ classKey } path:nth-of-type( ${ index + 1 } ) {
          opacity:                 0.01;
          stroke-dasharray:        ${ length };
          stroke-dashoffset:       ${ length };
          -webkit-animation:       ${ keysId } ${ duration }s ${ timing } ${ options };
          animation:               ${ keysId } ${ duration }s ${ timing } ${ options };
          -webkit-animation-delay: ${ totalDelay }s;
          animation-delay:         ${ totalDelay }s;
        }
      `;
    }

    const { animate, duration, stagger } = this.props;
    const { classKey }  = this.state;

    // check if 'animate' prop is truthy AND internal classKey has changed
    if ( animate && classKey !== this._lastClassKey ) {
      let css ='';
      
      if ( animate === 'hide' ) {
        // if 'hide' passed, set the entire container trasparent
        css=`.${ classKey } { opacity: 0; }`;
        
      } else {
        // otherwise, animate away..
        // 1) determine number of path elems in svg
        const pathLenghts  = getPathLengths.call( this );
        const pathQty      = pathLenghts.length || 1;

        // 2) calc all timing values
        const startDelay       = typeof animate === 'number' ? animate : 0;   // if numeric, treat as delay (ms)
        const staggerMult      = clamp( stagger, 0, 100 ) / 100;              // convert percentage to 0-1
        const pathStaggerDelay = ( stagger > 0 ? duration/pathQty * staggerMult : 0 );
        const pathDrawDuration = ( stagger > 0 ? duration/pathQty * ( 2 - staggerMult ) : duration );

        // 3) concat generated CSS, one path at a time..
        pathLenghts.forEach( ( length, index ) => {
          css += getPathCSS.call( this, index, length, startDelay, pathStaggerDelay, pathDrawDuration );
        });
      }

      // remember UID
      this._lastClassKey = classKey;

      // set state (re-render)
      this.setState({ classKey, css });
    }

  }

  _getUniqueClassKey() {
    return `mt-${ shortUID() }`;
  }

}

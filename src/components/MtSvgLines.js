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
    stagger:   PropTypes.number,            // timing spread between lines (percentage)
    timing:    React.PropTypes.oneOf([      // easing type
      'linear',
      'ease',
      'ease-in',
      'ease-out',
      'ease-in-out',
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

    // animId is used to: 1) generate unique CSS class names, 2) and as an internal anim "trigger"
    this.state = {
      animId: this._getUniqueAnimId(),
      css:    ''
    };

    this._lastAnimate = null;
    this._lastAnimId  = null;
  }


  componentWillReceiveProps( nextProps ) {
    const { animate } = nextProps;

    if ( animate !== this._lastAnimate ) {
      this._lastAnimate = animate;
      this.setState({ animId: this._getUniqueAnimId() });
    }
  }


  render() {
    const { className, animate, duration, stagger, timing, children, ...props } = this.props;
    const { animId, css } = this.state;

    return (
      <span
        ref={ ( c ) => this._svg = c }
        className={ `${ className } ${ animId }` }
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


  // (re)generate CSS only if 1) the 'animate' prop is truthy, AND 2) the internal 'animId' changed
  // the CSS refresh in the DOM re-starts the animation (upon re-render)
  _refreshCSS() {
    // helper: return an array containing lengths of all path elems inside the svg
    function getPathLengths() {

      const pathElems = findDOMNode( this._svg )
        .getElementsByTagName( 'svg' )[0]
        .querySelectorAll( 'path' ) || [];

      return [].map.call( pathElems, ( path ) => {
        // get path length
        let length = trimFloat( path.getTotalLength() );

        // check paths for data-mt="skip" and set those to zero length
        // NOTE: path.attributes is an obj with indexed keys, so we must iterate over them..
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

    // helper: return CSS for a single path elem (using index for CSS selector and unique anim key name)
    function getPathCSS( index, length, startDelay, staggerDelay, duration ) {
      const { animId }          = this.state;
      const { timing, options } = this.props;

      const keysId     = `${ animId }-${ index + 1 }`;
      const totalDelay = length ? trimFloat( ( startDelay + staggerDelay * index ) / 1000 ) : 0;

      duration = duration ? trimFloat( duration / 1000 ) : 0;

      return `
        @keyframes ${ keysId } {
          0%   { stroke-dashoffset: ${ length }; opacity: 1; }
          100% { stroke-dashoffset: 0; opacity: 1; }
        }
        .${ animId } path:nth-of-type( ${ index + 1 } ) {
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
    const { animId }  = this.state;

    if ( animate && animId !== this._lastAnimId ) {
      // determine number of path elems in svg
      const pathLenghts  = getPathLengths.call( this );
      const pathQty      = pathLenghts.length || 1;

      // calc all timing values
      const startDelay       = typeof animate === 'number' ? animate : 0;   // if numeric, treat as delay (ms)
      const staggerMult      = clamp( stagger, 0, 100 ) / 100;              // convert percentage to 0-1
      const pathStaggerDelay = ( stagger > 0 ? duration/pathQty * staggerMult : 0 );
      const pathDrawDuration = ( stagger > 0 ? duration/pathQty * ( 2 - staggerMult ) : duration );

      // concat generated CSS, one path at a time..
      let css = '';
      pathLenghts.forEach( ( length, index ) => {
        css += getPathCSS.call( this, index, length, startDelay, pathStaggerDelay, pathDrawDuration );
      });

      // remember curent UID
      this._lastAnimId = animId;

      // set state (re-render)
      this.setState({
        animId,
        css
      });
    }

  }

  _getUniqueAnimId() {
    return `mt-${ shortUID() }`;
  }

}

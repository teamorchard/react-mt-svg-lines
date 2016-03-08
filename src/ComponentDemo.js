import React from 'react';
import MtSvgLines from './MtSvgLines';

export default class ComponentDemo extends React.Component {
  render() {
    return (
      <div style={ styles.wrapper }>
        <h2 style={ styles.title }>demo: MtSvgLines</h2>

        <div style={ styles.column }>

          <MtSvgLines
            animate={ String( Date.now() ) }
            duration={ 250 }
            timing="ease-in"
          >
            <svg viewBox="0 0 100 100">
              <g fill="none">
                <circle fill="#3EB735" cx="50" cy="50" r="45"/>
                <path stroke="#FFF" strokeWidth="12" d="M20.8,51c0,0,20.8,18.2,21.5,18.2c0.6,0,33.3-38.5,33.3-38.5"/>
              </g>
            </svg>
          </MtSvgLines>
        </div>

        <div style={ styles.column }>
          <MtSvgLines
            animate={ String( Date.now() ) }
            duration={ 2000 }
            stagger={ 80 }
          >
            <svg viewBox="0 0 100 100">
              <g fill="none" strokeWidth="6" strokeLinecap="round" strokeMiterlimit="10">
                <path stroke="#FDD65A" d="M56.8 95c-11.6 0-23-4.6-31.3-12.7-8.2-8-13.2-19-13.6-30.4-.5-11.6 3.6-23 11.3-31.7 7.6-8.5 18.3-14 29.6-15C65.8 4 79 8.7 88.3 17.8"/>
                <path stroke="#FA902C" d="M56.8 88.7c-18.2 0-34.3-13.2-37.9-31-1.8-8.9-.3-18.4 4.1-26.3 4.2-7.5 10.9-13.5 18.8-16.9 9.5-4 20.6-4 30.1 0"/>
                <path stroke="#E02837" d="M56.8 82.2c-13.3 0-25.5-8.5-30.2-21-4.7-12.7-.8-27.4 9.6-36 5.7-4.8 13.1-7.4 20.5-7.4"/>
                <path stroke="#1BA9B1" d="M56.8 75.3c-9.1 0-17.7-5.1-22.1-13-4.5-8.2-4.1-18.5 1.1-26.3 2.7-4.1 6.7-7.4 11.2-9.3"/>
                <path stroke="#0F5B8A" d="M56.8 68.4c-7.3 0-14.1-4.5-16.9-11.2-2.9-6.9-1.4-15 3.9-20.2"/>
              </g>
            </svg>
          </MtSvgLines>
        </div>

        <div style={ styles.column }>
          <MtSvgLines
            animate={ String( Date.now() ) }
            duration={ 2000 }
            stagger={ 80 }
          >
            <svg viewBox="0 0 100 100">
              <g fill="none" strokeMiterlimit="10">
                <path stroke="#394046" strokeWidth="4" d="M5 7.2h90v85.6H5z"/>
                <path stroke="#394046" strokeWidth=".913" d="M22.7 7.2v85.3M40.8 7.3v85.3M58.8 7.4v85.3M76.9 7.1v85.3M5.2 77.4h89.5M5.3 59.3h89.5M5.4 41.2h89.5M5.1 23.2h89.5"/>
                <g stroke="#1BA9B1" strokeWidth="3">
                  <circle cx="27.6" cy="78.3" r="3.6"/>
                  <circle cx="47.3" cy="56.4" r="3.6"/>
                  <circle cx="61.8" cy="69.6" r="3.6"/>
                  <circle cx="85.3" cy="63.3" r="3.6"/>
                </g>
                <path stroke="#1BA9B1" strokeWidth="3" d="M29.1 75.3l15.7-16.4M49.5 58.8l9.1 9.9M65.1 68.4l16.7-4.7"/>

                <g stroke="#E02837" strokeWidth="3">
                  <circle cx="16.9" cy="62.6" r="3.6"/>
                  <circle cx="36.1" cy="36.6" r="3.6"/>
                  <circle cx="62" cy="42.8" r="3.6"/>
                  <circle cx="80.2" cy="21.3" r="3.6"/>
                </g>
                <path stroke="#E02837" strokeWidth="3" d="M18.9 59.7l15.1-20M39.5 36.1L59.1 41M64.4 40.3l13-17"/>

              </g>
            </svg>
          </MtSvgLines>
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
    width:        '100%',
    paddingBottom: '10px',
    borderBottom: '1px dotted #DDD'
  },
  column: {
    width:  '25%',
    float:  'left',
    border: '1px solid #DDD'
  }
};

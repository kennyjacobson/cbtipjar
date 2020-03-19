import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div className='GoogleMarker'><img src='/greenhourmarker.png'></img>{text}</div>;
 
class GoogleMap extends Component {
  static defaultProps = {
    center: {
      lat: 38.869776, 
      lng: -106.984508
    },
    zoom: 18
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100%', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCs4v63cSMOS79f1akvu4iarF3Qx6J2cCg' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
            
          <AnyReactComponent
            lat={38.8699542}
            lng={-106.987722}
            text="Coal Creek Grill"
          />
          <AnyReactComponent
            lat={38.8696129}
            lng={-106.9870711}
            text="The Last Steep Bar & Grill"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default GoogleMap;
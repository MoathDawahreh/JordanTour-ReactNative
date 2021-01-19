import React, { Component } from 'react';
import { Button } from 'react-native';
import openMap from 'react-native-open-maps';
 
export default class Map extends Component {
  Petra() {
    openMap({ latitude:30.3284272, longitude: 35.4442824 });
  }
  
  render() {
    return (
      <Button
        color={'#bdc3c7'}
        onPress={this.Petra}
        title="Show the location on the map" />
    );
  }
}

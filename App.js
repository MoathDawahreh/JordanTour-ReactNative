import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './src/AppNavigator'
// import TabNavigator from './src/TabNav.js';
import { AsyncStorage } from "react-native"

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      check:false
     
  }
    
  }




  // _retrieveData = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem('User');
  //     const parsed= JSON.parse(value)
  //   //   alert(parsed.email)
  //   // this.setState({check:parsed.isUserLoggedIn})


  //     if (value !== null) {
  //       // We have data!!
  //       // alert(parsed.isUserLoggedIn)
  //       this.setState({check:parsed.isUserLoggedIn})
  //       alert(this.state.check)

  //   }
  //    } catch (error) {
  //      // Error retrieving data
  //      alert("erorrrr")
  //    }
  // }

  


  render() {
  //  this._retrieveData() 

  //  alert(this.state.check)



    // if(th==="Admin")
    // return (this.props.navigation.navigate("TourList"))
    // else 
    return (
      
      <Navigator/>
    )
  }


  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

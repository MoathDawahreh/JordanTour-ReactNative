
import React from 'react'
import {View,Text} from 'react-native'
import {TouchableOpacity,Dimensions} from 'react-native';
import { AsyncStorage } from "react-native"

export default class TourDetails extends React.Component{
    _retrieveData = async () => {
        try {
          const value = await AsyncStorage.getItem('User');
          const parsed= JSON.parse(value)
        //   alert(parsed.email)

          if (value !== null) {
            // We have data!!
            alert(parsed.isUserLoggedIn)
        }
         } catch (error) {
           // Error retrieving data
           alert("erorrrr")
         }
      }
render(){
    return(  
        <TouchableOpacity onPress={this._retrieveData}>
        <Text>click</Text>
            
        </TouchableOpacity>
        // <Text style={{fontSize:18,fontWeight:'600'}}>This is the tour  details screen </Text>
        )
}

}
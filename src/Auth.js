import React from 'react';
import {TouchableOpacity,Dimensions,Text} from 'react-native';
//import { AsyncStorage } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';



_storeData = async () => {
    const obj={
        email: this.props.Email,
        phoneNum: this.props.PhoneNumber,
    }
    try {
      await AsyncStorage.setItem('User', JSON.stringify(obj));
    } catch (error) {
      // Error saving data
    }
  }

  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('User');
      const parsed= JSON.parse(value)
      if (value !== null) {
        // We have data!!
        console.log(value.email);
      }
     } catch (error) {
       // Error retrieving data
     }
  }
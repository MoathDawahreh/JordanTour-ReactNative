import React from 'react';
import {TouchableOpacity,Dimensions,Text} from 'react-native';
import { AsyncStorage } from "react-native"

const width=Dimensions.get('window').width
const height = Dimensions.get('window').height

export default class RegistrationBtn extends React.Component{

    constructor(props){
        super(props)
        // this.state={
            
        //     isUserLoggedIn:false
        // }
    }


    
    



    


    Register=()=>{

        this._storeData()
        



        if(this.props.Email== "Admin" && this.props.PhoneNumber=="123")
        {
            // alert("Pass")
           this.props.navigation.navigate("TourList")
        }
        else 
        {
            alert("failure")
        }
    }

    render(){
        // alert(this.state.isUserLoggedIn)
        return(
            <TouchableOpacity 
            style={{ width:0.9*width,height:0.1*height,backgroundColor:"black",flexDirection:'row',justifyContent:'center',alignItems:'center'}}
            onPress={this.Register}>
            <Text style={{color:"white",fontWeight:'600',fontSize:18,}}>ٌRegister</Text>
            </TouchableOpacity>
            )
    }

    _storeData = async () => {
        const obj={
            email: this.props.Email,
            phoneNum: this.props.PhoneNumber,
            isUserLoggedIn:true,
            
        }
        try {
          await AsyncStorage.setItem('User', JSON.stringify(obj));
          alert("data saved")
        } catch (error) {
          // Error saving data
        }
      }

    //   _retrieveData = async () => {
    //     try {
    //       const value = await AsyncStorage.getItem('User');
    //       const parsed= JSON.parse(value)
    //     //   alert(parsed.email)

    //       if (value !== null) {
    //         // We have data!!
    //         // alert(value)
    //       }
    //      } catch (error) {
    //        // Error retrieving data
    //        alert("erorrrr")
    //      }
    //   }


}

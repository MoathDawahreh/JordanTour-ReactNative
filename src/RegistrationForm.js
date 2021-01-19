import React from 'react'
import {KeyboardAvoidingView} from 'react-native'
import Email from './Email'
import PhoneNumber from './PhoneNumber'
import RegistrationBtn from './RegistrationBtn'


export default class RegistrationForm extends React.Component{

    constructor(props){
        super(props)
        this.state={
            EmailValue:"",
            PhoneNumberValue:"",
        }
    }

    EmailChanged=(value)=>{
        this.setState({EmailValue:value})

    }

    PhoneNumberCnanged=(value)=>{
        this.setState({PhoneNumberValue:value})

    }


      

    render(){
        // console.log("hellooo",this.state.EmailValue)

        return(
        <KeyboardAvoidingView style={{flex:1,justifyContent:'center',alignItems:"center"}} behavior="padding" enabled>
        <Email ParentEmailChanged={this.EmailChanged} />
        <PhoneNumber ParentPhoneNumberChanged={this.PhoneNumberCnanged}/>
        <RegistrationBtn navigation={this.props.navigation} Email={this.state.EmailValue} PhoneNumber={this.state.PhoneNumberValue} isUserLoggedIn={this.state.isUserLoggedIn} />
        </KeyboardAvoidingView>
        )
    }



}


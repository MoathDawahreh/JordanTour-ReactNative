import { createStackNavigator,createAppContainer,createDrawerNavigator} from 'react-navigation'
import RegistrationForm from './RegistrationForm'
import TourList from './TourList'
import TourDetails from './TourDetails'
import TabNav from './TabNav'
import { createBottomTabNavigator } from 'react-navigation';
import Profile from './Profile'
import DrawerNav from './DrawerNav'
import DrawerBtn from './DrawerBtn'
import React from 'react'



// const navigator = createDrawerNavigator({
//     Profile:{
//         screen: Profile
//     },
//     Test: TourDetails

// })


const navigator = createStackNavigator({
    Registration:{
        screen:RegistrationForm
    },

    TourList:{
        screen:DrawerNav,
        navigationOptions:({navigation})=>({
            titel:'drawer',
            headerLeft:<DrawerBtn navigation={navigation}/>

        })

    },
    TourDetails:{
        screen:TabNav
    }

   
    
},
{
initialRouteName:"Registration"
})

export default createAppContainer(navigator)

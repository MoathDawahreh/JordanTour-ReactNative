import { DrawerNavigator,createAppContainer,createDrawerNavigator} from 'react-navigation'
import Profile from './Profile'
import TourDetails from './TourDetails'
import TourList from './TourList'


const DrawerNav = createDrawerNavigator({
    Home:{
        screen: TourList,
       
    },
    Profile:{
        screen: Profile,
       
    },
    Test: TourDetails

})


export default DrawerNav

// export default createAppContainer(DrawerNav)

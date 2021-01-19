import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import bookingTrip from './bookingTrip'
import services from './services'
import Map from './Map'




const TabNavigator = createBottomTabNavigator({
    Services: services,
    Trip: bookingTrip,
    Map:Map
  });
  
  export default createAppContainer(TabNavigator);
   
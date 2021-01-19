import React from 'react'
import {TouchableOpacity, Image, StyleSheet} from 'react-native'


 const DrawerBtn =({navigation})=>(

    <TouchableOpacity
        style={styles.wrapper}
        onPress={()=> navigation.openDrawer() }>
        <Image
         source={require('./resources/Drawer-icon.png')}
         style={styles.icon}


        />

    </TouchableOpacity>
)


const styles = StyleSheet.create({
    wrapper:{
        marginLeft:10

    },
    icon: {
        width:24,
        height:24,
        // backgroundColor:'#a9a9a9'
    },
  });

  export default DrawerBtn
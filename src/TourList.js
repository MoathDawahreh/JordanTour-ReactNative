import React from 'react';
import { StyleSheet, Text, View, Image,FlatList } from 'react-native';
import TourItem from './TourItem';
import DrawerBtn from './DrawerBtn'


const ListData=[
  {
   key:1,
   Name:"Jerash",
   Description:"Jerash disc ",
   PhotoURL:'https://greenglobaltravel.com/wp-content/uploads/IMG_9462.jpg'
  //  PhotoURL:"./resources/Jerash.jpg"

  },
  {
      key:2,
      Name:"Ajloun-Castle",
      Description:"Ajloun castle disc",
      PhotoURL:'http://www.arabiyonana.com/wp-content/uploads/2017/10/ajloun-castle.jpg'

      // PhotoURL:"./resources/Ajloun-Castle.jpg"
     },
     {
      key:3,
      Name:"Mount Nebo",
      Description:"Nebo disc. ",
      PhotoURL:'https://ssl.c.photoshelter.com/img-get/I0000K0C_sepbWOM/s/750/07-12-08-Mt-Nebo-DSC-3718.jpg'

      // PhotoURL:"./resources/MountNebo.jpg"
     },
     {
      key:4,
      Name:"Petra",
      Description:"peter disc.",
      // PhotoURL:"./resources/Petra.jpg"
            PhotoURL:'https://www.nationalgeographic.com/content/dam/archaeologyandhistory/rights-exempt/history-magazine/2016/01-02/petra/Petra-opener.ngsversion.1518170432213.adapt.1900.1.jpg'

     },
  
  
  ]



export default class TourList extends React.Component {
  render(){

    return(
        <FlatList  
        data={ListData}
        renderItem={({item})=>{
        return(
          <TourItem navigation={this.props.navigation} Item={item} />)
        }}>
        </FlatList>
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
})

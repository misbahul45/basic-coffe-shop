import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import image1 from '@/assets/images/image-1.jpg'
const home = () => {
  return (
    <View style={style.container}>
      <ImageBackground
        source={image1}
        resizeMode='cover'
        style={style.image}
      >
        <Text style={style.text}>Coffe Shop</Text>
      </ImageBackground>
    </View>
  )
}

export default home

const style=StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
  },
  text: {
    color: 'white',
    fontSize:42,
    fontWeight:"bold",
    textAlign:"center",
    backgroundColor:'rgba(0,0,0,0.5)',
    fontFamily:'sans-serif'
  },
  image:{
    width:'100%',
    height:'100%',
    flex:1,
    resizeMode:'cover',
    justifyContent:'center'
  }
})

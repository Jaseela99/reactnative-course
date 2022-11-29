import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const UserScreen = ({navigation}) => {

    const handleOpen=()=>{
    navigation.toggleDrawer()
    }
  return (
    <View style={styles.container}>
      <Text>UserScreen</Text>
      <Button title="open Drawer" onPress={handleOpen}/>
    </View>
  )
}

export default UserScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
})
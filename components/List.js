import { StyleSheet, Text, View } from "react-native";
import React from "react";

const List = ({data}) => {
  return data.map((datapoint) => 
    <View key={datapoint} style={styles.listItem} >
      <Text style={styles.itemText} >{datapoint}</Text>
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
    listItem:{
        borderRadius:6,
        paddingHorizontal:8,
        paddingVertical:4,
        marginVertical:4,
        marginHorizontal:14,
        backgroundColor:"#663399"
    },
    itemText:{
        color:"white",
        textAlign:"center"
    }
});

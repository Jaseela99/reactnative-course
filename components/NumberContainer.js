import { StyleSheet, Text, View ,Dimensions} from "react-native";
import React from "react";
import { Colors } from "../utils/colors";

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.numberContainer}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

export default NumberContainer;
const deviceWidth=Dimensions.get('window').width

const styles = StyleSheet.create({
  numberContainer: {
    borderWidth: 2,
    borderColor: Colors.numberBox,
    padding: deviceWidth < 380 ? 12 :24,
    borderRadius: 8,
    margin:deviceWidth < 380 ? 12 :24,
    alignItems:"center",
    justifyContent:"center"
  },
  numberText:{
    color:Colors.numberBox,
    fontSize:deviceWidth < 380 ? 28 :36,
    fontFamily:"open-sans-bold"
  }
});

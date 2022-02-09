import { View, Text,TouchableOpacity,StyleSheet, Alert } from 'react-native';
import React from 'react';

const Mybutton = ({
    mytitle,
    mycolor,
    onpress=()=>{},
}) => {
  return (
    <View>
       <TouchableOpacity 
              activeOpacity={0.8}
              onPress={onpress}
                style={{...styles.buttonstyle,...mycolor}}
              >
                <Text style={{ fontSize: 17, fontWeight: "700" }}>{mytitle}</Text>
              </TouchableOpacity>
    </View>
  );
};

export default Mybutton;

const styles = StyleSheet.create({
    buttonstyle:{                  height: 45,
        width: 90,
        backgroundColor: "#99cd95",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 18,
        borderRadius: 10,

    }
})
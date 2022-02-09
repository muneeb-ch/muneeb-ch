import { View, Text, TextInput } from "react-native";
import React from "react";

const MyTextInput = 
({
  myptext="",
 myonchangetext 
  //  mypalceholder,
    
  }) => {

  return (
    <View>
      <TextInput
        style={{
          height: 30,
          color: "#B4C0D8",
          fontSize: 19,
          fontWeight: "bold",
        }}
        placeholderTextColor={"white"}
        placeholder={myptext}
         onChangeText={myonchangetext}
      />
    </View>
    
  );
};

export default MyTextInput;

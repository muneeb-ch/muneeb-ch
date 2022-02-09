import { View, Text, ScrollView,TextInput } from 'react-native';
import React, { useState } from 'react';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
const StartScreen = () => {
    
  return (
    <View style={{flex:1,backgroundColor:'red'}}>
        <ScrollView>
        <View style={{flex:1,backgroundColor:'green'}}>
             <Text>SignIn</Text>
    </View>
    <View style={{flex:1,backgroundColor:'pink'}}>
       <TextInput
       style={styles.input}
       onChangeText={onChangeNumber}
       value={number}
       placeholder="useless placeholder"
       keyboardType="numeric"

       />

    </View>
    <View style={{flex:1,backgroundColor:'yellow'}}></View>
        </ScrollView>
    </View>
  );
};

export default StartScreen;

import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import KeyboardSpacer from "react-native-keyboard-spacer";
import { scale, moderateVerticalScale } from 'react-native-size-matters';

import React from "react";

const LoginScreen = () => {
  return (
    <ScrollView>
      <View style={{ flex: 1, backgroundColor: "gray", paddingHorizontal: 10 }}>
        <View
          style={{
            height: 350,
            backgroundColor: "skyblue",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            style={{ height:moderateVerticalScale(150) , width:scale(150), borderRadius: 70 }}
            source={require("../src/assets/images/prof.jpg")}
          />
          <View>
            <Text style={{ fontSize:scale(20), fontWeight: "700", color: "white" }}>
              Sign IN
            </Text>
          </View>
        </View>
        <View
          style={{
            height:moderateVerticalScale (200),
            backgroundColor: "white",
            
          }}
        >
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <View
              style={{
            
                alignItems: "center",
                justifyContent: "center",
               backgroundColor:'#EFEEF4'
              }}
            >
              <Image
                style={{ height:moderateVerticalScale (28), width:scale (28) }}
                source={require("../src/assets/icons/email.png")}
              />
            </View>
            <View
              style={{
                flex:1,
                justifyContent: "center",
                
                
              }}
            >
              <TextInput
                style={{    
                  color: 'black',
                  height: moderateVerticalScale(40),
                  fontSize: 14,
                  
                  backgroundColor: '#EFEEF4',
                  
                  }}
                placeholder="Enter the Email"
                placeholderTextColor="#C9CBCE"
                autoCapitalize="none"
                autoCorrect={false}
             //    returnKeyType="next"
                underlineColorAndroid="transparent"
                blurOnSubmit
              />
            </View>
          </View>
          <View
            style={{
              
              
              flexDirection: "row",
            }}
          >
            <View
              style={{
                height:moderateVerticalScale (80),
                
                
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                style={{ height:moderateVerticalScale (28), width:scale (28) }}
                source={require("../src/assets/icons/padlock.png")}
              />
            </View>
            <View
              style={{
                height:moderateVerticalScale (80),
                width:scale (280),
                
                justifyContent: "center",
                
              }}
            >
              <TextInput
                style={{
                  height:moderateVerticalScale (30),
                  color: "#B4C0D8",
                  fontSize:scale (17),
                  
                }}
                placeholderTextColor={"gray"}
                placeholder="Password"
              />
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "yellow",
            alignItems: "center",
            
          }}
        >
          <TouchableOpacity
            style={{
              height:moderateVerticalScale (70),
              width:scale (250),
              backgroundColor: "blue",
              borderRadius: 20,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize:scale (20), fontWeight: "700", color: "white" }}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;

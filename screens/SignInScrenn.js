import {
  View,
  Text,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import React,{useState} from "react";
import Mybutton from "../src/components/Mybutton";
import MyTextInput from "../src/components/MyTextInput";

const SignInScrenn = () => {
  const [UserName, setUserName] = useState('');
  const [UserPassword, setUserPassword] = useState('');
  return (
    <View style={{ flex: 1, backgroundColor: "gray" }}>
      <View style={{ height: "100%", width: "100%" }}>
        <ImageBackground
          style={{ height: "100%", width: "100%" }}
          source={require("../src/assets/images/wallpaper.jpeg")}
        >
        <ScrollView>
        <View style={{ height:240 }}></View>
          <View
            style={{
              height: 330,
              width: 360,
              backgroundColor: "black",
              opacity: 0.6,
              borderRadius: 25,
              marginLeft: 10,
            }}
          >
            <View
              style={{
                height:80,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: "700",
                  color: "white",
                  marginTop: 40,
                }}
              >
                Login
              </Text>
            </View>
            <View style={{ height:150, paddingHorizontal: 30 }}>
              <View
                style={{
                  height:80,
                  justifyContent: "flex-end",
                  borderBottomWidth: 2,
                  borderColor: "white",
                }}
              >
                <MyTextInput 
                myptext='UserName'
                myonchangetext={(e)=>setUserName(e)}                
                />
          
              </View>

              <View style={{ height:230 }}>
                <View
                  style={{
                    height:60,
                    justifyContent: "flex-end",
                    borderBottomWidth: 2,
                    borderColor: "white",
                  }}
                >


                <MyTextInput 
                myptext='*******'
                myonchangetext={(e)=>setUserPassword(e)}                
                />
                </View>
              </View>
            </View>
            <View style={{ height:80, justifyContent: "center" }}>
            <Mybutton 
            mytitle='login'
            mycolor={{backgroundColor:'red'}}
            onpress={()=>{
              console.log('UserName:',UserName);
              console.log('UserPassword:',UserPassword);
            }}
          
            

            />
            </View>
          </View>
          <View style={{ height:230 }}></View>
        </ScrollView>
        </ImageBackground>
      </View>
    </View>
  );
};

export default SignInScrenn;

import { View, Text } from 'react-native'
import React from 'react'
import { Redirect, router } from "expo-router";


const Index = () => {
  return (
    <View>
      <Text>Index </Text>
      <Redirect href="/(tabs)/inbox"/>
    </View>
  )
}

export default Index


  /* import { StatusBar } from "expo-status-bar";
import { ScrollView, View,Text,Image } from "react-native";
import { Redirect, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import {images} from '../constants';
import CustomButton from "@/components/CustomButton";
import { useGlobalContext } from "@/context/GlobalProvider";

// import 'react-native-url-polyfill/auto';

export default function App() {
  const {isLoading,isLoggedIn} = useGlobalContext();

if(!isLoading && isLoggedIn){ return <Redirect href="/home"/>}

  return (
    <SafeAreaView className="bg-primary h-full">
     <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
<View className="w-full justify-center items-center min-h-[85vh] px-4">
<Image source={images.logo} className="w-[130px] h-[84px]" resizeMode="contain"/>
<Image source={images.cards} className="max-w-[380px] w-full h-[300px]" resizeMode="contain"/>
<View className="relative mt-5">
<Text className="text-3xl text-white font-bold text-center">Discover Endless posibilities with {' '}
  <Text className="text-secondary-200">GenSnap</Text>
</Text>
<Image 
source={images.path}
className="w-[140px] h-[15] absolute -bottom-2 -right-1" resizeMode="contain"/>

</View>
<Text className="text-gray-100 mt-7 text-sm font-pregular text-center">Where creativity meets innovation: embark on a journey of limitless exploration with GenSnap</Text>
<CustomButton
  title="Continue with Email"
  handlePress={()=>router.push('/sign-in')}
  containerStyles="w-full mt-7"/>
</View>
</ScrollView>

<StatusBar backgroundColor="#161622" style="light" />
</SafeAreaView>
  );
}
  */
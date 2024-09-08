import { StatusBar } from "expo-status-bar";
import { ScrollView, View, Text, Image, ImageBackground } from "react-native";
import { Redirect, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../components/custombutton";
import { images } from "@/constants";



const Index = () => {
  return (
    <SafeAreaView className="bg-white h-full">
      <View>
        <Image
          source={images.WelcomeBG}
          className="w-full h-[100%] absolute"
          style={{opacity: 0.4}}
        />
        <ScrollView
        className=" mt-[55vh]"
          contentContainerStyle={{
            height: "100%",
          }}
        >
          
          <View className="mr-10 ml-10">
          <View className="items-center">
          <Text className="text-black font-HowdyParty text-3xl">Welcome! </Text>
          <Text className="text-black font-psemibold text-3xl ">
          Create, Connect and discover with your local community and beyond.
          </Text></View>
            <CustomButton
              title="Continue with Email"
              handlePress={() => router.replace('/sign-in')}
              containerStyles="w-full mt-7 "
              textStyles="text-black font-bold"
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default Index


/*
import {images} from '../constants';

import { useGlobalContext } from "@/context/GlobalProvider";

// import 'react-native-url-polyfill/auto';

export default function App() {
const {isLoading,isLoggedIn} = useGlobalContext();

if(!isLoading && isLoggedIn){ return <Redirect href="/home"/>}

return (
  
   
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

</View>


);
}
*/
import { View, Text,Image, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '@/constants'
import CustomButton from '@/components/custombutton'
import { Link, router } from 'expo-router'
import FormField from '@/components/FormField'

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })
  const [isSubmitting, setisSubmitting] = useState(false)
  const submit = async () => {
    if (form.email === "" || form.password === "") {
      Alert.alert("Error", "Please fill in all fields");
    }

    setisSubmitting(true);

    try {
      console.log(form)
      console.log('submitting')
    
      Alert.alert("Success", "User signed in successfully");
      router.replace("/inbox");
    } catch (error) {
      Alert.alert("Error", (error as Error).message);
    } finally {
      setisSubmitting(false);
      console.log('done')
    }
  };
  return (
    <SafeAreaView className="bg-white h-full">
      <View>
        <Image
          source={images.WelcomeBG}
          className="w-full h-[100%] absolute"
          style={{opacity: 0.4}}
        />
        <ScrollView   
          contentContainerStyle={{
            height: "100%",
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
        <View className='bg-white/90 p-4 rounded-lg w-[80vw]'>
          <Image source={images.login} resizeMode='contain' className='w-full h-40'/>
          <View className='         items-center
'>
            <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
            <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />
          </View>
          <Link href={{ pathname: "/sign-up" }} className='text-blue-500 text-sm mb-4'>Forgot Password ?</Link>
          <View className='justify-center items-center'>
          <CustomButton
              title="SignIn"
              handlePress={() => router.replace('/inbox')}
              containerStyles="w-[80%] mt-1 "
              textStyles="text-black font-bold"
            />
            </View>
            <View className="justify-center flex-row gap-2 pt-5">
            <Text className="text-sm text-gray-200 font-pregular">Don't have an account?</Text>
            <Link href={{ pathname: "/sign-up" }} className="text-blue-600 font-psemibold text-sm">Sign Up</Link>
          </View>
        </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default SignIn
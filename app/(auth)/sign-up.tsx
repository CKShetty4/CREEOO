import { View, Text,Image, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '@/constants'
import CustomButton from '@/components/custombutton'
import { Link, router } from 'expo-router'
import FormField from '@/components/FormField'

const SignUp = () => {
  const [form, setForm] = useState({
    username:'',
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
          <Image source={images.Welcome
          } resizeMode='contain' className='w-full h-40'/>
          <View className='items-center'>
          <FormField
            placeholder="UseName"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-2"
            keyboardType="email-address"
          />
            <FormField
            placeholder='Email'
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-1"
            keyboardType="email-address"
          />
            <FormField
            placeholder="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-1"
          />
          </View>
          <Link href={{ pathname: "/sign-in" }} className='text-blue-500 text-sm mt-1 mb-4'>Forgot Password ?</Link>
          <View className='justify-center items-center'>
          <CustomButton
              title="SignUp"
              handlePress={() => router.replace('/inbox')}
              containerStyles="w-[80%] mt-1 "
              textStyles="text-black font-bold"
            />
            </View>
            <View className="justify-center flex-row gap-2 pt-5">
            <Text className="text-sm text-gray-200 font-pregular">Already have an account?</Text>
            <Link href={{ pathname: "/sign-up" }} className="text-blue-600 font-psemibold text-sm">Sign In</Link>
          </View>
        </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default SignUp
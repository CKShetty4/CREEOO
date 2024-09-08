import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const SignIn = () => {
  return (
    <SafeAreaView className='bg-primary-100 h-full'>
      <View>
        <Text className='text-black'>Sign In</Text>
      </View>
    </SafeAreaView>
  )
}

export default SignIn
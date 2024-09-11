import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Profile = () => {
  return (
    <SafeAreaView className='bg-primary-100 h-full '>
    <Text className='font-HowdyParty text-3xl mt-1 text-center'>Profile</Text>
    <View>
      <ScrollView>

      <View className=' my-4 ml-3 mr-3 border-b border-black'></View>
      </ScrollView>
    </View>


    </SafeAreaView>
  )
}

export default Profile
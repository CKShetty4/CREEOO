import { View, Text , ScrollView} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'


const Settings = () => {
  return (
    <SafeAreaView className='bg-primary-100 h-full '>      
      <ScrollView className='mt-2 mb-10'>
      <View>
          <View className='opacity-50 mt-4 bg-white rounded-lg p-3 shadow-md relative h-[90vh]'></View>
          <View className='absolute mx-5'>
            <View className='flex flex-col gap-2 mt-5 '>
      <Text className='font-HowdyParty text-3xl mt-1 text-center'>Settings</Text>
      <View className=' my-4 ml-3 mr-3 border-b border-black'></View>{/*This is a divider line  */ }
<View className='space-y-4'>
      <Text className='text-2xl'>Download/Export Data</Text>
      <Text className='text-2xl'>Profile Verification</Text>
      <Text className='text-2xl'>Favourites</Text>
      <Text className='text-2xl'>Restricted </Text>
      <Text className='text-2xl'>Blocked </Text>
      <Text className='text-2xl'>Accessibiliy and translations </Text>
      <Text className='text-2xl'>Privacy Center </Text>
      <Text className='text-2xl'>About </Text>
      <Text className='text-2xl'>Notication Preferences </Text>
      <Text className='text-2xl'>LogOut </Text>
      <View className='border-b border-black'></View>{/*This is a divider line  */ }
      <Text className='text-2xl text-red-700'>Delete Account </Text>
      <Text className='text-2xl mb-8'>Help, Support and Feedback</Text>
      </View>
      </View>
      </View>
      </View>
        </ScrollView>
        </SafeAreaView>
  )
}

export default Settings
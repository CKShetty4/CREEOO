import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { icons, images } from '@/constants'

const Nearby = () => {
  return (
    <SafeAreaView className='bg-primary-100 h-full '>
    <Text className='font-HowdyParty text-3xl mt-1 text-center'>NearBy</Text>
  
<View className='flex-1'>
  <View className='absolute bottom-5 right-5'> 
    <Image 
      source={icons.people}
      className='h-30 w-30'
      resizeMode='contain'
    />
  </View>
</View>

    </SafeAreaView>
  )
}

export default Nearby
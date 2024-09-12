import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import CustomToggle from '../../components/CustomToggle';
import Interest from '../../components/Interest';
import user from '../../data/user'
import { icons } from '@/constants';

const Profile = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className='bg-primary-100 h-full '>
      <Text className='font-HowdyParty text-3xl mt-1 text-center'>Profile</Text>
      <View>
      <ScrollView className='mt-2 mb-10'>
        <View className='border rounded-lg w-[90%] h-[173] mx-auto mt-3'>
          {user.bannerImage && (
            <Image
              source={{ uri: user.bannerImage }}
              className='rounded-t-lg w-full h-full'
              resizeMode='cover'
            />
          )}
          {user.bannerImage ? (
            <View className='absolute bottom-2 flex flex-row items-center justify-between px-4'>
              <View className='flex flex-row items-center gap-2'>
                <View className='rounded-full bg-primary-200 w-16 h-16 flex items-center justify-center'>
                  <Text className='font-bold text-2xl text-primary-900'>
                    {user.UserName.charAt(0)}
                  </Text>
                </View>
                <View>
                  <Text className='text-xl font-bold text-white'>
                    {user.UserName}
                  </Text>
                </View>
              </View>
              <View className='flex flex-row items-center gap-2'>
                <Image source={icons.edit} className='w-5 h-5' />
                <View
                  className='rounded-full bg-primary-200 w-10 h-10 flex items-center justify-center'
                >
                  <Image source={icons.camera} className='w-6 h-6 ' />
                </View>
              </View>
            </View>
          ) : (
            <View className='absolute bottom-2 flex flex-row items-center justify-between px-4'>
              <View className='flex flex-row items-center gap-2'>
                <View className='rounded-full bg-primary-200 w-16 h-16 flex items-center justify-center'>
                  <Text className='font-bold text-2xl text-primary-900'>
                    {user.UserName.charAt(0)}
                  </Text>
                </View>
                <View>
                  <Text className='text-xl font-bold text-white'>
                    {user.UserName}
                  </Text>
                </View>
              </View>
              <View className='flex flex-row items-center gap-2'>
                <Image source={icons.edit} className='w-5 h-5' />
                <View
                  className='rounded-full bg-primary-200 w-10 h-10 flex items-center justify-center'
                >
                  <Image source={icons.camera} className='w-6 h-6' />
                </View>
              </View>
            </View>
          )}
          <View className='absolute bottom-8 w-full flex flex-col items-center gap-2 px-4'>
            <Text className='text-xl font-bold text-white'>
              {user.UserName}
            </Text>
            <View className='bg-primary-200 rounded-md px-4 py-2'>
              <Text className='text-sm text-gray-400'>{user.Bio}</Text>
            </View>
          </View>
        </View>
        
          <View className=''>
            <Text className='font-bold text-white'>Edit Profile</Text>
          </View>
          <View className='mt-5 mx-3'>
            <View className='flex flex-row justify-between items-center gap-2'>
              <CustomToggle title='Work' />
              <CustomToggle title='Private' />
              <CustomToggle title='Date' />
            </View>
          </View>
          <View className=' my-4 ml-3 mr-3 border-b border-black'></View>{/*This is a divider line  */ }
          <View className='opacity-50 mt-4 bg-white rounded-lg p-3 shadow-md'>
            <View className='flex flex-col gap-2'>
              <Text className='text-lg font-bold'>User Details</Text>
              <View className='flex flex-row justify-between items-center'>
                <Text>Email:</Text>
                <Text className='font-semibold'>
                  {user.Email}
                </Text>
              </View>
              <View className='flex flex-row justify-between items-center'>
                <Text>Contact:</Text>
                <Text className='font-semibold'>
                  {user.Contact}
                </Text>
              </View>
              <View className='flex flex-row justify-between items-center'>
                <Text>Date of Birth:</Text>
                <Text className='font-semibold'>{user.DOB}</Text>
              </View>
              <View className='flex flex-row justify-between items-center'>
                <Text>Language:</Text>
                <Text className='font-semibold'>{user.Language}</Text>
              </View>
              <View className='flex flex-row justify-between items-center'>
                <Text>Gender:</Text>
                <Text className='font-semibold'>{user.Gender}</Text>
              </View>
              <View className='mt-3'>
                <Text className='text-lg font-bold'>Links</Text>
                <View className='flex flex-col gap-2'>
                  <View className='flex flex-row justify-between items-center'>
                    <Text>Website:</Text>
                    <Text className='font-semibold'>
                      {user.Links.Website}
                    </Text>
                  </View>
                  <View className='flex flex-row justify-between items-center'>
                    <Text>Instagram:</Text>
                    <Text className='font-semibold'>
                      {user.Links.Instagram}
                    </Text>
                  </View>
                  <View className='flex flex-row justify-between items-center'>
                    <Text>Discord:</Text>
                    <Text className='font-semibold'>
                      {user.Links.Discord}
                    </Text>
                  </View>
                  <View className='flex flex-row justify-between items-center'>
                    <Text>Facebook:</Text>
                    <Text className='font-semibold'>
                      {user.Links.Facebook}
                    </Text>
                  </View>
                  <View className='flex flex-row justify-between items-center'>
                    <Text>Youtube:</Text>
                    <Text className='font-semibold'>
                      {user.Links.Youtube}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View className='mt-4'>
            <Text className='text-lg font-bold'>Interest:</Text>
            <View className='flex flex-row gap-2 mt-2'>
              {user.Interest.map((item, index) => (
                <Interest
                  key={index}
                  title={item}
                />
              ))}
            </View>
          </View>
          <View>
        <Text>
          Something to display
        </Text>
      </View>
        </ScrollView>
      </View>
      
    </SafeAreaView>
  )
}

export default Profile
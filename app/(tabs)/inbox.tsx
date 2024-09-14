import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

const Inbox = () => {
  const [activeTab, setActiveTab] = useState('requests');

  const handleTabPress = (tab: any) => {
    setActiveTab(tab);
  };

  return (
    <View className='h-full mt-5 bg-gray-100'>
      <View className='flex-row bg-gray-200 p-4'>
        <TouchableOpacity
          className={`flex-1 items-center p-4 border border-gray-300 ${activeTab === 'requests' && 'bg-blue-500'}`}
          onPress={() => handleTabPress('requests')}
        >
          <Text className='text-lg font-bold text-gray-800'>Requests</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className={`flex-1 items-center p-4 border border-gray-300 ${activeTab === 'inbox' && 'bg-blue-500'}`}
          onPress={() => handleTabPress('inbox')}
        >
          <Text className='text-lg font-bold text-gray-800'>Inbox</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className={`flex-1 items-center p-4 border border-gray-300 ${activeTab === 'friends' && 'bg-blue-500'}`}
          onPress={() => handleTabPress('friends')}
        >
          <Text className='text-lg font-bold text-gray-800'>Friends</Text>
        </TouchableOpacity>
      </View>
      <View className='flex-1 p-4'>
        {activeTab === 'requests' && (
          <ScrollView className='flex-1'>
            {/* Content for Requests */}
            <Text className='text-lg mb-4 p-4 bg-white rounded-lg shadow-md'>Request 1</Text>
            <Text className='text-lg mb-4 p-4 bg-white rounded-lg shadow-md'>Request 2</Text>
            <Text className='text-lg mb-4 p-4 bg-white rounded-lg shadow-md'>Request 3</Text>
            {/* ... more requests */}
          </ScrollView>
        )}
        {activeTab === 'inbox' && (
          <ScrollView className='flex-1'>
            {/* Content for Inbox */}
            <Text className='text-lg mb-4 p-4 bg-white rounded-lg shadow-md'>Message 1</Text>
            <Text className='text-lg mb-4 p-4 bg-white rounded-lg shadow-md'>Message 2</Text>
            <Text className='text-lg mb-4 p-4 bg-white rounded-lg shadow-md'>Message 3</Text>
            {/* ... more messages */}
          </ScrollView>
        )}
        {activeTab === 'friends' && (
          <ScrollView className='flex-1'>
            {/* Content for Friends */}
            <Text className='text-lg mb-4 p-4 bg-white rounded-lg shadow-md'>Friend 1</Text>
            <Text className='text-lg mb-4 p-4 bg-white rounded-lg shadow-md'>Friend 2</Text>
            <Text className='text-lg mb-4 p-4 bg-white rounded-lg shadow-md'>Friend 3</Text>
            {/* ... more friends */}
          </ScrollView>
        )}
      </View>
    </View>
  );
};

export default Inbox;
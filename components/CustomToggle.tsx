import React, { useState } from 'react';
import { View, Text } from 'react-native';

const CustomToggle = ({ title }: { title: string }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View className='flex flex-row items-center gap-2'>
      <View className='w-10 h-6 bg-gray-300 rounded-full'>
        <View
          className={`bg-white rounded-full shadow-lg transition duration-300 ease-in-out transform ${
            isEnabled ? 'translate-x-full' : 'translate-x-0' 
          }`
        } 
        
          style={{ width: 30, height: 30 }}
        />
      </View>
      <Text className='text-gray-900 font-bold'>{title}</Text>
    </View>
  );
};

export default CustomToggle;
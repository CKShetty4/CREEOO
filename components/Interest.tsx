import React from 'react';
import { View, Text } from 'react-native';

const Interest = ({ title }: { title: string }) => {
  return (
    <View
      className='border rounded-lg bg-primary-200 w-24 h-12 flex items-center justify-center'
    >
      <Text className='text-gray-900 font-bold'>{title}</Text>
    </View>
  );
};

export default Interest;

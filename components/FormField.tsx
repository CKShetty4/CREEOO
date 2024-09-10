import { View, Text, TextInput ,TouchableOpacity, Image} from 'react-native'
import React, { useState } from 'react'

import {icons} from '../constants';

interface FormFieldProps {
    title?: string;
    value: string;
  placeholder?: string;
  handleChangeText: (text: string) => void;
    otherStyles?: string;
    keyboardType?:string;
  }
  
  const FormField: React.FC<FormFieldProps> = ({
    title,
    value,
    placeholder,
    handleChangeText,
    otherStyles,
    ...props
  }) => {
const [showPassword, setshowPassword] = useState(false)
    
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-black font-pmedium">{title}</Text>
      <View 
      className="border-2
       border-gray-100 
       w-full h-16 px-4
        bg-white
        rounded-2xl
        flex-row
         items-center
          focus:border-secondary">
<TextInput className="flex-1 text-gray-200 font-psemibold"
value={value}
placeholder={placeholder}
placeholderTextColor="#AAAAAA"
onChangeText={handleChangeText}
secureTextEntry={placeholder === 'Password' && !showPassword}
/>
{placeholder === 'Password' && (
    <TouchableOpacity onPress={()=>setshowPassword(!showPassword)} >
        <Image source={!showPassword? icons.view:icons.hide} className="w-6 h-6" resizeMode="contain"/> 
    </TouchableOpacity>
)}
      </View>
    </View>
  )
}

export default FormField
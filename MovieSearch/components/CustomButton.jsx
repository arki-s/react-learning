import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({title, handlePress, containerStyles, textStyles, isLoading}) => {
  return (
    <TouchableOpacity 
    onPRess={handlePress}
    activeOpacity={0.7}
    className={`bg-secondary rounded-xl mim-h-[62px] justify-center items-center ${containerStyles} 
    ${isLoading ? 'opacity-50' : ''}`}
    disabled={isLoading}>
      <Text className={`text-primary font-psemibold text-lg ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton

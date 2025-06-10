import React from 'react'
import { View, Platform, StatusBar as RNStatusBar, SafeAreaView } from 'react-native'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const AuthLayout = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#B2EBF2' }}>
      <SafeAreaView style={{ flex: 1 }}>
        <Stack>
          <Stack.Screen
            name='sign-in'
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='sign-up'
            options={{ headerShown: false }}
          />
        </Stack>
        <StatusBar style="light" translucent />
      </SafeAreaView>
    </View>
  )
}

export default AuthLayout

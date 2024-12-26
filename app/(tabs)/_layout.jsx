import React from 'react'
import { Text } from 'react-native'
import { Tabs } from 'expo-router'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import Feather from '@expo/vector-icons/Feather'
import Ionicons from '@expo/vector-icons/Ionicons';

export default function _layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          paddingBottom: 10,
          paddingTop: 5,
          height: "8%",
        },
      }}
      style={{marginBottom: 20}}
    >
      <Tabs.Screen 
        name="MyTrip" icon
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={{ 
              fontFamily: 'outfit',
              color: focused ? 'black' : 'gray', 
              fontWeight: focused ? 'bold' : 'normal' 
            }}>
              My Trips
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons name="airplane" size={24} color={focused?'black':'grey'} />
          ),
        }}
      />
      <Tabs.Screen 
        name="Discover"
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={{ 
              fontFamily: 'outfit',
              color: focused ? 'black' : 'gray', 
              fontWeight: focused ? 'bold' : 'normal' 
            }}>
              Discover
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <Feather name="globe" size={24} color={focused?'black':'grey'} />
          ),
        }}
      />
      <Tabs.Screen 
        name="Profile"
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={{ 
              fontFamily: 'outfit',
              color: focused ? 'black' : 'gray', 
              fontWeight: focused ? 'bold' : 'normal' 
            }}>
              Profile
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <Ionicons name="person" size={24} color={focused?'black':'grey'} />
          ),
        }}

      />
    </Tabs>
  )
}
import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '@/styles/OptionCardStyles'

export default function OptionCard({option, selected}) {
  return (
    <View
      style={[
        styles.container,
        selected?.id == option?.id && {borderWidth: 2}
      ]}
    >
      <View>
        <Text
          style={styles.titleText}
        >
          {option.title}
        </Text>
        <Text
          style={styles.descriptionText}
        >
          {option.description}
        </Text>
      </View>
      <Text
        style={styles.icon}
      >
        {option.icon}
      </Text>
    </View>
  )
}
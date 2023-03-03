import React from 'react';
import { FC } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export const Home: FC = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text>+</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
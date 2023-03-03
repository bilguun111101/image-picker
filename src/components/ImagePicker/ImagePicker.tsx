import { useState } from 'react';
import { useEffect } from 'react';
import React, { useRef } from 'react';
import * as ImagePickerL from "expo-image-picker";
import { TapGestureHandler } from "react-native-gesture-handler"
import { View, StyleSheet, Image, Animated, ImageBackground, Easing, Platform, TouchableOpacity, Text } from "react-native";
import { Feather } from '@expo/vector-icons';

export const ImagePicker = () => {
  const doubleTapRef = useRef();
  const [image, setImage] = useState<any>()
  const scale = useRef(new Animated.Value(0)).current;
  const [hasGalleryPermission, setHasGalleryPermission] = useState<any>(null);
  const doubleTapFunction = () => {
    Animated.timing(scale, {
      toValue: 50,
      duration: 1000,
      easing: Easing.bounce,
      useNativeDriver: false,
    }).start();
  }

  useEffect(() => {
    (async() => {
      if(Platform.OS === 'ios') {
        const { status } = await ImagePickerL.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Permission denied');
        }
      }
    })()
  }, [])

  const PickImage = async() => {
    let result = await ImagePickerL.launchImageLibraryAsync({
      mediaTypes: ImagePickerL.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })
    console.log(result);
    if(!result.canceled) setImage(result.assets[0].uri);
  }

  return (
    <View style={styles.container}>
      <TapGestureHandler
        waitFor={doubleTapRef}
        onActivated={() => {
          console.log("Single tap");
        }}
      >
        <TapGestureHandler
          maxDelayMs={250}
          numberOfTaps={2}
          ref={doubleTapRef}
          onActivated={() => {
            doubleTapFunction();
            console.log("Double click");
          }}
        >
          <Animated.View>
            <ImageBackground source={{ uri: image }} style={styles.image}></ImageBackground>
          </Animated.View>
        </TapGestureHandler>
      </TapGestureHandler>
      <TouchableOpacity onPress={PickImage} style={styles.plusBtn}>
        <Feather name="plus-circle" size={40} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingBottom: 100,
      alignItems: 'center',
      backgroundColor: '#000',
      justifyContent: 'center',
    },
    content: { },
    image: {
      width: 200,
      height: 200,
      borderWidth: 0.2,
      borderColor: '#FFF',
    },
    plusBtn: {
      marginTop: 30,
    }
})

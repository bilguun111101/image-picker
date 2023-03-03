import React, { useEffect } from 'react';
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import { View, StyleSheet, TouchableOpacity, Text, Platform } from "react-native";

type RootStackParamList = {
    Add_Image: undefined
}

type addImage = StackNavigationProp<RootStackParamList, 'Add_Image'>

export const Profile = () => {
    const navigation = useNavigation<addImage>();
    useEffect(() => {
        (async () => {
          if (Platform.OS === "ios") {
            // const { status } = ImagePicker.requestMediaLibraryPermissionsAsync();
            // if (status !== "granted") {
            //   alert("sorry not granted");
            //   console.log("status", status);
            // }
          }
        })();
    }, []);
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate("Add_Image")}>
            <Text>Add image</Text>
        </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

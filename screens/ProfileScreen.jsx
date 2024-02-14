import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SIZE } from "../assets/vars";
import { SafeAreaView } from "react-native-safe-area-context";

const ProfileScreen = () => {
  return (
    <SafeAreaView>
      <Text style={styles.title}>Your Profile</Text>
      <View style={styles.imgWrapper}>
        <Image
          source={require("../assets/images/profile.jpg")}
          style={styles.img}
        />
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  title: {
    marginTop: 18,
    marginHorizontal: 14,
    alignSelf: "center",
    fontFamily: "Roboto700",
    fontSize: 38,
    color: "#93550D",
  },
  imgWrapper: {
    width: SIZE.width - 100,
    height: SIZE.height - 600,
    alignSelf: "center",
    marginTop: 20,
    borderRadius: 20,
    overflow: "hidden",
  },
  img: {
    width: "100%",
    height: "100%",
    opacity: 0.8,
  },
});

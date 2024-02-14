import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { CardsOnScreenNew } from "../components";


const NewMotion = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.topLine}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather name="arrow-left-circle" size={28} color={"#ffff"} />
          </TouchableOpacity>

          <Text style={styles.title}>Coffee</Text>
        </View>
        <CardsOnScreenNew />
      </View>
    </SafeAreaView>
  );
};

export default NewMotion;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#BFA47B",
  },
  wrapper: {
    flex: 1,
    backgroundColor: "#BFA47B",
  },
  topLine: {
    position: "absolute",
    top: 20,
    width: "90%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginHorizontal: 20,
    backgroundColor: "#93550D",
    borderRadius: 20,
    zIndex: 4,
  },
  title: {
    fontFamily: "RobotoBoldItalic",
    fontSize: 16,
    color: "#ffff",
    marginLeft: 6,
  },
});

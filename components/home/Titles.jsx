import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Titles = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.wrapper}>
      <View style={styles.title}>
        <Text style={styles.titleText}>New</Text>
        <TouchableOpacity onPress={() => navigation.navigate("NewMotion")}>
          <Feather name="grid" size={24} color="#503206" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Titles;

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 16,
    marginHorizontal: 12,
  },
  title: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titleText: {
    fontFamily: "Roboto700",
    fontSize: 22,
  },
});

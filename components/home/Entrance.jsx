import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { MaterialIcons, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Entrance = () => {
  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.wrapper}>
        <Text style={styles.entranceText("#6C4F2D", 0, 42)}>Choose</Text>
        <Text style={styles.entranceText("#93550D", 0, 41)}>
          your favorite coffee
        </Text>
      </View>
      <View style={styles.searchWrapper}>
        <TouchableOpacity>
          <MaterialIcons name="search" size={24} style={styles.searchIcon} />
        </TouchableOpacity>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            value=""
            onPressIn={() => navigation.navigate("SearchScreen")}
            placeholder="Find"
          />
        </View>
        <View>
          <TouchableOpacity style={styles.findBtn}>
            <Feather name="camera" size={24} color={"#212121CC"} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Entrance;

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    alignItems: "center",
  },
  entranceText: (color, top, fontSize) => ({
    marginTop: top,
    marginHorizontal: 14,
    fontFamily: "Roboto700",
    fontSize: fontSize,
    color: color,
  }),
  searchWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    height: 46,
    marginHorizontal: 12,
    marginVertical: 2,
    backgroundColor: "#BFA47B",
    borderRadius: 24,
  },
  searchIcon: {
    marginHorizontal: 12,
    marginTop: 12,
    color: "#503206",
  },
  inputWrapper: {
    flex: 1,
    marginRight: 12,
    backgroundColor: "#BFA47B",
    borderRadius: 12,
  },
  input: {
    width: "100%",
    height: "100%",
    paddingHorizontal: 10,
    fontFamily: "Roboto400",
  },
  findBtn: {
    width: 46,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 24,
    backgroundColor: "#503206",
  },
});

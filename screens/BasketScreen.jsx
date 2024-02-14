import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";
import { SIZE } from "../assets/vars";

const BasketScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.topLine}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Feather name="arrow-left-circle" size={28} color={"#ffff"} />
      </TouchableOpacity>
      </View>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>You dont have any orders yet</Text>
      </View>
      <Entypo name="shopping-bag" size={84} />
    </SafeAreaView>
  );
};

export default BasketScreen;

const styles = StyleSheet.create({
  container: {
    width: SIZE.width,
    height: SIZE.height,
    alignItems: "center",
    justifyContent: "center",
  },
  topLine: {
    position: "absolute",
    top: 20,
    width: "90%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 36,
    backgroundColor: "#93550D",
    borderRadius: 20,
    zIndex: 4,
  },
  titleWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    marginTop: 18,
    marginHorizontal: 14,
    marginBottom: 24,
    alignSelf: "center",
    fontFamily: "Roboto700",
    fontSize: 38,
    color: "#93550D",
  },
});

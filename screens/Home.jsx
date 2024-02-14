import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
// import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons, Entypo } from "@expo/vector-icons";
import { Entrance } from "../components";
import SliderCards from "../components/home/SliderCards";
import Titles from "../components/home/Titles";
import Cards from "../components/cardList/Cards";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.barWrapper}>
        <View style={styles.bar}>
          <MaterialIcons name="location-on" size={24} />

          <Text style={styles.location}>Kyiv Ukraine</Text>

          <View style={{ alignItems: "flesx-end" }}>
            <TouchableOpacity onPressIn={() => navigation.navigate("BasketScreen")}>
              <Entypo name="shopping-bag" size={24} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView>
        <SliderCards />
        <Entrance />
        <Titles />
        <Cards />
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: "Roboto700",
    fontSize: 38,
  },
  barWrapper: {
    marginHorizontal: 22,
    marginTop: 60,
  },
  bar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  location: {
    fontFamily: "Roboto500",
    fontSize: 16,
    color: "#BFA47B",
  },
});

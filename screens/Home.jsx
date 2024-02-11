import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons, Entypo } from "@expo/vector-icons";
import { Entrance } from "../components";
import SliderCards from "../components/home/SliderCards";
import Titles from "../components/home/Titles";
import Cards from "../components/cardList/Cards";

const Home = () => {
  return (
    <SafeAreaView>
      <View style={styles.barWrapper}>
        <View style={styles.bar}>
          <MaterialIcons name="location-on" size={24} />

          <Text style={styles.location}>Kyiv Ukraine</Text>

          <View style={{ alignItems: "flesx-end" }}>
            <TouchableOpacity>
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
    </SafeAreaView>
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
    marginTop: 12,
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

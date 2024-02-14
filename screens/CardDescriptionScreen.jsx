import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import {
  Feather,
  Ionicons,
  SimpleLineIcons,
  MaterialIcons,
  MaterialCommunityIcons,
  Entypo,
} from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";

const CardDescriptionScreen = ({ navigation }) => {
  const route = useRoute();
  const { item } = route.params;

  const [count, setCount] = useState(1);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.top}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Feather name="arrow-left-circle" size={28} color={"#ffff"} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="heart" size={28} color={"#4E7F0D"} />
        </TouchableOpacity>
      </View>
      <Image
        source={{ uri: item.image }}
        style={styles.img}
      />
      <View style={styles.info}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>{item.title}</Text>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}>&#x20B4; {item.price}</Text>
          </View>
        </View>

        <View style={styles.ratingWrapper}>
          <View style={styles.rating}>
            {[1, 2, 3, 4, 5].map((i) => (
              <Ionicons key={i} name="star" size={24} color={"#EECE42"} />
            ))}
            <Text style={styles.ratingText}> (4.5)</Text>
          </View>

          <View style={styles.rating}>
            <TouchableOpacity onPress={() => increment()}>
              <SimpleLineIcons name="plus" size={20} />
            </TouchableOpacity>

            <Text style={styles.ratingText}>{count}</Text>

            <TouchableOpacity onPress={() => decrement()}>
              <SimpleLineIcons name="minus" size={20} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.descriptionWrapper}>
          <Text style={styles.description}>Description</Text>
          <Text style={styles.text}>{item.description}</Text>
          <Text style={styles.description}>Ingredients: </Text>
          <Text>{item.ingredients.join(', ')}</Text>
        </View>

        <View style={{ marginBottom: 10, marginTop: 10 }}>
          <View style={styles.location}>
            <View style={{ flexDirection: "row" }}>
              <MaterialIcons name="location-on" size={24} />
              {/* card_location */}
            </View>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <MaterialCommunityIcons name="truck-fast-outline" size={24} />
              <Text style={{marginLeft: 4}}>Delivery &#x20B4;20</Text>
            </View>
          </View>
        </View>

        <View style={styles.cardWrapper}>
          <TouchableOpacity onPress={() => {}} style={styles.cardBtn}>
            <Text style={styles.cardTitle}>Buy</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {}} style={styles.chooseCard}>
            <Entypo name="shopping-bag" size={22} color={"#ffff"} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CardDescriptionScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#BFA47B",
  },
  top: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
    top: 44,
    width: "90%",
    zIndex: 3,
  },
  img: {
    aspectRatio: 1,
    resizeMode: "cover",
  },
  info: {
    marginTop: -20,
    backgroundColor: "#BFA47B",
    width: "100%",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  titleWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
    paddingBottom: 10,
    width: "90%",
    top: 20,
  },
  title: {
    fontFamily: "RobotoBoldItalic",
    fontSize: 20,
  },
  priceWrapper: {
    backgroundColor: "#ffff",
    borderRadius: 20,
  },
  price: {
    paddingHorizontal: 6,
    fontFamily: "RobotoBoldItalic",
    fontSize: 20,
  },
  ratingWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 10,
    width: "100%",
    top: 5,
  },
  rating: {
    top: 20,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginHorizontal: 20,
  },
  ratingText: {
    paddingHorizontal: 6,
    fontFamily: "Roboto500",
    color: "#ffff",
  },
  descriptionWrapper: {
    marginTop: 40,
    marginHorizontal: 20,
  },
  description: {
    fontFamily: "Roboto500",
    fontSize: 18,
    marginBottom: 4,
  },
  text: {
    fontFamily: "Roboto400",
    fontSize: 12,
    textAlign: "justify",
    marginBottom: 10,
  },
  location: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
    marginHorizontal: 12,
    backgroundColor: "#BFA47B",
    borderRadius: 20,
  },
  cardWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 10,
    width: "100%",
  },
  cardBtn: {
    justifyContent: "center",
    alignItems: "center",
    width: "46%",
    marginLeft: 12,
    padding: 10,
    backgroundColor: "#503206",
    borderRadius: 20,
  },
  cardTitle: {
    marginLeft: 10,
    fontFamily: "Roboto500",
    fontSize: 20,
    color: "#ffff",
  },
  chooseCard: {
    justifyContent: "center",
    alignItems: "center",
    width: 37,
    height: 37,
    margin: 10,
    backgroundColor: "#503206",
    borderRadius: 50,
  },
});

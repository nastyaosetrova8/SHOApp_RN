import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const CardView = ({ item }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("CardDescriptionScreen", { item })}
    >
      <View style={styles.wrapper}>
        <View style={styles.imgWrapper}>
          <Image
            source={{ uri: item.image }}
            style={styles.img}
          />
        </View>
        <View style={styles.infoWrapper}>
          <Text style={styles.title} numberOfLines={1}>
            {item.title}
          </Text>
          <Text style={styles.supplier} numberOfLines={1}>
            {item.ingredients.join(', ')}
          </Text>
          <Text style={styles.price}>&#x20B4; {item.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardView;

const styles = StyleSheet.create({
  wrapper: {
    width: 182,
    height: 240,
    marginEnd: 22,
    borderRadius: 16,
    backgroundColor: "#BFA47B",
  },
  imgWrapper: {
    flex: 1,
    width: 170,
    marginLeft: 6,
    marginTop: 6,
    borderRadius: 10,
    overflow: "hidden",
  },
  img: {
    aspectRatio: 1,
    resizeMode: "cover",
  },
  infoWrapper: {
    padding: 10,
  },
  title: {
    fontFamily: "Roboto700",
    fontSize: 20,
    marginBottom: 2,
  },
  supplier: {
    fontFamily: "Roboto400",
    fontSize: 10,
    color: "#ffff",
  },
  price: {
    fontFamily: "Roboto700",
    fontSize: 16,
  },
});

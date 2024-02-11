import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SHADOW } from "../assets/vars";
import { useNavigation } from "@react-navigation/native";


const SearchComponent = ({ item }) => {

    const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity style={styles.wrapper} onPress={() => navigation.navigate('CardDescriptionScreen', {item})}>
        <View style={styles.imgWrapper}>
          <Image source={{ uri: item.imageUrl }} style={styles.img} />
        </View>
        <View style={styles.textWrapper}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.supplier}>{item.supplier}</Text>
          <Text style={styles.supplier}>&#x20B4; {item.price}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SearchComponent;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    padding: 16,
    borderRadius: 10,
    backgroundColor: "#BFA47B",
    ...SHADOW.medium,
    shadowColor: "#F7F4E9",
  },
  imgWrapper: {
    width: 70,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#BFA47B",
    borderRadius: 16,
  },
  img: {
    width: "100%",
    height: 66,
    borderRadius: 10,
    resizeMode: "cover",
  },
  textWrapper: {
    flex: 1,
    marginHorizontal: 16,
  },
  title: {
    fontFamily: "Roboto700",
    fontSize: 16,
    // color:
  },
  supplier: {
    fontFamily: "Roboto400",
    fontSize: 12,
    color: "#ffff",
    marginTop: 4,
  }
});

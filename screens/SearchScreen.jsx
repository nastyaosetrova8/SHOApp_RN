import {
  FlatList,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import axios from "axios";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { SIZE } from "../assets/vars";
import SearchComponent from "../components/SearchComponent";

const SearchScreen = () => {
  const [searchKey, setSearchKey] = useState("");
  const [searchResults, setSearchReasults] = useState([]);

  const handleSearch = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3000/api/cards/search/${searchKey}`
      );
      setSearchReasults(res.data);
    } catch (error) {
      console.log("Failed to get product", error);
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.searchWrapper}>
        <TouchableOpacity>
          <Feather name="camera" size={24} style={styles.searchIcon} />
        </TouchableOpacity>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            value={searchKey}
            onChangeText={setSearchKey}
            placeholder="Searching"
          />
        </View>
        <View>
          <TouchableOpacity
            style={styles.findBtn}
            onPress={() => handleSearch()}
          >
            <Feather name="search" size={24} color="#ffff" />
          </TouchableOpacity>
        </View>
      </View>
      {searchResults.length === 0 ? (
        <View style={{ flex: 1, alignItems: "center" }}>
          <Image
            source={require("../assets/images/magnifierСoffeeСup.webp")}
            style={styles.searchImg}
          />
        </View>
      ) : (
        <FlatList
          data={searchResults}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <SearchComponent item={item} />}
          style={{ marginHorizontal: 12 }}
        />
      )}
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  searchWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    height: 46,
    marginHorizontal: 12,
    marginVertical: 16,
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
  searchImg: {
    resizeMode: "contain",
    width: SIZE.width - 26,
    height: SIZE.height - 260,
    opacity: 0.8,
  },
});

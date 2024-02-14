import {
  FlatList,
  Image,
  Keyboard,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import axios from "axios";
import { useEffect, useState } from "react";
import { Feather } from "@expo/vector-icons";
import { SIZE } from "../assets/vars";
import SearchComponent from "../components/SearchComponent";

const SearchScreen = () => {
  const [searchKey, setSearchKey] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isShownKeyboard, setIsShownKeyboard] = useState(false);

  const handleSearch = async () => {
    try {
      const res = await axios.get(
        `https://api.sampleapis.com/coffee/hot`
        // `http://localhost:3000/api/cards/search/${searchKey}`
      );
      const filteredResults = res.data.filter((item) =>
        item.title.toLowerCase().includes(searchKey.toLowerCase().trim())
      );
      setSearchResults(filteredResults);
      isKeyboard();
    } catch (error) {
      console.log("Failed to get product", error);
    }
  };

  const handleChangeText = (text) => {
    setSearchKey(text);
    if (text === "") {
      setSearchResults([]);
    }
  };

  function isKeyboard() {
    setIsShownKeyboard(false);
    Keyboard.dismiss();
  }

  return (
    <TouchableWithoutFeedback onPress={isKeyboard}>
      <View>
        <View>
          <View style={styles.searchWrapper}>
            <TouchableOpacity>
              <Feather name="camera" size={24} style={styles.searchIcon} />
            </TouchableOpacity>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                value={searchKey}
                onChangeText={handleChangeText}
                placeholder="Searching"
              />
            </View>
            <View>
              <TouchableOpacity style={styles.findBtn} onPress={handleSearch}>
                <Feather name="search" size={24} color="#ffff" />
              </TouchableOpacity>
            </View>
          </View>

          {searchResults.length === 0 ? (
            <View style={styles.searchImgWrapper}>
              <Image
                source={require("../assets/images/magnifierСoffeeСup.webp")}
                style={styles.searchImg}
              />
            </View>
          ) : (
            <View style={styles.searchImgWrapper}>
              <FlatList
                data={searchResults}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <SearchComponent item={item} />}
                style={{ marginHorizontal: 12 }}
              />
            </View>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    width: SIZE.width,
    height: SIZE.height,
  },
  searchWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    height: 46,
    marginHorizontal: 12,
    marginTop: 60,
    marginBottom: 16,
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
    // alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#BFA47B",
    borderRadius: 12,
    paddingBottom: "30",
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
  searchImgWrapper: {
    // flex: 1,
    width: SIZE.width - 26,
    height: SIZE.height - 260,
    alignSelf: "center",
    borderRadius: 20,
    overflow: "hidden",
  },
  searchImg: {
    resizeMode: "cover",
    width: "100%",
    height: "100%",
    opacity: 0.8,
  },
});

import {
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
  Text,
} from "react-native";
import CardView from "./CardView";
import { useEffect, useState } from "react";

const Cards = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getData = async () => {
    setIsLoading(true);
    try {
      const resp = await fetch("https://api.sampleapis.com/coffee/hot");
      const json = await resp.json();
      setData(json);
      setIsLoading(false);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.listWrapper}>
      {isLoading ? (
        <ActivityIndicator size={44} color={"#EECE42"} />
      ) : error ? (
        <Text>Some error occurred</Text>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <CardView key={item.id} item={item} />}
          horizontal
          contentContainerStyle={{ columnGap: 10 }}
        />
      )}
    </View>
  );
};

export default Cards;

const styles = StyleSheet.create({
  listWrapper: {
    marginTop: 16,
    marginLeft: 12,
  },
});

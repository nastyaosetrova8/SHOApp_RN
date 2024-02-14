import {
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
  Text,
} from "react-native";
import useFetch from "../../hook/useFetch";
import CardView from "./CardView";

const Cards = () => {
  const { data, isLoading, error } = useFetch();

  return (
    <View style={styles.listWrapper}>
      {isLoading ? (
        <ActivityIndicator size={44} color={"#EECE42"} />
      ) 
      : error ? (
        <Text>Some error occurred</Text>
      ) 
      : (
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

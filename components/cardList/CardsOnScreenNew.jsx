import { ActivityIndicator, StyleSheet, View, FlatList } from "react-native";
import React from "react";

import CardView from "./CardView";
import useFetch from "../../hook/useFetch";


const CardsOnScreenNew = () => {
  const { data, isLoading, error } = useFetch();


  return (
    <View style={styles.wrapper}>
      {isLoading ? (
        <ActivityIndicator size={44} color={"#EECE42"} />
      ) : error ? (
        <Text>Some error occurred</Text>
      ) : (
        <FlatList
          data={data}
          numColumns={2}
          renderItem={({ item }) => <CardView key={item.id} item={item} />}
          contentContainerStyle={styles.wrapper}
          // contentContainerStyle={{ columnGap: 10 }}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      )}
    </View>
  );
};

export default CardsOnScreenNew;

const styles = StyleSheet.create({
  loadingWrapper: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  wrapper: {
    alignContent: "center",
    paddingTop: 50,
    paddingLeft: 1,
  },
  separator: {
    height: 16,
  },
});

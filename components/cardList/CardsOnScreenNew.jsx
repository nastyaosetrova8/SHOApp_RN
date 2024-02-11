import {
  ActivityIndicator,
  StyleSheet,
  View,
  FlatList,
} from "react-native";
import React from "react";
import useFetch from "../../hook/useFetch";
import CardView from "./CardView";

const CardsOnScreenNew = () => {
  const { data, isLoading, error } = useFetch;

  if (isLoading) {
    return (
      <View style={styles.loadingWrapper}>
        <ActivityIndicator size={44} color={"#EECE42"} />
      </View>
    );
  }

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={data}
        numColumns={2}
        renderItem={({ item }) => <CardView item={item} />}
        contentContainerStyle={styles.wrapper}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
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
    paddingTop: 44,
    paddingLeft: 6,
  },
  separator: {
    height: 16,
  },
});

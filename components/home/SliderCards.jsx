import { StyleSheet, View } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";

const SliderCards = () => {
  const sliders = [
    require("../../assets/images/cappuccino.webp"),
    require("../../assets/images/matcha.jpg"),
    require("../../assets/images/icedCoffeeLatteWithCinnamonWhippedCream.webp"),
    require("../../assets/images/latteWhippedCream.webp"),
  ];

  return (
    <View style={styles.sliderWrapper}>
      <SliderBox
        images={sliders}
        dotColor="#ffff"
        inactiveDotColor="#FAA62A"
        ImageComponentStyle={{ borderRadius: 16, width: "94%", marginTop: 14 }}
        autoplay
        circleLoop
      />
    </View>
  );
};

export default SliderCards;

const styles = StyleSheet.create({
  sliderWrapper: {
    flex: 1,
    alignItems: "center",
  },
});

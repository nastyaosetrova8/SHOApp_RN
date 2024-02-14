// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import BottomTabs from "./navigation/BottomTabs";
import { CardDescriptionScreen, NewMotion } from "./screens";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import BasketScreen from "./screens/BasketScreen";

const NestedScreen = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto400: require("./assets/fonts/Roboto-Regular.ttf"),
    Roboto500: require("./assets/fonts/Roboto-Medium.ttf"),
    Roboto700: require("./assets/fonts/Roboto-Bold.ttf"),
    RobotoBoldItalic: require("./assets/fonts/Roboto-BoldItalic.ttf"),
    RobotoBlackItalic: require("./assets/fonts/Roboto-BlackItalic.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <NestedScreen.Navigator>
        <NestedScreen.Screen
          name="BottomTabs"
          component={BottomTabs}
          options={{
            headerShown: false,
          }}
        />
        <NestedScreen.Screen
          name="CardDescriptionScreen"
          component={CardDescriptionScreen}
          options={{
            headerShown: false,
          }}
        />
        <NestedScreen.Screen
          name="NewMotion"
          component={NewMotion}
          options={{
            headerShown: false,
          }}
        />
        <NestedScreen.Screen
          name="BasketScreen"
          component={BasketScreen}
          options={{
            headerShown: false,
          }}
        />
      </NestedScreen.Navigator>
    </NavigationContainer>
  );
}

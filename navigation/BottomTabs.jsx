import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, SearchScreen, ProfileScreen } from "../screens";
import { MaterialIcons } from "@expo/vector-icons";

const Tabs = createBottomTabNavigator();
const screenOptions = {
  tabBarShowLabel: false,
  tabBarHideOnKeyboard: true,
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 80,
  },
};

const BottomTabs = () => {
  return (
    <Tabs.Navigator screenOptions={screenOptions}>
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <MaterialIcons
                name={"home"}
                size={24}
                color={focused ? "#FAA62A" : "#212121CC"}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <MaterialIcons
                name={"search"}
                size={24}
                color={focused ? "#FAA62A" : "#503206"}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <MaterialIcons
                name={"person"}
                size={24}
                color={focused ? "#FAA62A" : "#503206"}
              />
            );
          },
        }}
      />
    </Tabs.Navigator>
  );
};

export default BottomTabs;

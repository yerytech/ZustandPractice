import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../screens/home/HomeScreen";
import { ProfileScreen } from "../screens/profile/ProfileScreen";
import { SettingsScreen } from "../screens/settings/SettingsScreen";
import { IonIcon } from "../shared/IonIcon";

const Tab = createBottomTabNavigator();

export const BottonNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <IonIcon
              name={"home"}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <IonIcon
              name={"person"}
              color={color}
            />
          ),
        }}
        name={`Profile`}
        component={ProfileScreen}
      />
      <Tab.Screen
        name="Setting"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <IonIcon
              name={"options"}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

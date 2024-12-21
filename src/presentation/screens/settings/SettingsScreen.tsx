import { Text, View } from "react-native";
import { globalStyle } from "../../../config/app-theme";
import { useCounterStore } from "../../store/counter-store";

export const SettingsScreen = () => {
  const count = useCounterStore((state) => state.counter);
  return (
    <View style={globalStyle.container}>
      <Text style={globalStyle.title}>{` counter =  ${count}`}</Text>
    </View>
  );
};

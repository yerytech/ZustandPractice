import { Text, View } from "react-native";
import { globalStyle } from "../../../config/app-theme";
import { useProfileStore } from "../../store/profile-store";

export const HomeScreen = () => {
  const name = useProfileStore((state) => state.name);
  const email = useProfileStore((state) => state.email);
  return (
    <View style={globalStyle.container}>
      <Text style={globalStyle.title}>{name}</Text>
      <Text style={globalStyle.title}>{email}</Text>
    </View>
  );
};

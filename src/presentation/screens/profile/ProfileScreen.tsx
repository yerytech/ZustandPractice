import { Pressable, Text, View } from "react-native";
import { globalStyle } from "../../../config/app-theme";
import { useCounterStore } from "../../store/counter-store";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";

export const ProfileScreen = () => {
  const count = useCounterStore((state) => state.counter);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  const incrementBy = useCounterStore((state) => state.incrementBy);
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: `Counter ${count}`,
    });
  }, [count]);

  return (
    <View style={globalStyle.container}>
      <Text style={globalStyle.title}>{` counter =  ${count}`}</Text>

      <Pressable
        onPress={() => increment()}
        style={globalStyle.primaryBtn}
      >
        <Text>+1</Text>
      </Pressable>
      <Pressable
        onPress={() => decrement()}
        style={globalStyle.primaryBtn}
      >
        <Text>-1</Text>
      </Pressable>
      <Pressable
        onPress={() => incrementBy(5)}
        style={globalStyle.primaryBtn}
      >
        <Text>+5</Text>
      </Pressable>
    </View>
  );
};

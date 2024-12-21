import Ionicon from "@expo/vector-icons/Ionicons";

interface Props {
  name: keyof typeof Ionicon.glyphMap;
  color?: string;
  size?: number;
}
export const IonIcon = ({ name, color = "grey", size = 25 }: Props) => {
  return (
    <Ionicon
      color={color}
      size={size}
      name={name}
    />
  );
};

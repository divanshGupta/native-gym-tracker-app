import { View, Text } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-surface">
      <Text className="text-white text-2xl font-bold">NativeWind works!</Text>
      <Text className="text-primary mt-2">Orange = success</Text>
    </View>
  );
}
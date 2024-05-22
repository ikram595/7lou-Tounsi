import { StyleSheet, Text, SafeAreaView, Image, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import DetailsScreen from "./app/screens/DetailsScreen";
import LoginScreen from "./app/screens/LoginScreen";
import PurchasesScreen from "./app/screens/PurchasesScreen";
import CreatorScreen from "./app/screens/CreatorScreen";

const Stack = createNativeStackNavigator();
export default function App() {
  const [loaded] = useFonts({
    InterBold: require("./app/assets2/assets/fonts/Inter-Bold.ttf"),
    InterSemiBold: require("./app/assets2/assets/fonts/Inter-SemiBold.ttf"),
    InterLight: require("./app/assets2/assets/fonts/Inter-Light.ttf"),
    InterMedium: require("./app/assets2/assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./app/assets2/assets/fonts/Inter-Regular.ttf"),
  });
  if (!loaded) {
    return null;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Home"
        >
          <Stack.Screen name="Home" component={WelcomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Purchases" component={PurchasesScreen} />
          <Stack.Screen name="Creator" component={CreatorScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

import React from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  StatusBar,
  Button,
  SafeAreaView,
  FlatList,
  View,
  Text,
} from "react-native";
import { NFTData, COLORS, assets } from "../constants/constants";
import FocusedStatusBar from "../components";
import colors from "../config/colors";
import HomeHeader from "../components/HomeHeader";

function WelcomeScreen() {
  return (
    <ImageBackground
      blurRadius={3}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
        <Button style={styles.loginBtn} title="Login" color={colors.primary} />
        <Button
          style={styles.registerBtn}
          title="Register"
          color={colors.secondary}
        />
      </SafeAreaView>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginBtn: {
    width: "100%",
    height: 70,
    backgroundColor: colors.primary,
  },
  registerBtn: {
    width: "100%",
    height: 70,
    backgroundColor: colors.secondary,
  },
  logo: {
    position: "absolute",
    width: 100,
    height: 100,
    top: 200,
  },
});

export default WelcomeScreen;

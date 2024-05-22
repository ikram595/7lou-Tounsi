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
import { DATA, COLORS, assets } from "../constants/constants";
import { HomeHeader, ArticleCard, FocusedStatusBar } from "../components";

function WelcomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={DATA}
            renderItem={({ item }) => <ArticleCard data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader />}
          />
        </View>
        <View
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            buttom: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          <View style={{ height: 300, backgroundColor: COLORS.rocefonce }} />
          <View style={{ flex: 1, backgroundColor: "#fff" }} />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default WelcomeScreen;

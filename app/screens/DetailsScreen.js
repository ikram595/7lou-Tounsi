import {
  View,
  Text,
  SafeAreaView,
  Image,
  FlatList,
  StatusBar,
} from "react-native";
import { COLORS, SHADOWS, SIZES, FONTS, assets } from "../constants/constants";

import {
  CircleButton,
  RectangleButton,
  SubInfo,
  FocusedStatusBar,
  DetailsDesc,
  Details2,
} from "../components";
import React from "react";
const DetailsHeader = ({ data, navigation }) => (
  <View style={{ width: "100%", height: 373 }}>
    <Image
      source={data.image}
      resizeMode="cover"
      style={{ height: "100%", width: "100%" }}
    />
    <CircleButton
      imgUrl={assets.left}
      handlePress={() => navigation.goBack()}
      left={15}
      top={StatusBar.currentHeight + 10}
    />
    <CircleButton
      imgUrl={assets.heart}
      right={15}
      top={StatusBar.currentHeight + 10}
    />
  </View>
);
const DetailsScreen = ({ route, navigation }) => {
  const { data } = route.params;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <View
        style={{
          width: "100%",
          position: "absolute",
          bottom: 0,
          paddingVertical: SIZES.font,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(255,255,255,0.5)",
          zIndex: 1,
        }}
      >
        <RectangleButton
          minWidth={170}
          fontSize={SIZES.font}
          {...SHADOWS.dark}
        />
      </View>
      <FlatList
        data={data.populaires}
        renderItem={({ item }) => <Details2 produit={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3 }}
        ListHeaderComponent={() => (
          <React.Fragment>
            <DetailsHeader data={data} navigation={navigation} />
            <SubInfo
              creatorImg={data.creatorImg}
              handlePress={() => navigation.navigate("Creator")}
            />
            <View style={{ padding: SIZES.font }}>
              <DetailsDesc data={data} />
              {data.populaires.length > 0 && (
                <Text
                  style={{
                    fontSize: SIZES.font,
                    fontFamily: FONTS.semiBold,
                    color: COLORS.primary,
                  }}
                >
                  Populaires
                </Text>
              )}
            </View>
          </React.Fragment>
        )}
      />
    </SafeAreaView>
  );
};

export default DetailsScreen;

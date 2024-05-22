import { View, Text, FlatList } from "react-native";
import { useState } from "react";

import { SweetPrice, SweetTitle } from "./SubInfo";
import { COLORS, FONTS, SIZES, SHADOWS } from "../constants/constants";

const DetailsDesc = ({ data }) => {
  const [text, setText] = useState(data.description.slice(0, 150));
  const [readMore, setReadMore] = useState(false);
  return (
    <>
      <View
        style={{
          width: "100%",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <SweetTitle
          title={data.name}
          subtitle={data.creator}
          titleSize={SIZES.extraLarge}
          subtitleSize={SIZES.font}
        />
        <View
          style={{
            width: "100%",
            padding: SIZES.font,
          }}
        >
          <SweetPrice price={data.price} unit={data.unit} />
        </View>
        <View style={{ marginVertical: SIZES.medium }}>
          <Text
            style={{
              fontFamily: FONTS.semiBold,
              fontSize: SIZES.font,
              color: COLORS.primary,
            }}
          >
            Description
          </Text>
          <View style={{ marginTop: SIZES.base }}>
            <Text
              style={{
                fontFamily: FONTS.regular,
                fontSize: SIZES.small,
                color: COLORS.secondary,
                lineHeight: SIZES.large,
              }}
            >
              {text}
              {!readMore && "..."}
              <Text
                style={{
                  fontFamily: FONTS.semiBold,
                  fontSize: SIZES.small,
                  color: COLORS.primary,
                }}
                onPress={() => {
                  if (!readMore) {
                    setText(data.description);
                    setReadMore(true);
                  } else {
                    setText(data.description.slice(0, 100));
                    setReadMore(false);
                  }
                }}
              >
                {readMore ? "Moins afficher" : "En savoir plus"}
              </Text>
            </Text>
          </View>
        </View>
        <View style={{ marginVertical: SIZES.medium }}>
          <Text
            style={{
              fontFamily: FONTS.semiBold,
              fontSize: SIZES.font,
              color: COLORS.primary,
            }}
          >
            Composition
          </Text>

          <FlatList
            style={{ marginTop: SIZES.base }}
            data={data.ingredients}
            renderItem={({ item }) => {
              return (
                <View>
                  <Text
                    style={{
                      fontFamily: FONTS.regular,
                      fontSize: SIZES.small,
                      color: COLORS.secondary,
                      lineHeight: SIZES.large,
                    }}
                  >
                    - {item}
                  </Text>
                </View>
              );
            }}
          />
        </View>
      </View>
    </>
  );
};

export default DetailsDesc;

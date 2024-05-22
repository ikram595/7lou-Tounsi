import { View, Text, Image, TouchableOpacity } from "react-native";
import {
  DATA,
  COLORS,
  FONTS,
  SHADOWS,
  SIZES,
  assets,
} from "../constants/constants";

export const SweetTitle = ({ title, subtitle, titleSize, subtitleSize }) => {
  return (
    <View>
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: titleSize,
          color: COLORS.primary,
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          fontFamily: FONTS.regular,
          fontSize: subtitleSize,
          color: COLORS.primary,
        }}
      >
        {subtitle}
      </Text>
    </View>
  );
};
export const SweetPrice = ({ price, unit }) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image
        source={assets.eth}
        resizeMode="contain"
        style={{ width: 20, height: 20, marginRight: 2 }}
      />
      <Text
        style={{
          fontFamily: FONTS.medium,
          fontSize: SIZES.font,
          color: COLORS.primary,
        }}
      >
        {price}
        <Text
          style={{
            fontFamily: FONTS.bold,
            fontSize: SIZES.bold,
            color: COLORS.primary,
          }}
        >
          {" "}
          {unit}
        </Text>
      </Text>
    </View>
  );
};

export const SubInfo = ({ creatorImg, handlePress }) => {
  return (
    <TouchableOpacity
      style={{
        width: "100%",
        paddingHorizontal: SIZES.font,
        marginTop: -SIZES.extraLarge,
        flexDirection: "row",
        justifyContent: "flex-start",
        flexDirection: "row",
      }}
      onPress={handlePress}
    >
      <Image
        source={creatorImg}
        resizMode="contain"
        style={{
          width: 48,
          height: 48,
          borderRadius: 25,
          borderColor: COLORS.white,
          borderWidth: 3,
        }}
      />
    </TouchableOpacity>
  );
};

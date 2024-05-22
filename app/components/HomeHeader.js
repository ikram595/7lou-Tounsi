import { View, Text, Image, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { COLORS, FONTS, SIZES, assets, SHADOWS } from "../constants/constants";
import { CircleButton } from "./Buttons";

const HomeHeader = ({ onSearch }) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: COLORS.rocefonce,
        padding: SIZES.font,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Image
          source={assets.logo}
          resizeMode="contain"
          style={{ width: 70, height: 70 }}
        />
        <View style={{ width: 45, height: 45 }}>
          <CircleButton
            imgUrl={assets.cart}
            right={10}
            top={10}
            handlePress={() => navigation.navigate("Purchases")}
          />
        </View>
      </View>
      <View style={{ marginVertical: SIZES.font }}>
        <Text
          style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.small,
            color: COLORS.primary,
          }}
        >
          Salut 👋
        </Text>
        <Text
          style={{
            fontFamily: FONTS.bold,
            fontSize: SIZES.large,
            color: COLORS.primary,
            marginTop: SIZES.base / 2,
          }}
        >
          Découvrez le
          <Text style={{ color: COLORS.violetfonce }}> bonheur sucré </Text>
          avec nos délices sucrés de la Tunisie!
        </Text>
      </View>
      <View style={{ marginTop: SIZES.font }}>
        <View
          style={{
            width: "100%",
            borderRadius: SIZES.font,
            backgroundColor: COLORS.rocefonce,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: SIZES.font,
            paddingVertical: SIZES.small - 2,
            ...SHADOWS.medium,
          }}
        >
          <Image
            source={assets.search}
            resizeMode="contain"
            style={{ width: 20, height: 20, marginRight: SIZES.base }}
          />
          <TextInput
            placeholder="Vous cherchez quoi?"
            style={{ flex: 1 }}
            onChangeText={onSearch}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;

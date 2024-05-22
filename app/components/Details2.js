import { View, Text, Image } from "react-native";
import { SweetPrice } from "./SubInfo";
import { COLORS, SIZES, FONTS } from "../constants/constants";

const Details2 = ({ produit }) => {
  return (
    <View>
      <Image
        source={produit.image}
        resizeMode="contain"
        style={{ height: 150, width: 150 }}
      />
      <View>
        <Text
          style={{
            fontFamily: FONTS.semiBold,
            fontSize: SIZES.small,
            color: COLORS.primary,
          }}
        >
          {produit.name}
        </Text>
        <Text
          style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.small - 2,
            color: COLORS.secondary,
            marginTop: 3,
          }}
        >
          {produit.price}{" "}
          <Text
            style={{
              fontFamily: FONTS.semiBold,
              fontSize: SIZES.small - 2,
              color: COLORS.secondary,
              marginTop: 3,
            }}
          >
            {produit.unit}
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default Details2;

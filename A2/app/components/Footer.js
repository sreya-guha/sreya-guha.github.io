import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  PixelRatio,
} from "react-native";
import { Icons, Themes } from "../../assets/Themes";

// advanced JS syntax: destructure and rename variables
const { height: windowHeight, width: windowWidth } = Dimensions.get("window");

const Footer = () => {
  return (
    <View style={styles.navigationContainer}>
      <View>
        <Image source={Icons.discover.light} />
        <Text>Discover</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navigationContainer: {
    flexDirection: "row",
    backgroundColor: Themes.light.navigation,
    width: windowWidth,
    height: windowHeight * 0.1, // Alternatively, use the `flex` style
  },
});

export default Footer;

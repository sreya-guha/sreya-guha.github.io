import { View, StyleSheet, Text, ImageBackground } from "react-native";
import Profiles from "../../assets/Profiles";

const Body = () => {
  return (
    <View>
      <ImageBackground
        source={Profiles.landay.image}
        style={styles.image}
        imageStyle={styles.imageStyle}
      >
        <Text>{Profiles.landay.name}</Text>
        <Text>{Profiles.landay.caption}</Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  imageStyle: {
    borderRadius: 8,
  },
});

export default Body;

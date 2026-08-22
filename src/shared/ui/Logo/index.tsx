import CommonRegistrationStep from "@/feature/registr/ui/steps/common/first";
import { Image, StyleSheet, Text, View } from "react-native";

const logo = require("./assets/LogoImage.webp");

export default function Logo() {
	return <Image style={styles.image} width={169} height={169} source={logo} />;
}

const styles = StyleSheet.create({
	image: {
		width: 169,
		height: 169,
	},
});

import "react-native-gesture-handler";
import React from "react";
import { Platform, View } from "react-native";
import * as eva from "@eva-design/eva";
import {
  ApplicationProvider,
  Layout,
  Button,
  IconRegistry,
} from "@ui-kitten/components";
import { StyleSheet } from "react-native";
import { default as theme } from "./theme.json"; // <-- Import app theme
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
//screens
import Home from "./screens/Home";
import RecipeDetails from "./screens/RecipeDetails";
import Favourites from "./screens/Favourites";

const { Navigator, Screen } = createStackNavigator();

export default () => (
  <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
    <NavigationContainer>
      <View style={styles.container}>
        <Navigator screenOptions={{ headerShown: false }}>
          <Screen name="home" component={Home} />
          <Screen name="details" component={RecipeDetails} />
          <Screen name="favourites" component={Favourites} />
        </Navigator>
      </View>
    </NavigationContainer>
  </ApplicationProvider>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //flexGrow: 1,
    paddingHorizontal: 25,
    paddingTop: Platform.OS === "android" ? 30 : "",

    backgroundColor: "#fff",

    //alignItems: "center",
    //justifyContent: "center",
  },
});

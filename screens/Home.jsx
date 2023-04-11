import { useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import { Layout, Input, Button, Card } from "@ui-kitten/components";
const Home = ({ navigation }) => {
  const [text, setText] = useState("");
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const searchRecipe = async () => {
    setIsLoading(true);
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`
    );
    if (response.ok) {
      const data = await response.json();
      setResults(data);
      setIsLoading(false);
      console.log(results);
    } else {
      setError(true);
      setIsLoading(false);
    }
  };

  const navigateToDetails = (item) => {
    navigation.navigate("details", { item: item });
  };
  const viewFavourites = async () => {
    let keys = [];
    try {
      keys = await AsyncStorage.getAllKeys();
    } catch (e) {
      // read key error
    }

    console.log(keys);
    navigation.navigate("favourites");
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: "#fff" }}
    >
      <View style={style.container}>
        <Input
          placeholder="e.g rice"
          value={text}
          onChangeText={(nextValue) => setText(nextValue)}
        />
      </View>
      <View style={{ paddingBottom: 25 }}>
        <Button onPress={searchRecipe}>Search Recipe</Button>
      </View>
      <TouchableOpacity onPress={viewFavourites}>
        <View
          style={{
            backgroundColor: "hotpink",
            width: 200,
            height: 40,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: 10,
            borderRadius: 10,
          }}
        >
          <Text style={{ fontWeight: "bold", color: "white" }}>
            View Favourites
          </Text>
        </View>
      </TouchableOpacity>
      {results &&
        results.meals.map((item) => (
          <TouchableOpacity
            key={item.idMeal}
            onPress={() => navigateToDetails(item)}
          >
            <View
              style={{
                marginVertical: 10,
                borderWidth: 0.5,
                borderRadius: 10,
                padding: 10,
              }}
            >
              <View style={{ borderRadius: 10 }}>
                <Image
                  source={{ uri: item.strMealThumb }}
                  style={{
                    width: "auto",
                    height: 150,
                    overflow: "hidden",
                  }}
                />
              </View>
              <View style={{ display: "flex", flexDirection: "row" }}>
                <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                  {item.strMeal}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      {!results && (
        <View>
          <Text>No Recipes To Display, type and hit on search above</Text>
        </View>
      )}
    </ScrollView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    paddingVertical: 25,
    //backgroundColor: "#fff",
  },
});

export default Home;

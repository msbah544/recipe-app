import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRoute } from "@react-navigation/native";
import AntDesign from "@expo/vector-icons/Ionicons";

const RecipeDetails = () => {
  const [data, setData] = useState();
  const [heartColour, setHeartColour] = useState(false);

  const route = useRoute();

  useEffect(() => {
    const result = route.params.item;
    setData(result);
    console.log(result);
  }, []);

  const handleFavourite = async () => {
    //www.themealdb.com/api/json/v1/1/lookup.php?i=52772
    setHeartColour(!heartColour);
    //add to favourites
    const idMeal = await data.idMeal;
    console.log(idMeal);

    //store Item
    if (heartColour) {
      try {
        const jsonValue = JSON.stringify(data);
        await AsyncStorage.setItem(`${data.idMeal}`, jsonValue);
      } catch (e) {
        // saving error
        console.log("error saving object");
      }
    } else {
      try {
        //const jsonValue = JSON.stringify(data);
        await AsyncStorage.removeItem(`${data.idMeal}`);
      } catch (e) {
        // saving error
        console.log("error deleting object");
      }
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ backgroundColor: "#fff", flex: 1 }}>
        <View>
          <Image
            source={{ uri: data && data.strMealThumb }}
            style={{ width: "auto", height: 200 }}
          />
        </View>
        <TouchableOpacity
          onPress={handleFavourite}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AntDesign
            name="heart"
            size={70}
            color={heartColour ? `hotpink` : "lightgray"}
          />
        </TouchableOpacity>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            Recipe Details
          </Text>
          <View style={{ paddingVertical: 10 }}>
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 15, fontWeight: "bold" }}>Origin</Text>
              <Text style={{ fontSize: 15 }}>{data && data.strArea}</Text>
            </View>
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 15, fontWeight: "bold" }}>Category</Text>
              <Text style={{ fontSize: 15 }}>{data && data.strCategory}</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontWeight: "bold" }}>Instructions</Text>
          <View>
            <Text>{data && data.strInstructions && data.strInstructions}</Text>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>Ingredients</Text>
          <View>
            <Text style={{ fontSize: 15 }}>
              {data && data.strIngredient1 && data.strIngredient1}
            </Text>
          </View>
          <View>
            <Text style={{ fontSize: 15 }}>
              {data && data.strIngredient2 && data.strIngredient2}
            </Text>
          </View>
          <View>
            <Text style={{ fontSize: 15 }}>
              {data && data.strIngredient3 && data.strIngredient3}
            </Text>
          </View>
          <View>
            <Text style={{ fontSize: 15 }}>
              {data && data.strIngredient4 && data.strIngredient4}
            </Text>
          </View>
          <View>
            <Text style={{ fontSize: 15 }}>
              {data && data.strIngredient5 && data.strIngredient5}
            </Text>
          </View>
          <View>
            <Text style={{ fontSize: 15 }}>
              {data && data.strIngredient6 && data.strIngredient6}
            </Text>
          </View>
          <View>
            <Text style={{ fontSize: 15 }}>
              {data && data.strIngredient7 && data.strIngredient7}
            </Text>
          </View>
          <View>
            <Text style={{ fontSize: 15 }}>
              {data && data.strIngredient8 && data.strIngredient8}
            </Text>
          </View>
          <View>
            <Text style={{ fontSize: 15 }}>
              {data && data.strIngredient9 && data.strIngredient9}
            </Text>
          </View>
          <View>
            <Text style={{ fontSize: 15 }}>
              {data && data.strIngredient10 && data.strIngredient10}
            </Text>
          </View>
          <View>
            <Text style={{ fontSize: 15 }}>
              {data && data.strIngredient11 && data.strIngredient11}
            </Text>
          </View>
          <View>
            <Text style={{ fontSize: 15 }}>
              {data && data.strIngredient12 && data.strIngredient12}
            </Text>
          </View>
          <View>
            <Text style={{ fontSize: 15 }}>
              {data && data.strIngredient13 && data.strIngredient13}
            </Text>
          </View>
          <View>
            <Text style={{ fontSize: 15 }}>
              {data && data.strIngredient14 && data.strIngredient14}
            </Text>
          </View>
          <View>
            <Text style={{ fontSize: 15 }}>
              {data && data.strIngredient15 && data.strIngredient15}
            </Text>
          </View>
          <View>
            <Text style={{ fontSize: 15 }}>
              {data && data.strIngredient16 && data.strIngredient16}
            </Text>
          </View>
          <View>
            <Text style={{ fontSize: 15 }}>
              {data && data.strIngredient17 && data.strIngredient17}
            </Text>
          </View>
          <View>
            <Text style={{ fontSize: 15 }}>
              {data && data.strIngredient18 && data.strIngredient18}
            </Text>
          </View>
          <View>
            <Text style={{ fontSize: 15 }}>
              {data && data.strIngredient19 && data.strIngredient19}
            </Text>
          </View>
          <View>
            <Text style={{ fontSize: 15 }}>
              {data && data.strIngredient20 && data.strIngredient20}
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default RecipeDetails;

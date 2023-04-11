import React, { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import { useRoute } from "@react-navigation/native";

const RecipeDetails = () => {
  const [data, setData] = useState();
  const route = useRoute();

  useEffect(() => {
    const result = route.params.item;
    setData(result);
    console.log(result);
  }, []);

  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      <View>
        <Image
          source={{ uri: data && data.strMealThumb }}
          style={{ width: "auto", height: 200 }}
        />
      </View>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Recipe Details</Text>
        <View style={{ paddingVertical: 10 }}>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>Origin:</Text>
            <Text style={{ fontSize: 15 }}>{data && data.strArea}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default RecipeDetails;

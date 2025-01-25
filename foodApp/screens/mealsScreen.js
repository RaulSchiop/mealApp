import { MEALS, CATEGORIES } from "../data/dummy-data";
import { View, Text, StyleSheet, FlatList } from "react-native";
import MealsItems from "../components/mealItems";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";

function Meals({ route }) {
   const catID = route.params.categoryId;
   const navigation = useNavigation();

   useLayoutEffect(() => {
      const categoryTitle = CATEGORIES.find(
         (category) => category.id === catID
      ).title;

      navigation.setOptions({
         title: categoryTitle,
      });
   }, [catID, navigation]);

   const displayedMeals = MEALS.filter((mealItem) => {
      return mealItem.categoryIds.indexOf(catID) >= 0;
   });

   function handlePress(itemData) {
      navigation.navigate("DetailPage", { mealID: itemData.item.id });
   }

   return (
      <View style={styles.container}>
         <FlatList
            data={displayedMeals}
            keyExtractor={(item) => item.id}
            renderItem={(itemData) => (
               <MealsItems
               onPress={() => handlePress(itemData)}
                  title={itemData.item.title}
                  image={itemData.item.imageUrl}
                  duration={itemData.item.duration}
                  complexity={itemData.item.complexity}
                  afordability={itemData.item.affordability}
               ></MealsItems>
            )}
         ></FlatList>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      padding: 16,
   },
});
export default Meals;

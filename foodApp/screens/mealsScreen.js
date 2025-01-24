import { MEALS } from "../data/dummy-data";
import { View, Text, StyleSheet, FlatList } from "react-native";
import MealsItems from "../components/mealItems";

function Meals({ route }) {
   const catID = route.params.categoryId;

   const displayedMeals = MEALS.filter((mealItem) => {
      return mealItem.categoryIds.indexOf(catID) >= 0;
   });

   return (
      <View style={styles.container}>
         <FlatList
            data={displayedMeals}
            keyExtractor={(item) => item.id}
            renderItem={(itemData) => (
                <MealsItems title={itemData.item.title}></MealsItems>
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

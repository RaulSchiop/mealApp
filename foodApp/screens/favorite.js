import { View, FlatList, StyleSheet, Text } from "react-native";
import { useSelector } from "react-redux";
import { MEALS } from "../data/dummy-data";
import MealsItems from "../components/mealItems";

function Favorite() {
   const favoriteMeals = useSelector((state) => state.favoritesMeals.ids);

   const displayedMeals = MEALS.filter((meal) => {
      return favoriteMeals.includes(meal.id);
   });

   return (
      <View style={styles.container}>
         {displayedMeals.length === 0 ? (
            <Text> No favorite meals </Text>
         ) : (
            <FlatList
               data={displayedMeals}
               keyExtractor={(item) => item.id}
               renderItem={(itemData) => (
                  <MealsItems
                     title={itemData.item.title}
                     image={itemData.item.imageUrl}
                     duration={itemData.item.duration}
                     complexity={itemData.item.complexity}
                     afordability={itemData.item.affordability}
                  ></MealsItems>
               )}
            ></FlatList>
         )}
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      padding: 16,
   },
});

export default Favorite;

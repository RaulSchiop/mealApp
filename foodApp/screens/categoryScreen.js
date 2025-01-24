import { FlatList, View } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/categoryGridTile";

function CategoryScreen({ navigation }) {

    function handlePress(itemData) {
        navigation.navigate("Meals",{
            categoryId:itemData.item.id
        });
     }
     

   return (
      <View>
         <FlatList
            numColumns={2}
            keyExtractor={(item) => item.id}
            data={CATEGORIES}
            renderItem={(itemData) => (
               <CategoryGridTile 
                  onPress={()=>handlePress(itemData)}
                  title={itemData.item.title}
                  color={itemData.item.color}
               ></CategoryGridTile>
            )}
         />
      </View>
   );
}

export default CategoryScreen;

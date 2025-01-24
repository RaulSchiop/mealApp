
import { FlatList, View } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/categoryGridTile";
function CategoryScreen(){

    return (

        <View>
            <FlatList numColumns={2} keyExtractor={(item)=>item.id} data={CATEGORIES} renderItem={(itemData)=>(
                <CategoryGridTile title={itemData.item.title} color={itemData.item.color}></CategoryGridTile>
            )} />
        </View>



    )

}

export default CategoryScreen;

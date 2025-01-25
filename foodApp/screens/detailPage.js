import { useRoute } from "@react-navigation/native";
import { Text, View,StyleSheet } from "react-native";

function DetailPage() {
    const route=useRoute()



   return (
      <View>
         <Text style={styles.text}>{route.params.mealID}</Text>
      </View>
   );
}
const styles=StyleSheet.create({
   text:{
      color:"white",
   }
})
export default DetailPage;

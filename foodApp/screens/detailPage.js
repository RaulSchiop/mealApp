import { useRoute } from "@react-navigation/native";
import { Text, View, StyleSheet, Image, ScrollView, Button } from "react-native";
import { MEALS } from "../data/dummy-data";
import { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

function DetailPage() {
   const route = useRoute();
   const mealsId = route.params.mealID;
   const selectedMeals = MEALS.find((item) => item.id === mealsId);
   const navigation = useNavigation();
   useLayoutEffect(() => {

      navigation.setOptions({
         headerRight:()=>{
            return <Button title="tap me"></Button>
         }
      })

   }, [navigation,mealsId]);

   return (
      <View style={styles.container}>
         <View>
            <Image
               style={styles.image}
               source={{ uri: selectedMeals.imageUrl }}
            ></Image>
            <Text
               style={[
                  styles.text,
                  {
                     marginVertical: 10,
                     textAlign: "center",
                     fontWeight: "bold",
                     fontSize: 25,
                  },
               ]}
            >
               {selectedMeals.title}
            </Text>
         </View>
         <View style={styles.secText}>
            <Text style={styles.text}>{selectedMeals.duration} min</Text>
            <Text style={styles.text}>
               {selectedMeals.complexity.toUpperCase()}
            </Text>
            <Text style={styles.text}>
               {selectedMeals.affordability.toUpperCase()}
            </Text>
         </View>
         <ScrollView>
            <View style={styles.ingredAndStepsCont}>
               <Text
                  style={[
                     styles.text,
                     {
                        fontSize: 20,
                        marginVertical: 10,
                        fontWeight: 500,
                        textAlign: "center",
                     },
                  ]}
               >
                  Ingredients
               </Text>
               {selectedMeals.ingredients.map((item) => (
                  <Text style={styles.listText}>{item}</Text>
               ))}
            </View>
            <View style={styles.ingredAndStepsCont}>
               <Text
                  style={[
                     styles.text,
                     {
                        fontSize: 20,
                        marginVertical: 10,
                        fontWeight: 500,
                        textAlign: "center",
                     },
                  ]}
               >
                  Steps
               </Text>
               {selectedMeals.steps.map((item) => (
                  <Text style={styles.listText}>{item}</Text>
               ))}
            </View>
         </ScrollView>
      </View>
   );
}
const styles = StyleSheet.create({
   text: {
      color: "white",
   },
   listText: {
      color: "black",
      marginVertical: 5,
      textAlign: "center",
      backgroundColor: "white",
      padding: 5,
      borderRadius: 10,
   },
   container: {
      flex: 1,
   },
   secText: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: 20,
      color: "white",
      marginBottom: 20,
   },
   image: {
      width: "100%",
      height: 300,
   },
   ingredAndStepsCont: {
      paddingHorizontal: 20,
      marginVertical: 10,
   },
});
export default DetailPage;

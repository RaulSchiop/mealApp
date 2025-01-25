import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import CategoryScreen from "./screens/categoryScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Meals from "./screens/mealsScreen";
import DetailPage from "./screens/detailPage";

export default function App() {
   const Stack = createNativeStackNavigator();

   return (
      <>
         <StatusBar style="light"></StatusBar>
         <NavigationContainer>
         <Stack.Navigator
               screenOptions={{
                  headerStyle: {
                     backgroundColor: "black", 
                  },
                  headerTintColor: "white",
                  headerTitleAlign: "center", 
                  contentStyle: { backgroundColor: "black" }, 
               }}
               initialRouteName="Meals Categories"
            >
               <Stack.Screen
                  name="Meals Categories"
                  component={CategoryScreen}
                  options={{
                     title: "All meals catrgories",
                  }}
               />
               <Stack.Screen name="Meals" component={Meals} />
               <Stack.Screen name="DetailPage" component={DetailPage}/>
            </Stack.Navigator>
         </NavigationContainer>
      </>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
   },
});

import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import CategoryScreen from "./screens/categoryScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Meals from "./screens/mealsScreen";

export default function App() {
   const Stack = createNativeStackNavigator();

   return (
      <>
         <StatusBar style="dark"></StatusBar>
         <NavigationContainer>
            <Stack.Navigator initialRouteName="Meals Categories">
               <Stack.Screen
                  name="Meals Categories"
                  component={CategoryScreen}
               />
               <Stack.Screen name="Meals" component={Meals} />
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

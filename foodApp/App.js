import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import CategoryScreen from "./screens/categoryScreen";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
   return (
      <>
         <StatusBar style="light"></StatusBar>
         <NavigationContainer>
            <CategoryScreen></CategoryScreen>
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

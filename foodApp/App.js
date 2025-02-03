import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import CategoryScreen from "./screens/categoryScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Meals from "./screens/mealsScreen";
import DetailPage from "./screens/detailPage";
import Favorite from "./screens/favorite";
import {Provider} from "react-redux"
import { store } from "./state/store";


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNav() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "black",
        },
        headerTintColor: "white",
        headerTitleAlign: "center",
        drawerStyle: {
          backgroundColor: "black",
          width: 240,
        },
        drawerActiveBackgroundColor: "white",
        drawerActiveTintColor: "black",
        drawerInactiveTintColor: "white",
        sceneContainerStyle: { 
          backgroundColor: 'black' // Apply sceneContainerStyle at the Drawer.Navigator level
        },
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoryScreen}
        options={{
          drawerLabel: 'Categories', 
        }}
      />
      <Drawer.Screen name="Favorite" component={Favorite} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light"></StatusBar>
      <Provider store={store}>
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
          initialRouteName="Drawer"
        >
          <Stack.Screen
            name="Drawer"
            component={DrawerNav}
            options={{
              title: "Meals Categories",
              headerShown: false,
            }}
          />
          <Stack.Screen name="Meals" component={Meals} />
          <Stack.Screen
            name="DetailPage"
            component={DetailPage}
          ></Stack.Screen>
        </Stack.Navigator>

      </NavigationContainer>
      </Provider>
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
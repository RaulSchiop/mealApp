import { Pressable, View, Text, StyleSheet, Platform } from "react-native";

function CategoryGridTile({ title, color }) {
   return (
      <View style={styles.gridItem}>
         <Pressable
            style={({ pressed }) => [
               styles.button,
               pressed ? styles.buttonPresse : null,
            ]}
            android_ripple={{ color: "ccc" }}
         >
            <View
               style={[
                  styles.textContainer,
                  { backgroundColor: color, borderRadius: 8 },
               ]}
            >
               <Text style={styles.title}>{title}</Text>
            </View>
         </Pressable>
      </View>
   );
}

const styles = StyleSheet.create({
   button: {
      flex: 1,
   },
   buttonPresse: {
      opacity: 0.5,
   },
   gridItem: {
      flex: 1,
      margin: 16,
      height: 150,
      borderRadius: 8,
      elevation: 4,
      shadowColor: "black",
      shadowOpacity: "0.25",
      backgroundColor: "white",
      shadowOffset: { height: 0, width: 2 },
      shadowRadius: 8,
      overflow: Platform.OS == "android" ? "hidden" : "visible",
   },
   textContainer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      padding: 16,
   },
   title: {
      fontSize: 18,
      fontWeight: "bold",
   },
});

export default CategoryGridTile;

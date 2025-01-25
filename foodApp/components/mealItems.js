import {
   View,
   Image,
   Text,
   StyleSheet,
   Pressable,
   Platform,
} from "react-native";

function MealsItems({
   title,
   image,
   duration,
   complexity,
   afordability,
   onPress,
}) {
   return (
      <View style={styles.container}>
         <Pressable
            onPress={onPress}
            style={({ pressed }) => [
               styles.button,
               pressed ? styles.pressed : null,
            ]}
            android_ripple={{ color: "ccc" }}
         >
            <View>
               <Image
                  style={styles.image}
                  source={{ uri: image }}
                  resizeMode="cover"
               ></Image>
               <Text style={styles.text}>{title}</Text>
            </View>
            <View style={styles.secText}>
               <Text>{duration} min</Text>
               <Text>{complexity.toUpperCase()}</Text>
               <Text>{afordability.toUpperCase()}</Text>
            </View>
         </Pressable>
      </View>
   );
}

const styles = StyleSheet.create({
   button: {
      flex: 1,
   },
   pressed: {
      opacity: 0.9,
   },
   container: {
      flex: 1,
      marginVertical: 20,
      marginHorizontal: 10,
      borderRadius: 20,
      backgroundColor: "white",
      shadowColor: "black",
      elevation: 5,
      shadowColor: "black",
      shadowOpacity: "0.25",
      backgroundColor: "white",
      shadowOffset: { height: 0, width: 2 },
      shadowRadius: 8,
      overflow: Platform.OS == "android" ? "hidden" : "visible",
   },
   image: {
      height: 300,
      width: "100%",
   },
   text: {
      textAlign: "center",
      fontSize: 20,
      fontWeight: "500",
      marginTop: 10,
   },
   secText: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: 20,
      marginVertical: 10,
   },
});

export default MealsItems;

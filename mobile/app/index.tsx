import { Image } from "expo-image";
import { Text, View } from "react-native";


export default function Index() {
  return (
    <View
    >
      <Text style={{
        color: "green"
      }}>Hello world.</Text>
      <Image source={{uri: "https://plus.unsplash.com/premium_photo-1751107029838-c341391ea8b2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"}}/>
    </View>
  );
}

const styles = ({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  }
})
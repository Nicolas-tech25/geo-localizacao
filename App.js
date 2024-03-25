import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MapView from "react-native-maps";

export default function App() {
  const regiaoInicialMapa = {
    latitude: -10,
    longitude: -55,
    latitudeDelta: 40,
    longitudeDelta: 40,
  };
  return (
    <>
      <StatusBar style="auto" />
      <View style={estilo.container}>
        <MapView
          mapType="hybrid"
          style={estilo.mapa}
          initialRegion={regiaoInicialMapa}
          userInterfaceStyle="dark "
          maxZoomLevel={15}
          minZoomLevel={5}
        />
      </View>
    </>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mapa: {
    width: "100%",
    height: "100%",
  },
});

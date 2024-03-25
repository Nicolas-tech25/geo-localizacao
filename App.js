import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function App() {
  const regiaoInicialMapa = {
    // latitude: -10,
    // longitude: -55,

    latitude: -23.533773,
    longitude: -46.65529,
    latitudeDelta: 40,
    longitudeDelta: 40,
  };
  const localizacao = {
    latitude: -33.867886,
    longitude: -63.987,
    latitudeDelta: 10,
    longitudeDelta: 10,
  };
  return (
    <>
      <StatusBar style="auto" />
      <View style={estilo.container}>
        <MapView
          mapType="standart"
          style={estilo.mapa}
          initialRegion={regiaoInicialMapa}
          userInterfaceStyle="dark "
          // maxZoomLevel={15}
          // minZoomLevel={5}
        >
          <Marker coordinate={localizacao}>
            <Image source={require("./assets/ghost.png")} />
          </Marker>
        </MapView>
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

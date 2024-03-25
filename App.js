import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function App() {
  const [localizacao, setLocalizacao] = useState({
    latitude: -33.867886,
    longitude: -63.987,
    latitudeDelta: 10,
    longitudeDelta: 10,
  });
  const regiaoInicialMapa = {
    // latitude: -10,
    // longitude: -55,

    latitude: -23.533773,
    longitude: -46.65529,
    latitudeDelta: 40,
    longitudeDelta: 40,
  };
  const marcarLocal = (event) => {
    console.log(event.nativeEvent);
    setLocalizacao({
      ...localizacao,
      latitude: event.nativeEvent.coordinate.latitude,
      longitude: event.nativeEvent.coordinate.longitude,
    });
  };
  return (
    <>
      <StatusBar style="auto" />
      <View style={estilo.container}>
        <MapView
          onPress={marcarLocal}
          mapType="standart"
          style={estilo.mapa}
          initialRegion={regiaoInicialMapa}
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

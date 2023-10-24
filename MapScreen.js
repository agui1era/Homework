import React, { useEffect, useState } from 'react';
import MapView, { Marker, Callout } from 'react-native-maps';
import axios from 'axios';
import { Text, StyleSheet, ActivityIndicator, View } from 'react-native';
import { API_ENDPOINT, API_KEY } from './config';

const MapScreen = () => {
  const [chargePoints, setChargePoints] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${API_ENDPOINT}?key=${API_KEY}`)
      .then(response => {
        console.log("Datos recibidos:", response.data);
        setChargePoints(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 40.4168,
        longitude: -3.7038,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.5,
      }}
    >
      {chargePoints.map(point => (
        <Marker
          key={point.ID}
          coordinate={{
            latitude: point.AddressInfo.Latitude,
            longitude: point.AddressInfo.Longitude
          }}
          title={point.OperatorInfo ? point.OperatorInfo.Title : 'Desconocido'}
          description={point.StatusType ? point.StatusType.Title : 'Desconocido'}
        >
          <Callout style={styles.callout}>
            <Text style={styles.boldText}>ID: {point.ID}</Text>
            <Text>Estado: {point.StatusType ? point.StatusType.Title : 'Desconocido'}</Text>
            <Text>Operador: {point.OperatorInfo ? point.OperatorInfo.Title : 'Desconocido'}</Text>
            <Text>N° Conexiones: {point.Connections ? point.Connections.length : 0}</Text>
            <Text>Coordenadas: {point.AddressInfo.Latitude}, {point.AddressInfo.Longitude}</Text>
            <Text>País: {point.AddressInfo.Country ? point.AddressInfo.Country.Title : 'Desconocido'}</Text>
          </Callout>
        </Marker>
      ))}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  callout: {
    width: 250,
  },
  boldText: {
    fontWeight: 'bold',
    marginBottom: 5
  }
});

export default MapScreen;

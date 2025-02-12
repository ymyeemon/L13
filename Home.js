import React, { useState, useEffect } from "react";
import { ImageBackground, StyleSheet, FlatList, StatusBar, Text, TextInput, TouchableOpacity, View } from "react-native";

let originalData = [];

const styles = StyleSheet.create({
    title: {
        fontFamily: 'Arial',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingBottom: 50,
        paddingTop: 50,
    },

    label: {
        fontSize: 18,
        fontWeight: 'bold',
        marginHorizontal: 20,
        marginTop: 10,
    },

    input: {
        paddingHorizontal: 20,
        fontSize: 17,
        height: 40,
        marginVertical: 10,
        marginHorizontal: 20,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 15,
    },

    flatlist: {
        height: 555,
        marginTop: 30,
    },

    listitem: {
        fontWeight: 'bold',
        fontSize: 17,
        marginHorizontal: 20,
        padding: 20,
        borderBottomWidth: 0.8,
        borderBottomColor: 'black',
    }
})

const Home = ({navigation}) => {
  const [myData, setMyData] = useState([]);

  useEffect( () => {
    fetch("https://api-open.data.gov.sg/v2/real-time/api/wind-speed")

    .then((response) => {
      return response.json();
    })

    .then((myJson) => {
      if (originalData.length < 1) {
        setMyData(myJson.data.stations);
        originalData = myJson.data.stations;
      }
    });
  }, [])

  const FilterData = (text) => {
    if (text!='') {
      let myFilteredData = originalData.filter((item) =>
        item.name.includes(text));
      setMyData(myFilteredData);
    }

    else {
      setMyData(originalData);
    }
  }

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
      onPress={() => {
        navigation.navigate("Details", 
        {index: index, 
        deviceId: item.deviceId,
        name: item.name,
        latitude: item.location.latitude,
        longitude: item.location.longitude,
        });
      }}>
        <Text style={styles.listitem}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <ImageBackground
    source={{uri: "https://img.freepik.com/free-photo/vivid-blurred-colorful-wallpaper-background_58702-3508.jpg"}}>

    <View>
      <StatusBar/>
      <Text style={styles.title}>Wind Speed Stations Location Across Singapore</Text>

      <Text style={styles.label}>Search:</Text>
      <TextInput
      style={styles.input}
      placeholder="Search location"
      onChangeText={(text) => {FilterData(text)}}/>
      <FlatList
      style={styles.flatlist}
      data={myData} 
      renderItem={renderItem} />
    </View>
    </ImageBackground>
  )
}

export default Home;
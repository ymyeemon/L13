import React, {useState} from 'react';
import { StyleSheet, StatusBar, View, Button, Text, ImageBackground } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    box: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 30,
        height: 400,
        width: 350,
        justifyContent: 'space-around',
        borderColor: 'black',
    },

    title: {
        fontFamily: 'Arial',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    text: {
        fontSize: 17,
        paddingBottom: 20,
        paddingTop: 20,
        textAlign: 'center',
        borderColor: 'black',
        borderBottomWidth: 1,
    }
});

const Details = ({navigation, route}) => {
    const { name, deviceId, latitude, longitude } = route.params;

    return (
        <ImageBackground
        style={{flex: 1}}
        source={{uri: "https://img.freepik.com/free-photo/vivid-blurred-colorful-wallpaper-background_58702-3508.jpg"}}>
        
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.title}>{name}</Text>
                <View>
                    <Text style={styles.text}>Device ID: {deviceId}</Text>
                    <Text style={styles.text}>Latitude: {latitude}</Text>
                    <Text style={styles.text}>Longitude: {longitude}</Text>
                </View>
            </View>
        </View>

        </ImageBackground>
    )
}

export default Details;
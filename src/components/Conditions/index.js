import React from 'react';
import { View, Text } from 'react-native';
import {Feather, MaterialCommunityIcons} from '@expo/vector-icons';

import { styles } from './styles';

export default function Conditions({weather}) {

    return (
        <View style={styles.container}>
            <View style={styles.condition}>
                <MaterialCommunityIcons name="weather-windy" size={23} color="#1ed6ff" />
                <Text>{weather.results.wind_speedy}</Text>
            </View>

            <View style={styles.condition}>
                <MaterialCommunityIcons name="weather-sunset-up" size={23} color="#1ed6ff" />
                <Text>{weather.results.sunrise}</Text>
            </View>

            <View style={styles.condition}>
                <MaterialCommunityIcons name="weather-sunset-down" size={23} color="#1ed6ff" />
                <Text>{weather.results.sunset}</Text>
            </View>
            
            <View style={styles.condition}>
                <MaterialCommunityIcons name="water-outline" size={23} color="#1ed6ff" />
                <Text>{weather.results.humidity}</Text>
            </View>
        </View>
    )
}

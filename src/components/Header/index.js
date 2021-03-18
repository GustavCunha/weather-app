import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, StyleSheet } from 'react-native';

import {Ionicons} from '@expo/vector-icons';

import { styles } from './styles';

export default function Header({background, weather, icon}) {
    return (
        <LinearGradient 
            style={styles.header}
            colors={background}
        >
            <Text style={styles.date}>{weather.results.date}</Text>
            <Text style={styles.city}>{weather.results.city_name}</Text>
            
            <Ionicons 
                name={icon.name}
                color={icon.color}
                size={150}
            />

            <Text style={styles.temp}>{weather.results.temp}°</Text>
        </LinearGradient>
    )
}

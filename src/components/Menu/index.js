import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {Feather} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';

export default function Menu() {

    const navigation = useNavigation();

    return (
        <TouchableOpacity 
            style={styles.container} 
            onPress={()=> navigation.openDrawer()}
            activeOpacity={0.5}
        >
            <Feather name="menu" size={36} color="#373737"/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        zIndex: 9,
        width: 60,
        height: 60,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        left: 10,
        top: 40,
        borderTopRightRadius: 35,
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35,
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 1, 
            height:3
        }
    }
});

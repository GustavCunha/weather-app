import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, TextInput, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import Conditions from '../../components/Conditions';

import API, {key} from '../../services/api';

import { styles } from './styles';

export default function Search() {

    const navigation = useNavigation();

    const [input, setInput] = useState('');
    const [city, setCity] = useState(null);
    const [error, setError] = useState(null);

    function toHome(){
        navigation.navigate('Home');
    }

    async function handleSearch(){
        const response = await API.get(`/weather?key=${key}&city_name=${input}`);
        // console.log(response.data);
        if(response.data.by === 'default'){
            setError('Humm, cidade não encontrada!');
            setInput('');
            setCity(null);
            Keyboard.dismiss();
            return;
        }

        setCity(response.data);
        setInput('');
        Keyboard.dismiss();
    }

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={toHome}>
                <Feather 
                    name="chevron-left"
                    size={32}
                    color="#000"
                />
                <Text style={styles.return}>Voltar</Text>
            </TouchableOpacity>

            <View style={styles.searchBox}>
                <TextInput
                    value={input}
                    onChangeText={setInput}
                    placeholder='Ex: Campinas, SP'
                    style={styles.input}
                />

                <TouchableOpacity style={styles.icon} onPress={handleSearch}>
                    <Feather 
                        name="search"
                        size={22}
                        color="#FFF"
                    />
                </TouchableOpacity>
            </View>

            {error && <Text style={styles.error}>{error}</Text>}

            {city !== null && (
                <LinearGradient
                    style={styles.card}
                    colors={['#1ed6ff', '#97c1ff']}
                >
                    <Text style={styles.date}>{city.results.date}</Text>
                    <Text style={styles.city}>{city.results.city_name}</Text>

                    <View>
                        <Text style={styles.temp}>{city.results.temp}°</Text>
                    </View>

                    <Conditions weather={city} />
                </LinearGradient>
            )}
            
        </SafeAreaView>
    )
}

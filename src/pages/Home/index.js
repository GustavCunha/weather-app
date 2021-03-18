import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, FlatList } from 'react-native';
import * as Location from 'expo-location';

import Menu from '../../components/Menu';
import Header from '../../components/Header';
import Conditions from '../../components/Conditions';
import Forecast from '../../components/Forecast';

import API, { key } from '../../services/api';

import { styles } from './styles';

export default function Home() {

    const [errorMsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(true);
    const [weather, setWeather] = useState([]);
    const [icon, setIcon] = useState({ name: 'cloud', color:'#FFF'});
    const [background, setBackground] = useState(['#1ed6ff', '#97c1ff']);

    useEffect(()=>{

        (async ()=> {
            let {status} = await Location.requestPermissionsAsync();

            if(status !== 'granted'){
                setErrorMsg('Permissão negada para acessar localização');
                setLoading(false);
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            // console.log(location.coords);

            const response = await API.get(`/weather?key=${key}&lat=${location.coords.latitude}&lon=${location.coords.longitude}`);
            // console.log(response.data);
            setWeather(response.data);

            if (response.data.results.currently === 'noite') {
                setBackground(['#0c3741', '#0d2d61']);
            }

            switch (response.data.results.condition_slug) {
                case 'clear_day':
                    setIcon({name: 'sunny', color: '#FFB300'})
                    break;
                case 'rain':
                    setIcon({name: 'rainy', color: '#1ec9ff'})
                    break;
                case 'storm':
                    setIcon({name: 'thunderstorm', color: '#223d47'})
                    break;
                default:
                    setIcon({name: 'cloud', color: '#FFF'})
                    break;
            }

            setLoading(false);

        })(); 

    },[]);

    if(loading){
        return(
            <View style={styles.container}>
                <Text style={{fontSize: 17, fontStyle: 'italic'}}>Carregando dados...</Text>
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>

            <Menu />

            <Header background={background} weather={weather} icon={icon} />

            <Conditions weather={weather} />

            <FlatList 
                style={styles.list}
                data={weather.results.forecast}
                keyExtractor={item => item.date}
                renderItem={({ item }) => <Forecast data={item} />}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{paddingBottom: '5%'}}
            />

        </SafeAreaView>
    )
}

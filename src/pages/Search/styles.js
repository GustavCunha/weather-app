import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        paddingTop: '10%',
        backgroundColor: '#e8f0ff',
    },
    backButton:{
        flexDirection: 'row',
        marginLeft: 15,
        alignSelf: 'flex-start',
        alignItems: 'center',
        marginBottom: 10,
    },
    return: {
        fontSize: 22
    },
    searchBox:{
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#DDD',
        width: '90%',
        height: 50,
        borderRadius: 8
    },
    input:{
        width: '85%',
        height: 50,
        backgroundColor: '#FFF',
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        padding: 7
    },
    icon:{
        backgroundColor: '#1ed6ff',
        width: '15%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        borderBottomRightRadius: 8,
        borderTopRightRadius: 8
    },
    error:{
        marginTop: 25,
        fontSize: 18
    },
    card:{
        marginTop:'5%',
        width: '90%',
        paddingVertical: '5%',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 8
    },
    date:{
        color: '#FFF',
        fontSize: 16
    },
    city:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFF'
    },
    temp:{
        color: '#FFF',
        fontSize: 90,
        fontWeight: 'bold'
    }
})
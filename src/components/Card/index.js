import React from 'react'

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

function Card ({text, button}) {
    return(
        <View style={style.container}>
            <Text style={style.text}>{text}</Text>
            <TouchableOpacity
                onPress={button.action}
                style={style.button}
            >
                <Text style={style.buttonText}>{button.label}</Text>
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: 'black',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 2,
        elevation: 3,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 24
    },
    button: {
        marginTop: 20,
    },
    buttonText: {
        color: 'red',
        fontWeight: 'bold'
    }
})

export default Card
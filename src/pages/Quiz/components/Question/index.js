import React from 'react'

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

import Card from './../../../../components/Card'

function Question ({deck, currentStep, handleAnswer, sides, cardSide,handleSideChange}) {
    return (
        <View style={style.wrapper}>
        <View style={style.header}>
            <Text>{`Step: ${currentStep + 1}/${deck?.cards.length}`}</Text>
        </View>
        <View style={style.container}>
            <View style={style.cardContainer}>
                {
                    cardSide === sides.FRONT 
                    ? (
                        <Card 
                            text={deck?.cards[currentStep]?.question}
                            button={{
                                label: 'Answer',
                                action: handleSideChange
                            }}
                        />
                    )
                    : (
                        <Card
                            text={deck?.cards[currentStep].answer}
                            button={{
                                label: 'Question',
                                action: handleSideChange
                            }} 
                        />
                    )
                }
            </View>
            <View style={style.buttonsContainer}>
                <TouchableOpacity
                    style={[style.button, {backgroundColor: 'green'}]}
                    onPress={() => handleAnswer(true)}
                >
                    <Text style={style.buttonText}>Correct</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[style.button, {backgroundColor: 'red'}]}
                    onPress={() => handleAnswer(false)}
                >
                    <Text style={style.buttonText}>Incorrect</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
    )
}

const style = StyleSheet.create({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: '55%'
    },
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    header:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: '100%',
        marginTop: 20,
        marginLeft: 20
    },
    cardContainer: {
        width: '100%',
        maxWidth: '80%',
        marginTop: 20,
        backgroundColor: 'red'
    },
    button: {
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 30,
    },
    buttonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 20,
    },
    buttonsContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'space-between',
        width: '100%',
        maxWidth: '80%'
    }
})

export default Question
import React, { useEffect } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import Button from './../../../../components/Button'

import {calcPercentage} from './../../../../core/utils'
import { 
    clearLocalNotification,
    registerNotification
} from './../../../../core/notification'

function Result ({answers, deck, handleResetQuiz, handleGoBack}) {

    useEffect(() => {
        clearLocalNotification().then(registerNotification)
    }, [])
    const totalQuestions = deck.cards.length

    return (
        <View style={style.wrapper}>
            <Text style={style.title}>Final Score</Text>
            <Text style={[style.answer, {color: 'green'}]}>
                <Text style={style.label}>Correct: </Text>
                <Text>{`${calcPercentage(totalQuestions, answers.correct)}%`}</Text>
            </Text>

            <Text style={[style.answer, {color: 'red'}]}>
                <Text>Incorrect: </Text>
                <Text>{`${calcPercentage(totalQuestions, answers.incorrect)}%`}</Text>
            </Text>

            <Button style={{marginTop: 40}} label='Restart Quiz' onPress={handleResetQuiz}/>
            <Button style={{marginTop: 20}} outlined label='Go Back' onPress={handleGoBack}/>
        </View>
    )
}

const style = StyleSheet.create({
    wrapper: {
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 40
    },
    answer: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    restartButton: {

    }
})

export default Result
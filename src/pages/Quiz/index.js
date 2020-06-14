import React, { useEffect, useState } from 'react'

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

import Question from './components/Question'
import Result from './components/Result'

function Quiz ({ route, navigation: { goBack }}) {
    
    const sides = {
        FRONT: 'FRONT',
        BACK: 'BACK'
    }

    const [deck, setDeck] = useState()
    const [currentStep, setCurrentStep] = useState(0)
    const [cardSide, setCardSide] = useState(sides.FRONT)
    const [answers, setAnswers] = useState({correct: 0, incorrect: 0})

    useEffect(() => {
        if(route.params?.deck) setDeck(route.params.deck)
    }, [route.params?.deck])

    const handleGoBack = () => goBack()

    const nextStep = () => {
        setCurrentStep(currentStep + 1)
        setCardSide(sides.FRONT)
    }

    const handleSideChange = () => {
        if(cardSide === sides.FRONT) setCardSide(sides.BACK)
        else setCardSide(sides.FRONT)
    }

    const handleAnswer = answer => {
        if(answer) setAnswers({...answers, correct: answers.correct + 1})
        else setAnswers({...answers, incorrect: answers.incorrect + 1})


        nextStep()
    }

    const handleResetQuiz = () => {
        setCurrentStep(0)
        setAnswers({correct: 0, incorrect: 0})
        setCardSide(sides.FRONT)
    }

    if(!deck || !deck.cards.length){
        return (
            <View style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text style={{fontWeight: 'bold', fontSize: 30}}>NO CARDS</Text>
            </View>
        )
    }

    return (
        currentStep < deck?.cards.length || currentStep === 0 
        ? <Question
            deck={deck}
            sides={sides}
            handleSideChange={handleSideChange}
            currentStep={currentStep}
            handleAnswer={handleAnswer}
            cardSide={cardSide}
            />
        : <Result
        answers={answers}
            deck={deck} 
            handleResetQuiz={handleResetQuiz}
            handleGoBack={handleGoBack}
            />
    )
}



export default Quiz
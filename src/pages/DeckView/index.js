import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    StyleSheet,
} from 'react-native'
import Button from './../../components/Button'
import { _getDeck } from './../../core/api'
import { useIsFocused } from '@react-navigation/native';

function DeckView ({ route, navigation}) {

    const [deck, setDeck] = useState()
    const isFocused = useIsFocused()

    useEffect(() => {
        if(route.params?.deck) setDeck(route.params.deck)
    }, [route.params?.deck])

    useEffect(() => {
        if(isFocused && deck?.id) {
            _getDeck(deck.id).then(res => setDeck(res))
        }
    }, [isFocused])

    const handleAddCard = () => {
        navigation.push('AddCard', { deck })
    }

    const handleStartQuiz = () => {
        navigation.push('Quiz', { deck })
    }
    
    return (
        <View style={style.container}>
            <Text style={style.deckTitle}>{deck?.title}</Text>
            <Text> {`${deck?.cards.length} Cards`}</Text>
            <Button
                style={{marginTop: 10, paddingHorizontal: 50}}
                outlined label='Add Card'
                onPress={handleAddCard}
            />
            <Button
                style={{marginTop: 10, paddingHorizontal: 50}}
                label='Start Quiz'
                onPress={handleStartQuiz}
            />
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100%'
    },
    deckTitle: {
        fontSize: 48,
        fontWeight: 'bold',
    },
})

export default DeckView
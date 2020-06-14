import React, { useEffect, useState } from 'react'
import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import { 
    View,
    Text,
    ScrollView,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import { 
    _getDecks,
    _deleteDeck
} from './../../../../core/api'

function DecksList({
    navigateToDeck
}) {

    const [decks, setDecks] = useState([])
    const isFocused = useIsFocused()


    useEffect(() => {
        if(isFocused) {
            _getDecks().then(res => setDecks(res)) 
        }
    },[isFocused])

    return(
        <ScrollView>
            <View style={style.container}>
                {
                    decks.map((deck, index) => (
                        <TouchableOpacity 
                            style={style.item}
                            onPress={() => navigateToDeck(deck)}
                            key={index}
                        >
                            <Text style={style.title}>{deck.title}</Text>
                            <Text style={style.cardsQuantities}>{deck.cards.length} Cards</Text>
                        </TouchableOpacity>
                    ))
                }
            </View>
        </ScrollView>
    )
}

const style = StyleSheet.create({
    container:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    item:{
        marginTop: 50,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 40,
        marginBottom: 5
    },
    cardsQuantities: {
        fontSize: 16
    }
})

export default DecksList
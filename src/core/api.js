import AsyncStorage from '@react-native-community/async-storage'
import { generateUUID } from './utils'
const DECKS = 'DECKS'

export const _getDecks = async () => {
    try {
        let jsonValue = await AsyncStorage.getItem(DECKS)
        jsonValue = JSON.parse(jsonValue)
        return jsonValue !== null 
        ? Object.keys(jsonValue).map(key => jsonValue[key]) 
        : []
    } catch(e) {
        console.error(e)
    }
}

export const _getDeck = async (id) => {
    try{
        const jsonValue = await AsyncStorage.getItem(DECKS)
        const decks = JSON.parse(jsonValue)
        return decks[id]
    } catch(e) {
        console.error(e)
    }
}

export const _saveDeckTitle = async (title) => {
    try {
        const UUID = generateUUID()
        const jsonValue = await AsyncStorage.getItem(DECKS)
        let decks = JSON.parse(jsonValue)
        const newDeck = {
            id: UUID,
            title,
            cards: []
        }

        decks = {
            ...decks,
            [UUID]: newDeck
        }
        await AsyncStorage.setItem(DECKS, JSON.stringify(decks))

        return newDeck

    } catch(e) {
        console.error(e)
    }
}

export const _addCardToDeck = async (id, card) => {
    try{
        const jsonValue = await AsyncStorage.getItem(DECKS)
        let decks = JSON.parse(jsonValue)
        decks = {
            ...decks,
            [id]: {
                ...decks[id],
                cards: [
                    ...decks[id].cards,
                    {...card}
                ]
            }
        }
        await AsyncStorage.setItem(DECKS, JSON.stringify(decks))
    } catch(e) {
        console.error(e)
    }
}
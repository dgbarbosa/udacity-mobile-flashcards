import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import AddDecks from './Tabs/AddDecks'
import DecksList from './Tabs/DecksList'

const Tab = createBottomTabNavigator()

function Home({navigation}) {
    
    const navigateToDeck = (deck) =>{
        navigation.push('Deck', { deck })
    }

    return(
            <Tab.Navigator tabBarOptions={{
                safeAreaInsets: {
                    bottom: 30,

                },
                labelStyle: {
                    fontSize: 20,
                    fontWeight: 'bold'
                }
            }}>
                <Tab.Screen
                    name='Decks'
                >
                    {() => <DecksList navigateToDeck={navigateToDeck}/>}
                </Tab.Screen>

                <Tab.Screen
                    name='Add Deck'
                    
                >
                    {() => <AddDecks navigateToDeck={navigateToDeck} />}
                </Tab.Screen>
            </Tab.Navigator>
    )
}

export default Home
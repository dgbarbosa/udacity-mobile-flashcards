import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { registerNotification } from './src/core/notification'


import Home from './src/pages/Home'
import DeckView from './src/pages/DeckView'
import AddCard from './src/pages/AddCard'
import Quiz from './src/pages/Quiz'

const Stack = createStackNavigator();
const { Screen, Navigator } = Stack

function App() {

  const register = async () => {
    await Notifications.cancelAllScheduledNotificationsAsync()
    // await Notifications.createChannelAndroidAsync('default', {
    //   name: 'default',
    //   sound: true,
    //   priority: 'max',
    //   vibrate: [0, 250, 250, 250],
    // });
    // // .then((res) => console.log(res))
    // let date = new Date()
    // date.setSeconds(date.getSeconds() + 5)
    // const {status, permissions} = await Permissions.askAsync(Permissions.NOTIFICATIONS)
    // await Notifications.scheduleLocalNotificationAsync({
    //   title: 'TIIIITLE',
    //   body: 'BOOODY',
    //   ios: {
    //     sound: true
    //   },
    //   android: {
    //     sticky: false,

    //   },
    // },{
    //   time: new Date(),
    //   repeat: 'minute'
    // })

  }

  useEffect(() => {
    console.log('APP INITIALIZED')
    registerNotification()
  }, [])

  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Home" options={{title: ''}}>
          {(props) => <Home {...props} /> }
        </Screen>
        <Screen
          name="Deck"
          options={{title: ''}}
          options={({route}) => ({title: route.params.deck.name})}
        >
          {(props) => <DeckView  {...props} />}
        </Screen>
        <Screen
          name='AddCard'
          options={({route}) => ({title: ''})}
        >
          {(props) => <AddCard {...props} />}
        </Screen>

        <Screen
          name='Quiz'
          option={({route}) => ({title: route.params.deck.name})}
        >
          {(props) => <Quiz {...props}/>}
        </Screen>

      </Navigator>
    </NavigationContainer>
  );
}

export default App;
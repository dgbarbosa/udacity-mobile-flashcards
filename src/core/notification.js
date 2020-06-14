import * as Permissions from 'expo-permissions'
import { Notifications } from 'expo'
import AsyncStorage from '@react-native-community/async-storage'
import { Platform } from 'react-native'

const NOTIFICATION_KEY = 'flashcards:notification'

export const clearLocalNotification  = () => {
    return AsyncStorage.removeItem(NOTIFICATION_KEY)
      .then(Notifications.cancelAllScheduledNotificationsAsync)
  }

export const registerNotification = () => {

    if(Platform.OS === 'android') {
        Notifications.createChannelAndroidAsync('default', {
            name: 'default',
            sound: true,
            priority: 'max',
            vibrate: [0, 250, 250, 250],
          });
    }

    AsyncStorage.getItem(NOTIFICATION_KEY)  
    .then(JSON.parse)
    .then((data) => {
        if(data === null) {
            Permissions.askAsync(Permissions.NOTIFICATIONS)
            .then(({status}) => {
                if(status === 'granted') {
                    Notifications.cancelAllScheduledNotificationsAsync()

                    let tomorrow = new Date()

                    tomorrow.setDate(tomorrow.getDate() + 1)
                    tomorrow.setHours(8)
                    tomorrow.setMinutes(0)

                    Notifications.scheduleLocalNotificationAsync({
                        title: 'Heey',
                        body: "Don't forget to study today",
                        ios: {
                            sound: true
                        },
                        android: {
                            sticky: false,
                            channelId: 'default'
                        }
                    },{
                        time: tomorrow,
                        repeat: 'day'
                    })

                    AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
                }
            })
        }
    })
}

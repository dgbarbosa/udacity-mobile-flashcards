import AsyncStorage from '@react-native-community/async-storage'
import {
  Notifications,
} from 'expo'


export const clearLocalNotification = () => {
  AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(() => {
      Notifications.cancelAllScheduledNotificationsAsync()
    })
}

export const  generateUUID = _ => {
    return 'xxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
  
export const calcPercentage = (total, x) => {
  return Math.round(x * 100 / total)
}


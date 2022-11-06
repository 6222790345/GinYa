import PushNotification from 'react-native-push-notification';

class Notifications {
    constructor() {
        PushNotification.configure({
            onRegister: function(token){
            },
            onNotification: function(notification){
                console.log('Notification:', notification);
            },
            popInitialNotification: true,
            requestPermissions: false,
        });

        PushNotification.createChannel(
            {
                channelId: 'reminders',
                channelName: 'Task reminder notifications',
                channelDescription: 'Reminder for any tasks',
            },
            () => {},
        );

        PushNotification.getScheduledLocalNotifications(rn => {
            console.log('SN --- ', rn);
        });
    }

    scheduleNotification(date) {
        PushNotification.localNotificationSchedule({
            channelId: 'reminders',
            title: 'Ginya App',
            message: 'Take your meds',
            date,
        });
    }
}

export default new Notifications();
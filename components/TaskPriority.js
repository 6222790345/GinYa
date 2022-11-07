import * as React from 'react';
import { Button } from 'react-native-paper';
import { Provider as PaperProvider } from 'react-native-paper';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const MyComponent = () => (
    <View style={styles.container}>
        <Text style={{textAlign: 'left'}}>Set Task Priority</Text>
        <View style={{ flexDirection:"row", alignItems:"space-around", flexWrap: "wrap"}}>
            <Button style={styles.button} title="low" mode='contained-tonal' onPress={() => console.log('Pressed')}>
                Low
            </Button>
            <Button style={styles.button} title="mid" mode="contained" onPress={() => console.log('Pressed')}>
                Mid
            </Button>
            <Button style={styles.button} title="high" mode="contained" onPress={() => console.log('Pressed')}>
                High
            </Button>
            <Button style={styles.button} title="+" mode="contained" onPress={() => console.log('Pressed')}>
               +
            </Button>
        </View>
    </View>
    );
export default MyComponent;


const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        margin: 10
    },
    button: {
        paddingHorizontal: 1,
        paddingVertical: 0,
        borderRadius: 10,
        backgroundColor: "coral",
        alignSelf: "flex-start",
        marginHorizontal: "1%",
        marginBottom: 6,
        minWidth: "10%",
        textAlign: "left",
    },
})
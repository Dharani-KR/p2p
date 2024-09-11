import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    return (
        <View>
        <View style={styles.square}>
            <Text>
                <Text style={styles.welcome}>Welcome to </Text>
            </Text>
            <Text>
                <Text style ={styles.p2p}>P2P 👋</Text>
            </Text> 
        </View>
        <StatusBar style="auto" />
        <View style ={styles.square1}>

        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    square: {
        backgroundColor: 'rgba(128, 128, 128, 0.2)', // Transparent gray (50% opacity)
        width: 500, 
        height: 250, 
        justifyContent: 'center', // Center the text vertically
        padding : 20    // Center the text horizontally
    },
    welcome: {
        fontSize: 35,
        color: 'black', // Keep text color unaffected by the background
        fontWeight: 'bold',
    },
    p2p:{
        fontSize: 35,
        color: 'black', // Keep text color unaffected by the background
        fontWeight: 'bold',
    },
    square1:{
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        width: 500, 
        height: 600, 
        borderRadius: 200,
    }
});

import { View, StyleSheet, Pressable, Button, Text } from 'react-native';

let loginPage = () => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#000000',
        },
        line: {
            width: '100%',
            height: 1,
            backgroundColor: '#ffffff',
            marginVertical: 20,
        },
        title: {
            width: '100%',
            textAlign: 'center',
            fontSize: 20,
            color: '#ffffff',
            marginVertical: 20,
        },
    });

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <View style={styles.line} />
        </View >
    );
};

export default loginPage;
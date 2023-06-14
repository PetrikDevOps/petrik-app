import { View, StyleSheet, Text, Pressable, TextInput } from 'react-native';

let loginPage = () => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            backgroundColor: '#1E1E1E',
            height: '100vh',
            width: '100vw',
        },
        line: {
            width: '100vh',
            height: 1,
            alignSelf: 'center',
            backgroundColor: '#474747',
        },
        title: {
            color: '#FFFFFF',
            fontSize: 40,
            textAlign: 'center',
            marginVertical: 20,
            fontWeight: 'bold',
        },
        input: {
            height: 50,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#ccc',
            paddingHorizontal: 10,
            marginBottom: 10,
            color: '#FFFFFF',
            marginHorizontal: 20,
        },
        footer: {
            marginTop: 20,
            color: '#FFFFFF',
            textAlign: 'center',
            fontSize: 14,
            marginBottom: 20,
        },
        loginButton: {
            height: 50,
            borderRadius: 10,
            backgroundColor: '#474747',
            width: 100,
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
          },
          loginButtonText: {
            color: '#FFFFFF',
            textAlign: 'center',
          },          
    });

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>
                    Login
                </Text>
                <View style={styles.line} />
            </View>
            <View>
                <TextInput
                    style={styles.input}
                    placeholder="Email Address"
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry
                />
                <Pressable style={styles.loginButton}>
                    <Text style={styles.loginButtonText}>
                        Login
                    </Text>
                </Pressable>
            </View>
            <View>
            <View style={styles.line} />
                <Text style={styles.footer}>
                    Made by PetrikDevOps
                </Text>
            </View>
        </View>
    );
};

export default loginPage;
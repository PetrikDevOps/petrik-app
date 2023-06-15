import { View, StyleSheet, Text, Pressable, TextInput } from 'react-native';

let mainPage = () => {
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
      marginTop: 20,
      marginBottom: 10,
      fontWeight: 'bold',
    },
    class: {
      color: '#FFFFFF',
      fontSize: 20,
      textAlign: 'center',
      marginVertical: 10,
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
    navbarButton: {
      height: 50,
      width: 100,
      borderRadius: 100,
      backgroundColor: '#474747',
      justifyContent: 'center',
      alignItems: 'center',
    },
    navbar: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      marginVertical: 20,
    },
  });

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Gipsz Jakab Jákob</Text>
        <Text style={styles.class}>kilencedik dé</Text>
        <View style={styles.line} />
        <Text style={styles.title}>Hírek</Text>
        <View style={styles.line} />
      </View>
      <View>
        <View style={styles.line} />
        <View style={styles.navbar}>
          <Pressable style={styles.navbarButton}>
            <Text style={styles.loginButtonText}>Főoldal</Text>
          </Pressable>
          <Pressable style={styles.navbarButton}>
            <Text style={styles.loginButtonText}>Helyettesítés</Text>
          </Pressable>
          <Pressable style={styles.navbarButton}>
            <Text style={styles.loginButtonText}>Chat</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default mainPage;

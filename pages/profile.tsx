import { View, StyleSheet, Text, Pressable, ScrollView } from 'react-native';
import Navbar from '../components/navbar';
import ClassCh from '../components/classCh';

const Profile = () => {
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
    stuffContainer: {
      paddingHorizontal: 25,
    },
    title: {
      color: '#EAEAEA',
      fontSize: 50,
      textAlign: 'center',
      marginTop: 25,
    },
    line: {
      color: '#EAEAEA',
      width: '100%',
      borderColor: '#EAEAEA',
      borderWidth: 1,
      alignSelf: 'center',
    },
    classText: {
      color: '#2AB4AB',
      fontSize: 20,
      textAlign: 'left',
      marginTop: 10,
    }
  });

  return (
    <View style={styles.container}>
      <View style={styles.stuffContainer}>
        <Text style={styles.title}>
          Profil
        </Text>
        <View style={styles.line }/>
        <Text style={styles.classText}>
          Osztály
        </Text>
        <ClassCh />
      </View>
      {/* navbar */}
      <Navbar />
    </View>
  );
};

export default Profile;

import React, { useState } from 'react';
import { View, StyleSheet, Text, Pressable, ScrollView } from 'react-native';

const helyettesitesPage = () => {
  const [selectedGrade, setSelectedGrade] = useState(9);
  const [selectedClass, setSelectedClass] = useState('KNy');
  const [errorMessage, setErrorMessage] = useState('');

  const validateClass = () => {
    if (selectedGrade > 9) {
      if (selectedClass === 'KNy' || selectedClass === 'Ny') {
        setErrorMessage('Invalid Class'); // Clear the error message
      } else {
        setErrorMessage('');
        console.log('Selected grade:', selectedGrade+selectedClass);
      }
    } else {
      setErrorMessage(''); // Clear the error message
      console.log('Selected grade:', selectedGrade);
    }
  };
  
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
    title: {
      fontWeight: '400',
      fontSize: 40,
      color: '#EAEAEA',
      textAlign: 'center',
      marginTop: 10,
    },
    line: {
      width: '90%',
      height: 1,
      backgroundColor: '#EAEAEA',
      marginTop: 10,
      marginBottom: 10,
      alignSelf: 'center',
    },
    newsContainer: {
      display: 'flex',
      flexDirection: 'column',
      marginHorizontal: '5%',
    },
    newsBigName: {
      fontSize: 40,
      fontWeight: '400',
      color: '#FFFFFF',
    },
    newsName: {
      fontSize: 20,
      color: '#2AB4AB',
      textAlign: 'right',
      marginRight: '5%',
    },
    newsRightName: {
      fontSize: 20,
      color: '#2AB4AB',
      textAlign: 'left',
      marginLeft: '5%',
    },
    descriptionText: {
      fontSize: 18,
      color: '#FFFFFF',
    },
    navbar: {
      height: 100,
      backgroundColor: '#252525',
      boxShadow: '0px -3px 4px #2AB4AB',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      paddingTop: 10,
    },
    navbarActiveButton: {
      width: '75px',
      height: '75px',
      backgroundColor: '#2AB4AB',
      borderRadius: 100,
    },
    navbarButton: {
      width: '75px',
      height: '75px',
      backgroundColor: '#D9D9D9',
      borderRadius: 100,
    },
    navbarButtonText: {
      fontSize: 20,
      color: '#000000',
      fontWeight: '400',
      textAlign: 'center',
      lineHeight: 75,
    },
    teacherText: {
      fontWeight: '400',
      fontSize: 30,
      color: '#EAEAEA',
      textAlign: 'center',
      marginTop: 10,
    },
    scrollViewContainer: {
      flex: 1,
      flexDirection: 'row', // Display scroll views side by side
    },
    scrollView: {
      flex: 1, // Take up equal space
    },
    errorMessage: {
      color: 'red',
      textAlign: 'center',
    },
    buttonContainer: {
      alignItems: 'center',
      marginBottom: 20,
    },
    button: {
      paddingVertical: 10,
      paddingHorizontal: 20,
      backgroundColor: '#2AB4AB',
      borderRadius: 5,
    },
    buttonText: {
      color: '#FFFFFF',
      fontSize: 18,
      fontWeight: 'bold',
    },
  });

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Helyettesítés</Text>
        <Text style={styles.newsName}>Válassz Osztályt</Text>
        <View style={styles.line} />
        <Text style={styles.newsRightName}>Hétfő</Text>
      </View>
      <View style={styles.scrollViewContainer}>
        <ScrollView style={styles.scrollView}>
          {[9, 10, 11, 12].map((grade) => (
            <Pressable
              key={grade}
              style={{
                ...styles.teacherText,
                backgroundColor:
                  selectedGrade === grade ? '#2AB4AB' : 'transparent',
              }}
              onPress={() => setSelectedGrade(grade)}
            >
              <Text>{grade}</Text>
            </Pressable>
          ))}
        </ScrollView>
        <ScrollView style={styles.scrollView}>
          {['KNy', 'Ny', 'A', 'B', 'C', 'D'].map((className) => (
            <Pressable
              key={className}
              style={{
                ...styles.teacherText,
                backgroundColor:
                  selectedClass === className ? '#2AB4AB' : 'transparent',
              }}
              onPress={() => setSelectedClass(className)}
            >
              <Text>{className}</Text>
            </Pressable>
          ))}
        </ScrollView>
      </View>
      {errorMessage !== '' && (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      )}
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={validateClass}>
          <Text style={styles.buttonText}>Check Class</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default helyettesitesPage;

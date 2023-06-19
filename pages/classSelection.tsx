import React, { useState } from 'react';
import { View, StyleSheet, Text, Pressable, ScrollView } from 'react-native';
import Navbar from '../components/navbar';
import classCh from '../components/classCh';

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
    navbar:{
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: 100,
    }
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Helyettesítés</Text>
      <View style={styles.line} />
      <View style={styles.newsContainer}>
        {classCh()}
      </View>
      <View style={styles.line} />
        <View style={styles.navbar}>
      {Navbar()}
        </View >
    </View>
  );
};

export default helyettesitesPage;

import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';

type RootStackParamList = {
  News: undefined;
  Helyettesites: undefined;
  Busz: undefined;
  Profile: undefined;
};

const Navbar = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={styles.navbar}>
      <Pressable
        style={styles.navbarActiveButton}
        onPress={() => navigation.navigate('News')}
      >
        <Text style={styles.navbarButtonText}>H</Text>
      </Pressable>
      <Pressable
        style={styles.navbarButton}
        onPress={() => navigation.navigate('Helyettesites')}
      >
        <Text style={styles.navbarButtonText}>H</Text>
      </Pressable>
      <Pressable
        style={styles.navbarButton}
        onPress={() => navigation.navigate('Busz')}
      >
        <Text style={styles.navbarButtonText}>B</Text>
      </Pressable>
      <Pressable
        style={styles.navbarButton}
        onPress={() => navigation.navigate('Profile')}
      >
        <Text style={styles.navbarButtonText}>P</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: 100,
    backgroundColor: '#252525',
    shadowColor: '#2AB4AB',
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: 10,
  },
  navbarActiveButton: {
    width: 75,
    height: 75,
    backgroundColor: '#2AB4AB',
    borderRadius: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navbarButton: {
    width: 75,
    height: 75,
    backgroundColor: '#D9D9D9',
    borderRadius: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navbarButtonText: {
    fontSize: 20,
    color: '#000000',
    fontWeight: '400',
    textAlign: 'center',
  },
});

export default Navbar;

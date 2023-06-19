import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import News from '../pages/news';
import New from '../pages/new';
import Helyettesites from '../pages/helyettesites';
import ClassSelection from '../pages/classSelection';

const Navbar = () => {
  return (
    <Router>
      <View style={styles.navbar}>
        <Pressable style={styles.navbarActiveButton}>
          <Text style={styles.navbarButtonText}>H</Text>
        </Pressable>
        <Pressable style={styles.navbarButton}>
          <Text style={styles.navbarButtonText}>H</Text>
        </Pressable>
        <Pressable style={styles.navbarButton}>
          <Text style={styles.navbarButtonText}>B</Text>
        </Pressable>
      </View>

      <Routes>
        <Route path="/" element={<News />} />
        <Route path="/ht" element={<Helyettesites />} />
        <Route path="/cs" element={<ClassSelection />} />
      </Routes>
    </Router>
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
  },
  navbarButton: {
    width: 75,
    height: 75,
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
});

export default Navbar;

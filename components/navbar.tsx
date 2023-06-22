import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    
      <View style={styles.navbar}>
        <Pressable style={styles.navbarActiveButton}>
            <Link to="/">
                <Text style={styles.navbarButtonText}>H</Text>
            </Link>
        </Pressable>
        <Pressable style={styles.navbarButton}>
            <Link to="/ht">
                <Text style={styles.navbarButtonText}>H</Text>
            </Link>
        </Pressable>
        <Pressable style={styles.navbarButton}>
            <Link to="/b">
                <Text style={styles.navbarButtonText}>B</Text>
            </Link>
        </Pressable>
        <Pressable style={styles.navbarButton}>
            <Link to="/p">
                <Text style={styles.navbarButtonText}>P</Text>
            </Link>
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

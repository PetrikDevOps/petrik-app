import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';

const Navbar = () => {
  return (
    <View style={styles.navbar}>
        <Pressable style={styles.navbarActiveButton}>
            <Text style={styles.navbarButtonText}>
                H
            </Text>
        </Pressable>
        <Pressable style={styles.navbarButton}>
            <Text style={styles.navbarButtonText}>
                H
            </Text>
        </Pressable>
        <Pressable style={styles.navbarButton}>
            <Text style={styles.navbarButtonText}>
                B
            </Text>
        </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default Navbar;
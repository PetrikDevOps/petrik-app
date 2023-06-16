import { View, StyleSheet, Text, Pressable, ScrollView } from 'react-native';
import HelyettesitesTable from '../components/table';
import Navbar from '../components/navbar';

const helyettesitesPage = () => {
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
          flex: 1, // Take up all available space
        },
    });

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Helyettesítés</Text>
                <Text style={styles.newsName}>
                    10.E Helyettesítés
                </Text>
                <View style={styles.line} />
                <Text style={styles.newsRightName}>
                    Hétfő
                </Text>
            </View>
            <View style={styles.scrollViewContainer}>
                <ScrollView>
                  <Text style={styles.teacherText}>
                    Béresné Bodó Noémi
                  </Text>
                  <HelyettesitesTable />
                </ScrollView>
            </View>
            {/* navbar */}
             <Navbar />
        </View>
    );
};

export default helyettesitesPage;

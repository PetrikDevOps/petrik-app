import { View, StyleSheet, Text, Pressable, ScrollView } from 'react-native';
import Navbar from '../components/navbar';

const NewsPage = () => {
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
      fontSize: 60,
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
    },
    descriptionText: {
      fontSize: 18,
      color: '#FFFFFF',
    },
    image: {
      width: '100%',
      height: '250px',
      backgroundColor: '#FFFFFF',
      marginVertical: 10,
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
    }
  });

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Petrik</Text>
        <View style={styles.line} />
      </View>
      <ScrollView>
        <View style={styles.newsContainer}>
          <Text style={styles.newsName}>
            Codeweek 2023
          </Text>
          <Text style={styles.newsBigName}>
            Az elveszett code
          </Text>
          <View style={styles.image} />
          <Text style={styles.descriptionText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit at imperdiet dui accumsan. Ut ornare lectus sit amet est placerat in egestas erat. Facilisi cras fermentum odio eu. .....MORE...
          </Text>
        </View>
        <View style={styles.line} />
        <View style={styles.newsContainer}>
          <Text style={styles.newsName}>
            Codeweek 2023
          </Text>
          <Text style={styles.newsBigName}>
            Az elveszett code
          </Text>
          <View style={styles.image} />
          <Text style={styles.descriptionText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit at imperdiet dui accumsan. Ut ornare lectus sit amet est placerat in egestas erat. Facilisi cras fermentum odio eu. .....MORE...
          </Text>
        </View>
        <View style={styles.line} />
        <View style={styles.newsContainer}>
          <Text style={styles.newsName}>
            Codeweek 2023
          </Text>
          <Text style={styles.newsBigName}>
            Az elveszett code
          </Text>
          <View style={styles.image} />
          <Text style={styles.descriptionText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit at imperdiet dui accumsan. Ut ornare lectus sit amet est placerat in egestas erat. Facilisi cras fermentum odio eu. .....MORE...
          </Text>
        </View>
        <View style={styles.line} />
      </ScrollView>
      {/* navbar */}
      <Navbar />
    </View>
  );
};

export default NewsPage;

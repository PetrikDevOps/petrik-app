import { View, StyleSheet, Text, Pressable, ScrollView } from 'react-native';
import Navbar from '../components/navbar';

const newPage = () => {
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
        descriptionText: {
            fontSize: 18,
            color: '#FFFFFF',
            marginBottom: 10,
        },
        image: {
            width: '100%',
            height: '250px',
            backgroundColor: '#FFFFFF',
            marginVertical: 10,
            alignSelf: 'center',
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
        scrollViewContainer: {
            flex: 1, // Take up all available space
            marginHorizontal: 20,
        },
    });

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Az elveszett code</Text>
                <Text style={styles.newsName}>
                    Codeweek 2023
                </Text>
                <View style={styles.line} />
            </View>
            <View style={styles.scrollViewContainer}>
                <ScrollView>
                    <View style={styles.image} />
                    <Text style={styles.descriptionText}>
                        Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Elit
                        at imperdiet dui accumsan.
                        Ut ornare lectus sit amet est
                        placerat in egestas erat. Facilisi
                        cras fermentum odio eu. Gravida
                        neque convallis a cras semper auc
                        tor neque. Netus et malesuada fames
                        ac turpis egestas. Orci phasellu
                        s egestas tellus rutrum tellus.
                        In ornare quam viverra orci. a cras semper auc tor neque. Netus et malesuada fames ac turpis egestas. Orci phasellu s egestas tellus rutrum tellus. In ornare quam viverra orci.
                    </Text>
                </ScrollView>
            </View>
            {/* navbar */}
            <Navbar />
        </View>
    );
};

export default newPage;

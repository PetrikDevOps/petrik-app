import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

const HelyettesitesTable = () => {
  const tableHead = ['Tanár neve', 'Csoport', 'Óra', 'Egyéb'];
  const tableData = [
    ['Bagóné Tóth Katalin', '9.A/2', '3', '06-23 4.óra Előre'],
  ];

  return (
    <View style={styles.container}>
      <Table borderStyle={styles.border}>
        <Row data={tableHead} style={styles.head} textStyle={styles.headText} />
        <Rows data={tableData} style={styles.row} textStyle={styles.rowText} />
      </Table>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: '#1E1E1E'
  },
  border: { borderWidth: 1, borderColor: '#EAEAEA', },
  head: { height: 40, backgroundColor: '#1E1E1E' },
  headText: { margin: 6, color: '#EAEAEA', },
  row: { height: 55 },
  rowText: { margin: 6, color: '#EAEAEA', },
});

export default HelyettesitesTable;
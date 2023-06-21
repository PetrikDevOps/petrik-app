import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

const BuszTable = () => {
  const tableHead = ['Busz', 'Idő'];
  const tableData = [
    ['5', '3p'],
    ['5', '3p'],
    ['5', '3p'],
    ['5', '3p'],
    ['5', '3p'],
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

export default BuszTable;
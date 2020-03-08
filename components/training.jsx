import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';

export default () =>  {
  const [people, setPeople] = useState([
    { name: 'Emeka', id: '1' },
    { name: 'Musa', id: '2' },
    { name: 'Amadu', id: '3' },
    { name: 'Bello', id: '4' },
    { name: 'Susan', id: '5' },
    { name: 'Mario', id: '6' },
    { name: 'Ninja', id: '7' },
  ]);

  return (
    <View style={styles.container}>
        <FlatList
            numColumns={2}
            keyExtractor={({ id }) => id}
            data={people}
            renderItem={({ item: { name, id } }) => (
                <TouchableOpacity onPress={() => setPeople(prevPeople => prevPeople.filter(peep => peep.id !== id))}>
                    <Text style={styles.item}>{name}</Text>
                </TouchableOpacity>
            )}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
  }
});

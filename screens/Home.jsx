import React, { useState } from 'react';
import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import { globalStyles } from '../styles/global';

export default ({ navigation: { push }}) => {
    const [reviews, setReviews] = useState([
        { id: '1', title: 'The name of thermodynamics', rating: 4, year: 2001 },
        { id: '2', title: 'The name of Musa the greatest', rating: 3, year: 2011},
        { id: '3', title: 'The name of Homo-habillis', rating: 2, year: 1848 },
    ]);
    const { container, titleText } = globalStyles;
    return (
        <View style={container}>
            <FlatList
                data={reviews}
                keyExtractor={({ id }) => id}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => push('ReviewDetails', item)} style={{ ...titleText, padding: 10, marginTop: 10 }}>
                        <Text>{item.title}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
};

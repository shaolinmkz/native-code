import React, { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';

export default () => {
    const [todos, setTodos] = useState([
        {text: 'Wake up', id: '1'},
        {text: 'Start work', id: '2'},
        {text: 'Raise Pull Request', id: '3'},
        {text: 'Return from work', id: '4'},
        {text: 'Sleep off', id: '5'},
    ]);

    const [newTodo, setNewTodo] = useState('');

    const handleRemove = (id) => setTodos(prevTodo => prevTodo.filter(todo => todo.id !== id));
    
    const addTodos = (todo) => {
        if(newTodo.length > 2) {
            setTodos(prevTodo => ([{ text: todo, id: `${Math.random().toString()}`}, ...prevTodo]));
            setNewTodo('');
        } else {
            Alert.alert('Oops!', 'Todo character must be over 3 chars long', [
                { text: 'Understood', onPress: () => console.log('Aert Closed') }
            ]);
        }
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                {/* {Header} */}
                <View style={styles.header}>
                    <Text style={styles.header}>My Todos</Text>
                </View>
                {/* {Input Field} */}
                <TextInput
                    style={styles.input}
                    placeholder="Enter todo..."
                    value={newTodo}
                    onChangeText={(value) => setNewTodo(value)}
                />

                {/* {Input Button} */}
                <TouchableOpacity disabled={!Boolean(newTodo)} style={{ ...styles.button, opacity: !Boolean(newTodo) ? 0.5 : 1 }} onPress={() => addTodos(newTodo)}>
                    <Text style={{ textAlign: 'center', color: '#fff', fontWeight: 'bold' }}>Add Todos</Text>
                </TouchableOpacity>
                {/* {List} */}
               {todos.length ? <FlatList
                    keyExtractor={({ id }) => id}
                    data={todos}
                    renderItem={({ item: { text, id } }) => (
                        <TouchableOpacity style={styles.item} onPress={() => handleRemove(id)}>
                          <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <MaterialIcons name="delete" size={18} color="#333" />
                            <Text style={{ marginLeft: 10 }}>{text}</Text>
                          </View>
                        </TouchableOpacity>
                    )}
                /> : <Text style={{ textAlign: 'center', color: '#000', fontWeight: 'bold', padding: 50 }}>No Todos</Text>}
            </View>
        </TouchableWithoutFeedback>
    )
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    input: {
        marginTop: 20,
        marginHorizontal: 20,
        paddingVertical: 20,
        fontSize: 20,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0, 0, 0, 0.1)'
    },
    item: {
        borderStyle: 'dashed',
        borderWidth: 1,
        paddingVertical: 20,
        paddingLeft: 20,
        borderColor: '#777',
        textAlign: 'center',
        marginTop: 10,
        marginHorizontal: 20,
        borderRadius: 10,
    },
    header: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor: 'orange',
        color: '#fff',
        paddingVertical: 10,
        paddingTop: 20,
    },
    button: {
        paddingVertical: 20,
        backgroundColor: 'orange',
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 30,
        marginHorizontal: 20,
        borderRadius: 2,
        color: '#fff'
    },
});

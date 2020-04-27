import React, { useState } from 'react'
import axios from 'axios';
import { StyleSheet, View, Text, Button, Keyboard, TouchableWithoutFeedback, Alert, FlatList } from 'react-native'

import Card from '../components/Card'
import Colors from '../costants/colors'
import Input from '../components/Input'

const StartGameScreen = props => {




    const [enteredValue, setEnteredValue] = useState('')
    const [confirmed, setConfirmed] = useState(false)
    const [selectedNumber, setSelectedNumber] = useState()

    // const listApi = []
    // const componentDidMount = () => {
    //     axios.get(`https://jsonplaceholder.typicode.com/posts`)
    //         .then(res => {
    //             const listApi = res.data;
    //             console.log(listApi)
    //         })
    // }

    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''))
    }

    const resetInputHandler = () => {
        setEnteredValue('')
        setConfirmed(false)
    }

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue)
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Invalid Number', 'Number has to be a number between 1 and 99', [{
                text: 'Okay',
                style: 'destructive',
                onPress: resetInputHandler
            }])
            return;
        }
        setConfirmed(true)
        setSelectedNumber(chosenNumber)
        setEnteredValue('')
        Keyboard.dismiss()
       // componentDidMount()
    }

    let confirmedOutput

    if (confirmed) {
        confirmedOutput = (
            <Card style={styles.cardNumber}>
                <Text>Chosen Number: </Text>
                <Text style={styles.textNumber}>{selectedNumber}</Text>
                <Button title='START GAME' />
            </Card>
        )
    }

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss()
        }}>
            <View style={styles.screen}>
                <Text style={styles.title}>Start a New Game</Text>
                <Card style={styles.inputContainer}>
                    <Text>Select a Number</Text>
                    <Input
                        keyboardType="numeric"
                        maxLength={2}
                        blurOnSubmit
                        autoCapitalize="none"
                        autoCorrect={false}
                        style={styles.input}
                        onChangeText={numberInputHandler}
                        value={enteredValue}
                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button title="Reset" onPress={resetInputHandler} color={Colors.accent} />
                        </View>
                        <View style={styles.button}>
                            <Button title="Confirm" onPress={confirmInputHandler} color={Colors.primary} />
                        </View>
                    </View>
                </Card>
                {confirmedOutput}
                {/* <FlatList
                    data={listApi}
                    renderItem={({ item }) => <Item title={item.title} />}
                    keyExtractor={item => item.id}
                /> */}
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    button: {
        width: 100
    },
    input: {
        width: 35,
        borderBottomWidth: 1,
        textAlign: 'center'
    },
    cardNumber: {
        marginVertical: 15
    },
    textNumber: {
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center',
        borderWidth: 2,
        borderRadius: 10,
        marginVertical: 5,
        borderColor: Colors.accent,
        color: Colors.accent,
        alignItems: 'center'
    }
})

export default StartGameScreen
import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

const Input = props => {
    return <TextInput {...props} style={{...styles.input, ...props.style}}/>
}

const styles = StyleSheet.create({
    input:{
        borderColor: 'grey',
        marginVertical: 15
    }
})

export default Input